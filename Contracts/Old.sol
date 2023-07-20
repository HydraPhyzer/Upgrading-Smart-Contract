//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Old{
    uint256 public Num;

    function Set(uint256 Temp) public {
        Num = Temp;
    }
    function Get() public view returns(uint256){
        return Num;
    }
}

//0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0