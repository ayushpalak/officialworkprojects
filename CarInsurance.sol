pragma solidity ^0.4.0;
contract CarInsurance {
    
    address public customer; 
    address public insurance_comapny;
    address public resolver;
    uint public eligible_for_insurance = 0;
    
constructor(address _customer, address _insurance_company, address _resolver) public{
    customer = msg.sender;
    insurance_comapny = _insurance_company;
    resolver = _resolver;
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