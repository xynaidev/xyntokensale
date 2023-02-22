const web3 = require('web3');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const TokenPreSale = artifacts.require("TokenPreSale");
var TestErc20Token = artifacts.require("TestErc20Token");
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const devAddress = ""

const router = '0x10ED43C718714eb63d5aA57B78B54704E256024E'
const factory = '0xca143ce32fe78f1f7019d7d551a6402fc5350c73'
const weth = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
const locker = '0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE'

const timeUnlockLiquidity = '1677098700'
const _baseDecimals = "1000000000000000000"
// in seconds
const _vestingCliff = "1"
// in seconds
const _vestingPeriod = "86400"
const _marketingPercentage = "20"
const _whitelistSeed = ['0x907aF7e62C18781520A72bEf5dADAd4C999BcAcE']
const _whitelistPrivate = ['0x907aF7e62C18781520A72bEf5dADAd4C999BcAcE']

// Add Time
const _startTimeSeedSale = '1677019500'
const _endTimeSeedSale  = '1677020400'

const _startTimePrivateSale  = '1677020460'
const _endTimePrivateSale  = '1677021300'

const _startTimePublicSale  = '1677021360'
const _endTimePublicSale  = '1677022200'

const _vestingStartTime  = '1677022201'

// Add Data
// NOT IN WEI
const _tokensToSellSeedSale = "100000"
const _tokensToSellPrivateSale = "100000"
const _tokensToSellPublicSale = "300000"

// NOT IN WEI
const _amountTokensForLiquidity = "500000"

const _maxAmountTokensForSalePerUserForSeed = "100000"
const _maxAmountTokensForSalePerUserForPrivate = "100000"
const _maxAmountTokensForSalePerUserForPublic = "300000"

// NEED TO BE IN WEI
const _priceSeedSale = "100000000000"
const _pricePrivateSale = "100000000000"
const _pricePublicSale = "100000000000"




module.exports = async function (deployer) {
  
  // Deploy Mock Token
  console.log("deploying mock token")
  const MockInstance = await deployer.deploy(TestErc20Token);
  const MockContract = await TestErc20Token.deployed()
  // Transfer all Mock Tokens to Presale Contract
  console.log("transfering mock tokens")
  await MockInstance.transfer(presaleInstance.address, '1000000000000000000000000')
  
  
  // Deploy Presale Contract
  await deployer.deploy(TokenPreSale, router, factory, weth, locker)
  const presaleInstance = await TokenPreSale.deployed()

  console.log('Deployed', presaleInstance.address);

  console.log("addSaleTimes")
  await presaleInstance.addSaleTimes(_startTimeSeedSale, _endTimeSeedSale, _startTimePrivateSale, _endTimePrivateSale, _startTimePublicSale, _endTimePublicSale, _vestingStartTime)

  console.log("createPresale")
  await presaleInstance.createPresale(MockContract.address, _baseDecimals, _amountTokensForLiquidity, timeUnlockLiquidity, _vestingCliff, _vestingPeriod, _marketingPercentage, devAddress, _whitelistSeed, _whitelistPrivate)
  
  console.log("addPresaleSaleData")
  await presaleInstance.addPresaleSaleData(_tokensToSellSeedSale, _tokensToSellPrivateSale, _tokensToSellPublicSale, _maxAmountTokensForSalePerUserForSeed, _maxAmountTokensForSalePerUserForPrivate, _maxAmountTokensForSalePerUserForPublic, _priceSeedSale, _pricePrivateSale, _pricePublicSale)

  // add me to Presale
  console.log("addToWhitelistSeedSale")
  await presaleInstance.addToWhitelistSeedSale(['0x57b1fF270fEd868f819191fc72f10D6403441447', '0x018910538C95459457eAFf266cD25c45618c2A9f'])
  console.log("addToWhitelistPrivateSale")
  await presaleInstance.addToWhitelistPrivateSale(['0x57b1fF270fEd868f819191fc72f10D6403441447', '0x018910538C95459457eAFf266cD25c45618c2A9f'])

  


/*

const _startTimeSeedSale_Date = '2023-02-20 18:40:00';
const _endTimeSeedSale_Date = '2023-02-20 18:45:00';

const _startTimePrivateSale_Date = '2023-02-20 18:45:01';
const _endTimePrivateSale_Date = '2023-02-20 18:50:00';

const _startTimePublicSale_Date = '2023-02-20 18:50:01';
const _endTimePublicSale_Date = '2023-02-20 18:59:00';

const _vestingStartTime_Date = '2023-02-20 18:59:59';

const _startTimeSeedSale_unixTimestamp = Date.parse(_startTimeSeedSale_Date);
const _endTimeSeedSale_unixTimestamp = Date.parse(_endTimeSeedSale_Date);
const _startTimePrivateSale_unixTimestamp = Date.parse(_startTimePrivateSale_Date);
const _endTimePrivateSale_unixTimestamp = Date.parse(_endTimePrivateSale_Date);
const _startTimePublicSale_unixTimestamp = Date.parse(_startTimePublicSale_Date);
const _endTimePublicSale_unixTimestamp = Date.parse(_endTimePublicSale_Date);
const _vestingStartTime_unixTimestamp = Date.parse(_vestingStartTime_Date);

const checkTimestamp = () => {
  const currentUnixTimestamp = Date.now();
  
  

  console.log(`Seconds until action: ${secondsUntilTimestamp}`);

  if (currentUnixTimestamp >= unixTimestamp) {
    performAction();
    clearInterval(intervalId);
  }
};

const intervalId = setInterval(checkTimestamp, 1000);

// Define the function to perform the action
const performAction = () => {
  // Perform the action here
};

*/















  
  /*
   // Buy with ETH, 1 token
   console.log("buying tokens")
   //await presaleInstance.buyWithEth('1','1')
   await presaleInstance.buyWithEth('1', '1', {value: '100000000000000', from: '0x524e4444e4A38D00Dde292a3a121a5129e1f03aB'});

   console.log("claiming marketingfunds")
   // finalize presale
  await presaleInstance.finalizePresale('1')
  console.log("adding liq")
   // finalize liquidity
  await presaleInstance.finalizeLiquidity('1')

*/


  /*
  let instance = await new web3.eth.Contract(TokenPreSale.abi, "0x9300b096656B9FD6c9C61188346a236867c3F6d0")
  instance5.methods.buyWithEth('1','1').send({from: '0x9300b096656B9FD6c9C61188346a236867c3F6d0', value: '1000000000000000' })
  instance.methods.finalizeAndAddLiquidity('1').send({from: '0x524e4444e4A38D00Dde292a3a121a5129e1f03aB', value: '0' })
  TokenPreSale.deployed().then(function(instance){ return instance.buyWithEth('1','1', {from: '0x524e4444e4A38D00Dde292a3a121a5129e1f03aB', value: '10000000000000000' }); })
  instance.methods.finalizeLiquidity('1').send({from: '0x524e4444e4A38D00Dde292a3a121a5129e1f03aB', value: '0' })
  let instance = await new web3.eth.Contract(TokenPreSale.abi, "0x9300b096656B9FD6c9C61188346a236867c3F6d0")

  */

  /*

 

  // check how much I can claim
  const claimableAmount = await presaleInstance.claimableAmount('0x524e4444e4A38D00Dde292a3a121a5129e1f03aB', "1");
  console.log("I can claim: ", claimableAmount, " Tokens")

  
  
  
  // claim my tokens
  await presaleInstance.claim('0x524e4444e4A38D00Dde292a3a121a5129e1f03aB','1')
  
  */
  



};
