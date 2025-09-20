import Image from "next/image";
import { useState, useEffect } from "react";
import LaunchGameButton from "./LaunchGameButton";

export default function HeroSection() {
  const [isDev, setIsDev] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  
  useEffect(() => {
    setIsDev(process.env.NODE_ENV === 'development');
  }, []);
  
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col pt-24 sm:pt-28 md:pt-28 lg:pt-32 relative w-full px-4 sm:px-10 md:px-20 lg:px-36"
    >
      {showAnnouncement && (
        <div className="w-full max-w-2xl mx-auto bg-gradient-to-r from-red-magic/10 to-blue-magic/10 backdrop-blur-sm p-3 rounded-lg border border-purple-500/20 flex justify-center items-center mb-8 mt-8 sm:mt-6">
          <p className="text-sm text-white text-center">
            <span className="bg-purple-600 text-white px-2 py-0.5 rounded-md text-xs font-medium mr-2">NEW</span>
            High Roller Tournament starting soon! 10,000 ETH prize pool.
          </p>
          <button 
            onClick={() => setShowAnnouncement(false)}
            className="text-gray-400 hover:text-white transition-colors pl-2 ml-1"
          >
            ✕
          </button>
        </div>
      )}
      
      <div className={
        `font-display capitalize flex text-white flex-col text-center items-center gap-6 z-10 max-w-7xl w-full mx-auto ${showAnnouncement ? '' : 'mt-14 sm:mt-14 md:mt-16'}`
      }>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Introducing{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-magic to-blue-magic">
            APT-Casino
          </span>
        </h1>
        <h2 className="text-[#B3B3B3] mt-4 text-lg sm:text-xl leading-relaxed max-w-3xl">
          <span className="text-white font-semibold">Autonomous Provably Transparent</span> gaming powered by <span className="text-white font-semibold">Arbitrum</span> & <span className="text-white font-semibold">Chainlink VRF</span>. Experience lightning-fast 250ms blocks with cryptographic fairness you can verify, not just trust.
        </h2>
        <p className="text-[#B3B3B3] text-lg sm:text-xl max-w-3xl">
          No rigged outcomes. No hidden limits. No custody of your funds. 
          <span className="text-green-400 font-medium"> Just pure, transparent GambleFi</span> where mathematics replaces trust.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <LaunchGameButton />
          
          {/* Additional Quick Links */}
          <div className="flex gap-3 mt-2 sm:mt-0">
           
            <a 
              href="#tournaments" 
              className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all text-sm font-medium text-white/90"
            >
              Tournaments
            </a>
          </div>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-purple-600/20">
          <div className="text-center">
            <p className="text-gray-400 text-sm">Total Players</p>
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-magic to-blue-magic">
              {isDev ? '2,834' : '10,582'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">Jackpot Size</p>
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-magic to-blue-magic">
              {isDev ? '15,000' : '37,500'} ETH
            </p>
          </div>
          <div className="text-center hidden sm:block">
            <p className="text-gray-400 text-sm">VRF Speed</p>
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-magic to-blue-magic">
              1.5s
            </p>
          </div>
          <div className="text-center hidden md:block">
            <p className="text-gray-400 text-sm">Provably Fair</p>
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-magic to-blue-magic">
              100%
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative mt-12 w-full max-w-4xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-magic/50 to-blue-magic/50 rounded-2xl blur-md"></div>
        <div className="relative">
          <Image
            src="/images/HeroImage.png"
            width={863}
            height={487}
            quality={100}
            priority
            alt="Hero image"
            className="rounded-xl z-10 relative"
          />
          
          {isDev && (
            <div className="absolute top-4 right-4 bg-yellow-600/80 text-white text-xs px-2 py-1 rounded-md z-20">
              Dev Mode
            </div>
          )}
        </div>
      </div>
      
      {/* Feature Highlights */}
      <div className="w-full max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="bg-gradient-to-br from-black/60 to-purple-900/10 p-6 rounded-xl border border-purple-500/20">
          <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-red-magic to-blue-magic flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Gasless Experience</h3>
          <p className="text-gray-300 text-sm">Play without MetaMask popups or gas fees. Our treasury handles all transactions behind the scenes.</p>
        </div>
        
        <div className="bg-gradient-to-br from-black/60 to-purple-900/10 p-6 rounded-xl border border-purple-500/20">
          <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-red-magic to-blue-magic flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Zero Custody</h3>
          <p className="text-gray-300 text-sm">Your funds remain in on-chain escrows. No tokens trapped in centralized wallets or opaque systems.</p>
        </div>
        
        <div className="bg-gradient-to-br from-black/60 to-purple-900/10 p-6 rounded-xl border border-purple-500/20">
          <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-red-magic to-blue-magic flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">L1-Verified Security</h3>
          <p className="text-gray-300 text-sm">Chainlink VRF randomness is Ethereum L1-verifiable, removing any chance of manipulation even at validator level.</p>
        </div>
      </div>
    </section>
  );
}
