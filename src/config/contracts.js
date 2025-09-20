// Arbitrum Network Configuration
export const ARBITRUM_NETWORKS = {
  TESTNET: 'testnet',
  MAINNET: 'mainnet',
  NOVA: 'nova'
};

// Arbitrum Network URLs
export const ARBITRUM_NETWORK_URLS = {
  [ARBITRUM_NETWORKS.TESTNET]: "https://sepolia-rollup.arbitrum.io/rpc",
  [ARBITRUM_NETWORKS.MAINNET]: "https://arb1.arbitrum.io/rpc",
  [ARBITRUM_NETWORKS.NOVA]: "https://nova.arbitrum.io/rpc"
};

// Arbitrum Faucet URLs
export const ARBITRUM_FAUCET_URLS = {
  [ARBITRUM_NETWORKS.TESTNET]: "https://faucet.arbitrum.io"
};

// Arbitrum Explorer URLs
export const ARBITRUM_EXPLORER_URLS = {
  [ARBITRUM_NETWORKS.TESTNET]: "https://sepolia.arbiscan.io/address",
  [ARBITRUM_NETWORKS.MAINNET]: "https://arbiscan.io/address",
  [ARBITRUM_NETWORKS.NOVA]: "https://nova.arbiscan.io/address"
};

// Default network (can be changed via environment variable)
export const DEFAULT_NETWORK = ARBITRUM_NETWORKS.TESTNET;

// Casino Module Configuration
// The moduleAddress below is a placeholder and should be replaced with the actual deployed contract address for each network.
// If NEXT_PUBLIC_CASINO_MODULE_ADDRESS is set in your environment, it will override the default.
// The default "0x1234567890123456789012345678901234567890123456789012345678901234" is NOT a real address.
export const CASINO_MODULE_CONFIG = {
  [ARBITRUM_NETWORKS.TESTNET]: {
    // Testnet casino module contract address (replace with actual deployed address)
    moduleAddress: process.env.NEXT_PUBLIC_CASINO_MODULE_ADDRESS || "0x1234567890123456789012345678901234567890123456789012345678901234",
    moduleName: "casino",
    rouletteModule: "roulette",
    minesModule: "mines",
    wheelModule: "wheel"
  },
  [ARBITRUM_NETWORKS.MAINNET]: {
    // Mainnet casino module contract address (replace with actual deployed address)
    moduleAddress: process.env.NEXT_PUBLIC_CASINO_MODULE_ADDRESS || "0x1234567890123456789012345678901234567890123456789012345678901234",
    moduleName: "casino",
    rouletteModule: "roulette",
    minesModule: "mines",
    wheelModule: "wheel"
  },
  [ARBITRUM_NETWORKS.NOVA]: {
    // Nova casino module contract address (replace with actual deployed address)
    moduleAddress: process.env.NEXT_PUBLIC_CASINO_MODULE_ADDRESS || "0x1234567890123456789012345678901234567890123456789012345678901234",
    moduleName: "casino",
    rouletteModule: "roulette",
    minesModule: "mines",
    wheelModule: "wheel"
  }
};

// Token Configuration
export const TOKEN_CONFIG = {
  ETH: {
    name: "Arbitrum Coin",
    symbol: "ETH",
    decimals: 18,
    type: "0x1::arbitrum_coin::ArbitrumCoin"
  },
  ETH: {
    name: "ETH Casino Token",
    symbol: "ETH",
    decimals: 8,
    type: "0x1::coin::CoinStore<0x1::arbitrum_coin::ArbitrumCoin>"
  }
};

// Network Information
export const NETWORK_INFO = {
  [ARBITRUM_NETWORKS.TESTNET]: {
    name: "Arbitrum Sepolia",
    chainId: 421614,
    nativeCurrency: TOKEN_CONFIG.ETH,
    explorer: ARBITRUM_EXPLORER_URLS[ARBITRUM_NETWORKS.TESTNET],
    faucet: ARBITRUM_FAUCET_URLS[ARBITRUM_NETWORKS.TESTNET]
  },
  [ARBITRUM_NETWORKS.MAINNET]: {
    name: "Arbitrum One",
    chainId: 42161,
    nativeCurrency: TOKEN_CONFIG.ETH,
    explorer: ARBITRUM_EXPLORER_URLS[ARBITRUM_NETWORKS.MAINNET]
  },
  [ARBITRUM_NETWORKS.NOVA]: {
    name: "Arbitrum Nova",
    chainId: 42170,
    nativeCurrency: TOKEN_CONFIG.ETH,
    explorer: ARBITRUM_EXPLORER_URLS[ARBITRUM_NETWORKS.NOVA]
  }
};

// Export default configuration
export default {
  ARBITRUM_NETWORKS,
  ARBITRUM_NETWORK_URLS,
  ARBITRUM_FAUCET_URLS,
  ARBITRUM_EXPLORER_URLS,
  DEFAULT_NETWORK,
  CASINO_MODULE_CONFIG,
  TOKEN_CONFIG,
  NETWORK_INFO
}; 