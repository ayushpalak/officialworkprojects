const path = require('path');
const fs = require('fs');
const solc = require('solc');

const CarInsurancePath = path.resolve(__dirname, 'contract', 'CarInsurance.sol');
const source = fs.readFileSync(CarInsurancePath, 'utf8');

//module.exports = solc.compile(source, 1).contracts[':CarInsurance'];

console.log(solc.compile(source, 1));

const interface = "[\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"approveInsurance\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"claimInsurance\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"insuranceAmount\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": true,\n" +
    "\t\t\"stateMutability\": \"payable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"payPremium\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": true,\n" +
    "\t\t\"stateMutability\": \"payable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_InsuranceCompany\",\n" +
    "\t\t\t\t\"type\": \"address\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"setInsuranceCompany\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_resolver\",\n" +
    "\t\t\t\t\"type\": \"address\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"setResolver\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"constructor\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": true,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"customer\",\n" +
    "\t\t\"outputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"\",\n" +
    "\t\t\t\t\"type\": \"address\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"view\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": true,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"eligible_for_insurance\",\n" +
    "\t\t\"outputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"view\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": true,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"insurance_company\",\n" +
    "\t\t\"outputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"\",\n" +
    "\t\t\t\t\"type\": \"address\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"view\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": true,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"resolver\",\n" +
    "\t\t\"outputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"\",\n" +
    "\t\t\t\t\"type\": \"address\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"view\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t}\n" +
    "]";

const bytecode = "{\n" +
    "\t\"linkReferences\": {},\n" +
    "\t\"object\": \"608060405260006003556000600455600060055534801561001f57600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506105178061006f6000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806304f3bcec146100a95780632804b2c01461010057806329c08ba214610157578063317f11d9146101615780634e543b26146101a457806372a600e6146101e757806376f993f7146101fe578063a74f996514610255578063a75ac6081461025f578063d3a4184014610276575b600080fd5b3480156100b557600080fd5b506100be6102a1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010c57600080fd5b506101156102c7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61015f6102ec565b005b34801561016d57600080fd5b506101a2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610304565b005b3480156101b057600080fd5b506101e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061035c565b005b3480156101f357600080fd5b506101fc6103b4565b005b34801561020a57600080fd5b5061021361041a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61025d610440565b005b34801561026b57600080fd5b50610274610458565b005b34801561028257600080fd5b5061028b6104e5565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b66470de4df820000341015151561030257600080fd5b565b600060045414156103595780600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016004819055505b50565b600060055414156103b15780600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016005819055505b50565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561041057600080fd5b6001600381905550565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b66b1a2bc2ec50000341015151561045657600080fd5b565b600160035414156104e3576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f193505050501580156104e1573d6000803e3d6000fd5b505b565b600354815600a165627a7a723058206dc0e827655df31c43bd6f358ec6aded154a88af8515e2a66d4b25bfbd2fcdd10029\",\n" +
    "\t\"opcodes\": \"PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 PUSH1 0x3 SSTORE PUSH1 0x0 PUSH1 0x4 SSTORE PUSH1 0x0 PUSH1 0x5 SSTORE CALLVALUE DUP1 ISZERO PUSH2 0x1F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLER PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH2 0x517 DUP1 PUSH2 0x6F PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xA4 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0x4F3BCEC EQ PUSH2 0xA9 JUMPI DUP1 PUSH4 0x2804B2C0 EQ PUSH2 0x100 JUMPI DUP1 PUSH4 0x29C08BA2 EQ PUSH2 0x157 JUMPI DUP1 PUSH4 0x317F11D9 EQ PUSH2 0x161 JUMPI DUP1 PUSH4 0x4E543B26 EQ PUSH2 0x1A4 JUMPI DUP1 PUSH4 0x72A600E6 EQ PUSH2 0x1E7 JUMPI DUP1 PUSH4 0x76F993F7 EQ PUSH2 0x1FE JUMPI DUP1 PUSH4 0xA74F9965 EQ PUSH2 0x255 JUMPI DUP1 PUSH4 0xA75AC608 EQ PUSH2 0x25F JUMPI DUP1 PUSH4 0xD3A41840 EQ PUSH2 0x276 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBE PUSH2 0x2A1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x10C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x115 PUSH2 0x2C7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x15F PUSH2 0x2EC JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x16D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1A2 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x304 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1B0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1E5 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x35C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1F3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1FC PUSH2 0x3B4 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x20A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x213 PUSH2 0x41A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x25D PUSH2 0x440 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x26B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x274 PUSH2 0x458 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x282 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x28B PUSH2 0x4E5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x2 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH7 0x470DE4DF820000 CALLVALUE LT ISZERO ISZERO ISZERO PUSH2 0x302 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMP JUMPDEST PUSH1 0x0 PUSH1 0x4 SLOAD EQ ISZERO PUSH2 0x359 JUMPI DUP1 PUSH1 0x1 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x1 PUSH1 0x4 DUP2 SWAP1 SSTORE POP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 SLOAD EQ ISZERO PUSH2 0x3B1 JUMPI DUP1 PUSH1 0x2 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x1 PUSH1 0x5 DUP2 SWAP1 SSTORE POP JUMPDEST POP JUMP JUMPDEST PUSH1 0x2 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO ISZERO PUSH2 0x410 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x3 DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH7 0xB1A2BC2EC50000 CALLVALUE LT ISZERO ISZERO ISZERO PUSH2 0x456 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMP JUMPDEST PUSH1 0x1 PUSH1 0x3 SLOAD EQ ISZERO PUSH2 0x4E3 JUMPI PUSH1 0x0 DUP1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC ADDRESS PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x4E1 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP JUMPDEST JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 PUSH14 0xC0E827655DF31C43BD6F358EC6AD 0xed ISZERO 0x4a DUP9 0xaf DUP6 ISZERO 0xe2 0xa6 PUSH14 0x4B25BFBD2FCDD100290000000000 \",\n" +
    "\t\"sourceMap\": \"24:1030:0:-;;;191:1;154:38;;225:1;198:28;;251:1;232:20;;259:50;8:9:-1;5:2;;;30:1;27;20:12;5:2;259:50:0;296:10;285:8;;:21;;;;;;;;;;;;;;;;;;24:1030;;;;;;\"\n" +
    "}";

module.exports = {interface,bytecode};