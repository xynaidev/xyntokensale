- forked from https://github.com/R3D4NG3L/PresaleSmartContract/blob/main/contracts/TokenPreSale.sol
- Contract to audit: contracts/TokenPreSale.sol
- Migration script: migrations/1_deploy_tokensale.js


## Keypoints
- 🟢 There are 3 sale rounds
  - Seed Sale (Whitelist only)
  - Private Sale (Whitelist only)
  - Public Sale (everyone)
- 🟢 Each sale round has limitations
  - Max amount of tokens that can be bought **per wallet**
  - Max amount of tokens that can be sold **per round**
- 🟢 Tokens that haven't been sold in seed and private, will go to public
- 🟢 Tokens that haven't been sold in public, will be sent to the treasury
- 🟢 If the goals aren't met, the presale can be canceled and everyone can withdraw their contribution
- 🟢 After buying, you don't receive tokens directly. They are vested within the contract and you have to claim them manually after the sale is completed
- 🟢 The contract is built to ensure full safety for the investors
  - As soon as the sale starts, the configuration is set in stone
  - Liquidity will be added by the contract
  - LP Tokens will be locked by the contract

# 🐉 Deployed Contract

## TokenPreSale.sol
https://etherscan.io


# 🟢 Parameters explained

```javascript
/*
     * @param _startTimeSeedSale Unix timestamp seed sale start
     * @param _endTimeSeedSale Unix timestamp seed sale end
     * @param _startTimePrivateSale; Unix timestamp private sale start
     * @param _endTimePrivateSale Unix timestamp private sale end
     * @param _startTimePublicSale Unix timestamp public sale start
     * @param _endTimePublicSale Unix timestamp public sale end
     * @param _vestingStartTime Unix timestamp vesting start
     * 
     * @param _saleToken address of token to be sold
     * @param _baseDecimals No of decimals for the token. (10**18), for 18 decimal token
     * @param _amountTokensForLiquidity Amount of tokens for liq. if 1 million tokens to be sold then - 1_000_000 has to be passed
     * @param _timeUnlockLiquidity Unix timestamp for when the liquidity unlocks
     * @param _vestingCliff Cliff period for vesting in seconds
     * @param _vestingPeriod Total vesting period(after vesting cliff) in seconds
     * @param _treasuryPercentage Percentage of raised funds that will go to the team
     * @param _treasuryAddress address to receive treasury percentage
     * @param _whitelistSeedSale array of addresses that are allowed to buy in Seed
     * @param _whitelistPrivateSale array of addresses that are allowed to buy in Private
     * 
     * @param _tokensToSellSeedSale No of tokens to sell without denomination. If 1 million tokens to be sold then - 1_000_000 has to be passed
     * @param _tokensToSellPrivateSale No of tokens to sell without denomination. If 1 million tokens to be sold then - 1_000_000 has to be passed
     * @param _tokensToSellPublicSale No of tokens to sell without denomination. If 1 million tokens to be sold then - 1_000_000 has to be passed
     * @param _maxAmountTokensForSalePerUserForSeed max tokens each user in seed can buy. 1 million tokens - 1_000_000 has to be passed
     * @param _maxAmountTokensForSalePerUserForPrivate max tokens each user in private can buy. 1 million tokens - 1_000_000 has to be passed
     * @param _maxAmountTokensForSalePerUserForPublic max tokens each user in public can buy. 1 million tokens - 1_000_000 has to be passed
     * 
     * @param _priceSeedSale Per token price for seed multiplied by (10**18). how much ETH does 1 token cost
     * @param _pricePrivateSale Per token price for private multiplied by (10**18). how much ETH does 1 token cost
     * @param _pricePublicSale Per token price for public multiplied by (10**18). how much ETH does 1 token cost
     
*/
