import React, { useEffect, useState } from 'react';
import styles from './Writing8.module.css';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import Will from 'truffle_abis/Will.json';
import { useRecoilState, useRecoilValue } from 'recoil';
import { WillState } from 'stores/will-store';
import { UserState } from 'stores/login-store';
import { create as ipfsHttpClient } from 'ipfs-http-client';

export const Writing8 = () => {
  const navigate = useNavigate();

  const [transactionStatus, setTransactionStatus] = useState('');
  const [web3, setWeb3] = useState(null);
  const [willState, setWillState] = useRecoilState(WillState);
  const userState = useRecoilValue(UserState);
  const [ipfs, setIpfs] = useState(null);
  const [ipfsHash, setIpfsHash] = useState(null);

  const projectId = process.env.REACT_APP_PROJECT_ID;
  const projectSecretKey = process.env.REACT_APP_PROJECT_KEY;
  const auth = 'Basic ' + btoa(projectId + ':' + projectSecretKey);

  const ipfsUpload = async () => {
    const ipfsClient = await ipfsHttpClient({
      url: 'https://ipfs.infura.io:5001/api/v0',
      headers: {
        authorization: auth,
      },
    });
    setIpfs(ipfsClient);
  };

  const handleSubmitIPFS = async () => {
    if (willState.audio) {
      const added = await ipfs.add(willState.audio);
      console.log(added);
      setIpfsHash(added.path);
      setWillState(prevState => ({
        ...prevState,
        ipfsHash: added.path,
      }));
    } else {
      alert('No audio data available to upload to IPFS.');
    }
  };

  /* const loadProvider = async () => {
    if (window.ethereum) {
      const provider = window.ethereum;
      provider.enable();

      const web3Instance = new Web3(provider);
      setWeb3(web3Instance);
    }
  }; */

  const handleSaveToBlockchain = async () => {
    try {
      // Ethereum 네트워크 연결
      const web3 = new Web3('http://127.0.0.1:7545'); // Ethereum 네트워크 RPC URL로 대체

      // 스마트 컨트랙트 ABI 및 주소 가져오기
      const contractAbi = Will.abi;
      const contractAddress = '0x951071b3a1224b0C85d7807b7c4508880953d826'; // 스마트 컨트랙트 주소로 대체

      // 스마트 컨트랙트 인스턴스 생성
      const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

      // Recoil로부터 데이터 가져오기 (예: willState.openDate)
      const email = userState.email;
      const username = userState.username;
      const will = willState.will;
      const audioHash = willState.ipfsHash;

      console.log(audioHash);

      // 트랜잭션 데이터 및 설정
      const fromAddress = '0x86948078a2bC9A367DE4c1E24E9E8573f09cF20b'; // 원하는 주소로 대체 가능
      const gasPrice = web3.utils.toWei('10', 'gwei');

      // 스마트 컨트랙트 함수 호출
      const result = await contractInstance.methods.setWill(email, username, will, audioHash).send({
        from: fromAddress,
        value: 0,
        gas: 1000000,
        gasPrice: gasPrice,
        to: contractAddress,
      });

      // 트랜잭션 성공 시 처리
      console.log('트랜잭션 성공:', result);
      setTransactionStatus(result.transactionHash);
    } catch (error) {
      // 트랜잭션 에러 처리
      console.error('트랜잭션 에러:', error);
      setTransactionStatus(`트랜잭션 에러: ${error.message}`);
    }
  };

  useEffect(() => {
    ipfsUpload();
  }, []);

  useEffect(() => {
    if (ipfs) {
      handleSubmitIPFS();
    }
  }, [ipfs]);

  useEffect(() => {
    if (ipfsHash) {
      handleSaveToBlockchain();
    }
  }, [ipfsHash]);

  return (
    <div className={styles.container}>
      <p className={styles.textBig} style={{ marginTop: '150px' }}>
        블록체인 유언장을 생성 중입니다...
      </p>
      <p className={styles.text} style={{ marginTop: '0px' }}>
        저장된 유언장은 블록체인 기술
        <span className={styles.text} style={{ fontWeight: '500' }}></span>
        을 통해 <br />
        타인에 의해 훼손되지 않고 안전하게 보관됩니다.
      </p>
      <img width="252px" height="170px" marginTop="27px" src="CreatWill.svg" />
    </div>
  );
};
