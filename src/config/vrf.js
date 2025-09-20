/**
 * VRF Configuration
 * Environment variables for Chainlink VRF integration
 */
export const VRF_CONFIG = {
  CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_VRF_CONTRACT_ADDRESS || '0x1c80757C451adce96d6cADB514036F07fc2347cb',
  TREASURY_ADDRESS: process.env.TREASURY_ADDRESS || '0xD599B4a78f602f597973F693439e89A97eDd4369',
  TREASURY_PRIVATE_KEY: process.env.TREASURY_PRIVATE_KEY || '0xa0c83522c748fcd4086854f3635b2b9a762d8107b9f0b478a7d8515f5897abec',
  NETWORK: process.env.NEXT_PUBLIC_NETWORK || 'arbitrum-sepolia',
  RPC_URL: process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC || 'https://sepolia-rollup.arbitrum.io/rpc',
  LINK_TOKEN: '0xb1D4538B4571d411F07960EF2838Ce337FE1E80E', // Arbitrum Sepolia LINK Token
  VRF_COORDINATOR: '0x5CE8D5A2BC84beb22a398CCA51996F7930313D61', // Arbitrum Sepolia
  SUBSCRIPTION_ID: process.env.VRF_SUBSCRIPTION_ID || '12467',
  KEY_HASH: '0x1770bdc7eec7771f7ba4ffd640f34260d7f095b79c92d34a5b2551d6f6cfd2be', // Arbitrum Sepolia 50 gwei Key Hash
  CALLBACK_GAS_LIMIT: '2500000',
  REQUEST_CONFIRMATIONS: '1',
  BATCH_SIZE: 200,
  PROOFS_PER_GAME: 50,
  MIN_PROOFS_PER_GAME: 25,
  MAX_RANDOM_VALUES: 500,
  PREMIUM_PERCENTAGE_ETH: 60,  // Premium percentage when paying with Sepolia ETH
  PREMIUM_PERCENTAGE_LINK: 50, // Premium percentage when paying with testnet LINK
  EXPLORER_URLS: {
    'arbitrum-sepolia': 'https://sepolia.arbiscan.io',
    'arbitrum': 'https://arbiscan.io'
  },
  FAUCET_URL: 'https://faucets.chain.link/arbitrum-sepolia'
};
export default VRF_CONFIG;