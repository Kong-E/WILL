import React, { useCallback, useEffect, useState, useRef } from 'react';
import styles from './Writing6.module.scss';
import { PageNavigation, Progress } from 'components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { WillState } from 'stores/will-store';

const mimeType = 'audio/webm';

export const Writing6 = () => {
  const [willState, setWillState] = useRecoilState(WillState);
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);

  const getMicrophonePermission = async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.');
    }
  };

  const startRecording = async () => {
    setRecordingStatus('recording');
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = event => {
      if (typeof event.data === 'undefined') return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    setRecordingStatus('inactive');
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
    };
  };

  useEffect(() => {
    getMicrophonePermission();
  }, []);

  return (
    <>
      <Progress step={5} />
      <div className={styles.container}>
        <div className={styles.info_container}>
          <div className={styles.title}>녹음하기</div>
          <div className={styles.text}>
            법적 효력이 있는 유언장을 저장하기 위해 작성해주신 유언장 내용을 바탕으로 녹음을 진행합니다.
          </div>
          <div className={styles.legal_effect_wrapper}>
            <img className={styles.legal_effect_img} src="/images/QuestionMark.svg" alt="question_mark" />
            법적 효력 안내
          </div>
        </div>
        <div className={styles.record_container}>
          <div
            className={recordingStatus === 'recording' ? `${styles.record_img} ${styles.active}` : styles.record_img}
          />
          {recordingStatus === 'recording' ? (
            <div className={`${styles.record_button} ${styles.active}`} onClick={stopRecording}>
              녹음 완료하기
            </div>
          ) : (
            <div className={styles.record_button} onClick={startRecording}>
              녹음 시작하기
            </div>
          )}
          {audio && (
            <>
              <audio className={styles.audio} src={audio} controls></audio>
              {/* <a download href={audio}>
                Download Recording
              </a> */}
            </>
          )}
          <div className={styles.text}>녹음이 시작되면 유언장 내용을 읽어주세요.</div>
        </div>
        <div className={styles.will_textarea}>
          <div>{willState.funeral.selected}</div>
          <div>{willState.funeral.note}</div>
          <div>{willState.grave.selected}</div>
          <div>{willState.grave.note}</div>
          <div>{willState.lifeSupport.selected}</div>
          <div>{willState.organDonation.selected}</div>
          <div>{willState.inheritance.selected}</div>
          <div>{willState.inheritance.note}</div>
        </div>
        <PageNavigation nextPath="/writing7" />
        <div className={styles.date_text}>작성일자 서기 YYYY년 MM월 DD일</div>
      </div>
    </>
  );
};
