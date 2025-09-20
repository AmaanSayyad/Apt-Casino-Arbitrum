# APT Casino - Deep Technical Architecture Flow

## 🏗️ System Overview

APT Casino is a decentralized casino platform built on **Arbitrum Sepolia** testnet, featuring provably fair gaming through **Chainlink VRF v2** integration, modern React/Next.js frontend, and comprehensive wallet connectivity.

## 🔧 Core Technology Stack

### Frontend Layer
- **Framework**: Next.js 15.3.3 (App Router)
- **UI Library**: React 18.3.1 + Material-UI + Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **State Management**: Redux Toolkit + React Query
- **Wallet Integration**: RainbowKit + Wagmi v2
- **Animations**: Framer Motion + Lottie React

### Blockchain Layer
- **Network**: Arbitrum Sepolia (Testnet) / Arbitrum One (Mainnet)
- **Smart Contracts**: Solidity 0.8.19
- **Development**: Hardhat + Ethers.js v6
- **Randomness**: Chainlink VRF v2
- **Verification**: Arbiscan API

### Backend Services
- **Runtime**: Node.js 18+
- **Database**: PostgreSQL + Redis (ioredis)
- **API**: Next.js API Routes
- **Package Manager**: npm/pnpm/yarn

---

## 🌊 Technical Flow Architecture

### 1. Application Bootstrap Flow

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User Access   │───▶│   Next.js App    │───▶│   Providers     │
│   (Browser)     │    │   Router         │    │   Wrapper       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                         │
                                                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Provider Chain                               │
├─────────────────────────────────────────────────────────────────┤
│ Redux Store ──▶ Wagmi Config ──▶ RainbowKit ──▶ React Query    │
│      │              │               │              │           │
│      ▼              ▼               ▼              ▼           │
│ State Mgmt    Wallet Connect   UI Components   API Cache      │
└─────────────────────────────────────────────────────────────────┘
```

### 2. Wallet Connection Flow

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User Clicks   │───▶│   RainbowKit     │───▶│   Wallet        │
│   Connect       │    │   Modal          │    │   Selection     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                         │
                                                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                 Supported Wallets                              │
├─────────────────────────────────────────────────────────────────┤
│ MetaMask │ WalletConnect │ Coinbase │ Trust │ Rainbow │ Injected │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Network       │───▶│   Arbitrum       │───▶│   Account       │
│   Validation    │    │   Sepolia        │    │   Connected     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### 3. Smart Contract Deployment Flow

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Environment   │───▶│   Hardhat        │───▶│   Contract      │
│   Setup         │    │   Compilation    │    │   Deployment    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ .env.local      │    │ CasinoVRF        │    │ Arbitrum        │
│ - RPC URLs      │    │ Consumer.sol     │    │ Sepolia         │
│ - Private Keys  │    │ - VRF Config     │    │ Network         │
│ - API Keys      │    │ - Game Logic     │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### 4. Chainlink VRF Integration Flow

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   VRF Setup     │───▶│   Subscription   │───▶│   Consumer      │
│   Scripts       │    │   Management     │    │   Contract      │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ create-vrf-     │    │ VRF Coordinator  │    │ Random Number   │
│ subscription.js │    │ 0x6D80646bE...   │    │ Generation      │
│                 │    │ - Fund w/ LINK   │    │ - Game Types    │
│                 │    │ - Add Consumer   │    │ - Batch Req     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### 5. Game Execution Flow

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User Starts   │───▶│   Game UI        │───▶│   VRF Request   │
│   Game          │    │   Component      │    │   Trigger       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ Game Types:     │    │ Frontend State   │    │ Smart Contract  │
│ - Mines         │    │ - Redux Store    │    │ - requestRandom │
│ - Plinko        │    │ - Game Config    │    │ - GameType Enum │
│ - Roulette      │    │ - User Input     │    │ - Treasury Auth │
│ - Wheel         │    │                  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    VRF Fulfillment                              │
├─────────────────────────────────────────────────────────────────┤
│ Chainlink Node ──▶ Random Number ──▶ Contract Callback ──▶ UI  │
│ (Off-chain)        Generation         fulfillRandomWords   Update│
└─────────────────────────────────────────────────────────────────┘
```

### 6. API Layer Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │───▶│   Next.js API    │───▶│   External      │
│   Components    │    │   Routes         │    │   Services      │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ API Endpoints:  │    │ Route Handlers:  │    │ Integrations:   │
│ /api/vrf/       │    │ - POST/GET       │    │ - PostgreSQL    │
│ /api/deposit/   │    │ - Validation     │    │ - Redis Cache   │
│ /api/withdraw/  │    │ - Error Handle   │    │ - Blockchain    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### 7. Database & Caching Layer

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Application   │───▶│   Redis Cache    │───▶│   PostgreSQL    │
│   Layer         │    │   (Session)      │    │   (Persistent)  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ Data Types:     │    │ Cache Strategy:  │    │ DB Schema:      │
│ - User Sessions │    │ - VRF Status     │    │ - Users         │
│ - Game State    │    │ - Game Results   │    │ - Games         │
│ - VRF Requests  │    │ - User Stats     │    │ - Transactions  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

---

## 🎮 Game-Specific Technical Flows

### Mines Game Flow
```
User Input (Grid Size) ──▶ VRF Request ──▶ Mine Positions ──▶ Game Logic
     │                         │                │                │
     ▼                         ▼                ▼                ▼
Bet Amount ──▶ Smart Contract ──▶ Random Seed ──▶ Reveal Logic ──▶ Payout
```

### Plinko Game Flow
```
Drop Position ──▶ Physics Engine ──▶ VRF Randomness ──▶ Ball Path ──▶ Multiplier
     │                  │                  │               │           │
     ▼                  ▼                  ▼               ▼           ▼
Three.js ──▶ Matter.js Physics ──▶ Chainlink VRF ──▶ Animation ──▶ Result
```

### Roulette Game Flow
```
Bet Selection ──▶ Wheel Spin ──▶ VRF Number ──▶ Winning Number ──▶ Payout Calc
     │              │             │              │                  │
     ▼              ▼             ▼              ▼                  ▼
Multiple Bets ──▶ Animation ──▶ 0-36 Range ──▶ Color/Odd/Even ──▶ Multi-payout
```

### Wheel Game Flow
```
Segment Config ──▶ Spin Request ──▶ VRF Random ──▶ Segment Select ──▶ Prize Award
     │                │               │              │                 │
     ▼                ▼               ▼              ▼                 ▼
Custom Prizes ──▶ Wheel Animation ──▶ Modulo Calc ──▶ Visual Stop ──▶ User Balance
```

---

## 🔐 Security & Verification Flow

### Provably Fair System
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Client Seed   │───▶│   Server Seed    │───▶│   VRF Proof     │
│   (User Input)  │    │   (Hidden)       │    │   (Chainlink)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Nonce         │───▶│   Combined Hash  │───▶│   Game Result   │
│   (Incremental) │    │   SHA-256        │    │   (Verifiable)  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Smart Contract Security
```
Access Control ──▶ Treasury-Only Functions ──▶ Owner-Only Admin ──▶ Emergency Stops
     │                      │                       │                    │
     ▼                      ▼                       ▼                    ▼
onlyTreasury() ──▶ requestRandomWords() ──▶ updateTreasury() ──▶ withdrawLink()
```

---

## 📊 Monitoring & Analytics Flow

### Performance Monitoring
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │───▶│   API Metrics    │───▶│   Blockchain    │
│   Performance   │    │   (Response Time)│    │   Monitoring    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ - Page Load     │    │ - API Latency    │    │ - Gas Usage     │
│ - Bundle Size   │    │ - Error Rates    │    │ - VRF Timing    │
│ - User Actions  │    │ - Cache Hits     │    │ - Block Conf    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Game Analytics
```
User Behavior ──▶ Game Statistics ──▶ VRF Performance ──▶ Revenue Tracking
     │                  │                  │                    │
     ▼                  ▼                  ▼                    ▼
- Play Patterns ──▶ - Win/Loss Ratios ──▶ - Request Times ──▶ - House Edge
- Bet Sizes     ──▶ - Game Popularity ──▶ - Success Rates ──▶ - Profit Margins
- Session Time  ──▶ - RTP Calculations──▶ - Gas Costs    ──▶ - User LTV
```

---

## 🚀 Deployment & DevOps Flow

### Development Pipeline
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Local Dev     │───▶│   Testing        │───▶│   Staging       │
│   Environment   │    │   Environment    │    │   Environment   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ - Hot Reload    │    │ - Unit Tests     │    │ - Integration   │
│ - Mock Data     │    │ - Contract Tests │    │ - User Testing  │
│ - Local Chain   │    │ - API Tests      │    │ - Performance   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Production Deployment                        │
├─────────────────────────────────────────────────────────────────┤
│ Vercel (Frontend) ──▶ Arbitrum One ──▶ Database ──▶ Monitoring │
│ - Auto Deploy       - Mainnet         - Production  - Alerts   │
│ - CDN               - Real LINK       - Backups     - Logs     │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow Summary

### Request-Response Cycle
```
User Action ──▶ Frontend State ──▶ API Call ──▶ Smart Contract ──▶ VRF Request
     ▲                                                                   │
     │                                                                   ▼
UI Update ◀── State Update ◀── API Response ◀── Event Listener ◀── VRF Callback
```

### State Management Flow
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Redux Store   │◀──▶│   React Query    │◀──▶│   Local State   │
│   (Global)      │    │   (Server Cache) │    │   (Component)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ - User Data     │    │ - API Responses  │    │ - Form Inputs   │
│ - Game State    │    │ - Cache Strategy │    │ - UI State      │
│ - Wallet Info   │    │ - Background Sync│    │ - Animations    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

This deep technical flow provides a comprehensive overview of the APT Casino architecture, covering all major components from frontend user interactions to blockchain integration and backend services.