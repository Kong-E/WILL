// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
    address public owner;
    uint256 public last_completed_migration;

    constructor() {
        owner = msg.sender; // 생성자의 주소를 owner에 저장
    }

    modifier restricted() {
        require(msg.sender == owner,
        "This function is restricted to the contract's owner"
        );
        _;
    }

    function setCompleted(uint256 completed) public restricted {
        last_completed_migration = completed;
    }

    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address); // 상속받은 Migrations의 인스턴스를 생성
        upgraded.setCompleted(last_completed_migration);
    }
}