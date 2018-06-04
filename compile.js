const path = require('path');
const fs = require('fs');
const solc = require('solc');

const CarInsurancePath = path.resolve(__dirname, 'contracts', 'CarInsurance.sol');
const source = fs.readFileSync(CarInsurancePath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':CarInsurance'];
