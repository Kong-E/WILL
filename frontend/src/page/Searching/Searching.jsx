import React, { useState } from 'react';
import styles from './Searching.module.scss';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import { useRecoilState } from 'recoil';
import { ParamsState, TxHashState } from 'stores/search-store';

export const Searching = () => {
  // const [name, setName] = useState('');
  const [txHash, setTxHash] = useRecoilState(TxHashState);
  const [params, setParams] = useRecoilState(ParamsState);
  const navigate = useNavigate();

  // Ethereum 네트워크 연결
  const web3 = new Web3('http://127.0.0.1:8545'); // Ethereum 네트워크 RPC URL로 대체

  const getTransaction = async () => {
    try {
      const tx = await web3.eth.getTransaction(txHash);
      if (tx) {
        let tx_data = tx.input;
        let input_data = '0x' + tx_data.slice(10); // get only data without function selector

        let params = web3.eth.abi.decodeParameters(
          ['string', 'string', 'string', 'string', 'string', 'string'],
          input_data,
        );
        console.log(params);
        setParams(params);
      } else {
        console.log('트랜잭션을 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('트랜잭션 가져오기 오류:', error);
    }
  };

  /* const handleNameChange = e => {
    setName(e.target.value);
  }; */

  const handleCodeChange = e => {
    setTxHash(e.target.value);
  };

  const handleSave = async e => {
    e.preventDefault();

    if (!txHash) {
      alert('보안코드를 입력해주세요.');
      return;
    }

    await getTransaction();

    if (!params[0]) {
      alert('유언장을 찾을 수 없습니다.');
    } else {
      navigate('/searchResultSuccess');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> 유언장 찾기</h1>
      <h2 className={styles.subtitle}> 가족의 유언장이 보관되어 있는지 확인해보세요.</h2>

      <form className={styles.form}>
        {/* <div className={styles.wrapper}>
          <label htmlFor="name" style={{ marginRight: '26px' }}>
            이름&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input type="text" id="name" placeholder="이름을 입력해주세요." value={name} onChange={handleNameChange} />
        </div> */}
        <div className={styles.wrapper}>
          <label htmlFor="code" style={{ marginRight: '26px' }}>
            보안코드
          </label>
          <input
            type="text"
            id="code"
            placeholder="보안코드를 입력해주세요."
            value={txHash}
            onChange={handleCodeChange}
          />
        </div>
        <button className={styles.search_button} type="submit" onClick={handleSave}>
          검색하기
        </button>
      </form>
    </div>
  );
};
