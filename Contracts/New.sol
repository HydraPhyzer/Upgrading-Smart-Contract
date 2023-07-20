//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract New{
    uint256 public Num;

    function Set(uint256 Temp) public {
        Num = Temp;
    }
    function Get() public view returns(uint256){
        return Num;
    }
    function Increment() public {
        Num++;
    }
}