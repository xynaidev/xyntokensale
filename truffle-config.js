/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 * 
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

 require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: '8J4ZDUSARGNTS3GS8HNY53FN2IGSPJ1K65',
    bscscan: 'MU2NN1RF629M146ZC436QBV3YVQW5UPJZ3',
    snowtrace: 'WYFBAS3WTSMD5ENFKU3ZTZIGQHJAIK9M2Y'
  },

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard BSC port (default: none)
      network_id: "5777",       // Any network (default: none)
    },
    bsctest: {
      provider: () => new HDWalletProvider({
        privateKeys: [process.env.WALLET_PRIVATE_KEY],
        providerOrUrl: `https://bsc.getblock.io/23e516f3-66d3-4048-b481-9478fe0a610b/testnet/`,
        pollingInterval: 500
      }),
        
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 2000,
      timeoutSeconds: 600,
      skipDryRun: true,
      stackSize: 18192,
      networkCheckTimeout: 1000000
    },
    bsc: {
      provider: () => new HDWalletProvider(process.env.WALLET_PRIVATE_KEY, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      stackSize: 18192
    },
    fuji: {
      provider: () => new HDWalletProvider(process.env.WALLET_PRIVATE_KEY, `https://api.avax-test.network/ext/bc/C/rpc`),
      network_id: 43113,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true,
      stackSize: 18192
    },
    sepolia: {
      provider: () => new HDWalletProvider(process.env.WALLET_PRIVATE_KEY, `https://rpc.sepolia.dev`),
      network_id: 11155111,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      stackSize: 18192
    },
    goerli: {
      provider: () => new HDWalletProvider(process.env.WALLET_PRIVATE_KEY, 'https://eth.getblock.io/23e516f3-66d3-4048-b481-9478fe0a610b/goerli/'),
      network_id: '5',
      networkCheckTimeout: 100000,
      timeoutBlocks: 200,
      timeoutSeconds: 600,
      stackSize: 18192
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  optimizer: {
    enabled: true,
    runs: 200,
    viaIR: true
  },

  

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
