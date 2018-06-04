pragma solidity ^0.4.0;
contract CarInsurance {
    
    address public customer; 
    address public insurance_comapny;
    address public resolver;
    uint public eligible_for_insurance = 0;
    
constructor() public{
    customer = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;
    insurance_comapny = 0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C;
    resolver = 0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB;
}

function payPremium() public payable {
    require(msg.value > 2 ether);
}

function insuranceAmount() public payable {
    require(msg.value > 20 ether);
}
    
function claimInsurance() public{
    if(eligible_for_insurance == 1){
        customer.transfer(address(this).balance);    
    }
}

function approveInsurance() public {
    require(msg.sender == resolver);
    eligible_for_insurance = 1;
}
     
}