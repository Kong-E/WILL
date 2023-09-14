// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Will {
    string private email;
    string private username;
    string private will;
    string private audioHash;
    string private createdAt;
    string private willHash;

    constructor() {}

    function setWill(
        string memory _email,
        string memory _username,
        string memory _will,
        string memory _audioHash,
        string memory _createdAt,
        string memory _willHash
    ) public {
        email = _email;
        username = _username;
        will = _will;
        audioHash = _audioHash;
        createdAt = _createdAt;
        willHash = _willHash;
    }

    function getWill()
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        return (email, username, will, audioHash, createdAt, willHash);
    }
}
