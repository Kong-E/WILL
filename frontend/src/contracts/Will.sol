// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Will {
    string private email;
    string private username;
    string private will;
    string private audioHash;
    uint256 private createdTimestamp; // 타임스탬프를 저장할 변수

    constructor() {
        createdTimestamp = block.timestamp; // 스마트 컨트랙트 생성 시의 블록 타임스탬프 저장
    }

    function setWill(
        string memory _email,
        string memory _username,
        string memory _will,
        string memory _audioHash
    ) public {
        email = _email;
        username = _username;
        will = _will;
        audioHash = _audioHash;
    }

    function getWill()
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            uint256
        )
    {
        return (email, username, will, audioHash, createdTimestamp);
    }
}
