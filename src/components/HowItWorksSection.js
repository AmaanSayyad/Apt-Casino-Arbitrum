'use client';
import { useState, useEffect } from 'react';
import GradientBorderButton from './GradientBorderButton';
import EthereumConnectWalletButton from './EthereumConnectWalletButton';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [animating, setAnimating] = useState(false);
  
  // Auto rotate through steps every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveStep(current => current < 4 ? current + 1 : 1);
        setTimeout(() => setAnimating(false), 300);
      }, 300);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const steps = [
    {
      id: 1,
      title: 'Chainlink VRF Request',
      description: 'When you start a game, our smart contract requests verifiable randomness from Chainlink VRF on Arbitrum. This process is fully on-chain and transparent.',
      emoji: '🔄',
      code: 'requestId = vrfCoordinator.requestRandomWords(\n  keyHash,\n  subscriptionId,\n  requestConfirmations,\n  callbackGasLimit,\n  numWords\n);'
    },
    {
      id: 2,
      title: 'Randomness Generation',
      description: 'Chainlink VRF generates cryptographically secure random numbers and delivers them to our smart contract within 1.5 seconds (6 Arbitrum blocks).',
      emoji: '🎲',
      code: '// Chainlink VRF generates random values\n// and delivers them on-chain\nrandomWords = generateVerifiableRandomValue();\n// 6 Arbitrum blocks ≈ 1.5 seconds'
    },
    {
      id: 3,
      title: 'On-Chain Verification',
      description: 'The randomness is verified on-chain through cryptographic proofs, ensuring that neither players nor casino operators can manipulate the outcome.',
      emoji: '🔐',
      code: 'function fulfillRandomWords(\n  uint256 requestId,\n  uint256[] memory randomWords\n) internal override {\n  // Store verified random values\n  requests[requestId].randomWords = randomWords;\n  requests[requestId].fulfilled = true;\n}'
    },
    {
      id: 4,
      title: 'Transparent Results',
      description: 'Game results are determined by the verified random numbers and can be independently verified by anyone through the Arbitrum blockchain explorer.',
      emoji: '✅',
      code: '// After game completes\nconst requestId = game.vrfRequestId;\nconst randomResult = vrfContract.getRandomWords(requestId);\nconst verified = verifyOnChain(randomResult);\nconsole.log("Verified on-chain:", verified);'
    },
  ];
  
  const handleStepChange = (stepId) => {
    if (stepId === activeStep) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveStep(stepId);
      setTimeout(() => setAnimating(false), 300);
    }, 300);
  };
  
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-blue-magic/5 blur-[120px] z-0"></div>
      <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-red-magic/5 blur-[120px] z-0"></div>
      
      {/* Floating orbs background */}
      <div className="absolute top-10 right-10 w-6 h-6 rounded-full bg-red-magic/20 animate-float"></div>
      <div className="absolute top-40 left-1/4 w-4 h-4 rounded-full bg-blue-magic/20 animate-float-delay"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-20 h-1 bg-gradient-to-r from-red-magic to-blue-magic rounded-full mb-5"></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">Provably Fair Technology</h2>
          <p className="text-white/70 max-w-2xl text-lg">How Chainlink VRF on Arbitrum powers our transparent randomness generation</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Steps Navigation */}
          <div className="p-[1px] bg-gradient-to-r from-red-magic via-purple-500 to-blue-magic rounded-xl shadow-xl">
            <div className="bg-[#1A0015]/70 backdrop-blur-sm rounded-xl p-5">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`mb-4 p-4 rounded-lg cursor-pointer transition-all duration-300 transform ${
                    activeStep === step.id 
                      ? 'bg-gradient-to-r from-[#250020] to-[#1A0015] border-l-2 border-red-magic scale-[1.02]' 
                      : 'hover:bg-[#250020]/50 hover:scale-[1.01]'
                  } ${step.id < activeStep ? 'opacity-90' : 'opacity-100'}`}
                  onClick={() => handleStepChange(step.id)}
                >
                  <div className="flex items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-lg transform transition-all duration-300 ${
                      activeStep === step.id 
                        ? 'bg-gradient-to-r from-red-magic to-blue-magic scale-110' 
                        : 'bg-[#250020]'
                    }`}>
                      <span className="text-white text-lg">{step.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium text-lg transition-all duration-300 ${activeStep === step.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-magic to-blue-magic' : 'text-white'}`}>
                        {step.title}
                      </h3>
                      <p className={`mt-2 text-sm leading-relaxed ${activeStep === step.id ? 'text-white/90' : 'text-white/60'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 flex justify-center lg:justify-start">
                <GradientBorderButton className="transform hover:scale-105 transition-transform">
                  {activeStep === 1 ? 'Learn About VRF' : 
                   activeStep === 2 ? 'Explore Randomness' : 
                   activeStep === 3 ? 'Verify On-Chain' : 'Play Now'}
                </GradientBorderButton>
              </div>
            </div>
          </div>
          
          {/* Illustration Area */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl h-[400px]">
              {/* Progress indicator */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    className={`w-6 h-2 rounded-full transition-all duration-300 ${
                      activeStep === step.id 
                        ? 'bg-gradient-to-r from-red-magic to-blue-magic w-10' 
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                    onClick={() => handleStepChange(step.id)}
                    aria-label={`Go to step ${step.id}`}
                  />
                ))}
              </div>
              
              {/* Animated background elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-r from-red-magic/10 to-blue-magic/10 rounded-full animate-pulse"></div>
                <div className="absolute w-80 h-80 border border-white/5 rounded-full animate-spin-slow"></div>
              </div>
              
              {/* Main illustration card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-[1px] bg-gradient-to-r from-red-magic via-purple-500 to-blue-magic rounded-2xl shadow-2xl">
                  <div className="bg-[#1A0015]/70 backdrop-blur-sm rounded-2xl p-10 w-[380px] h-[380px] flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                    {/* Animated glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-magic to-blue-magic opacity-75 blur-2xl transition duration-1000 rounded-2xl"></div>
                    
                    {/* Step indicator - moved to top right corner */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-red-magic to-blue-magic flex items-center justify-center text-white text-base font-bold shadow-lg z-20 border border-white/20">
                      {activeStep}/4
                    </div>
                    
                    <div className={`relative flex flex-col items-center text-center transform transition-all duration-500 px-4 ${animating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-magic to-blue-magic p-1 flex items-center justify-center mb-4 shadow-lg transform hover:rotate-6 transition-transform relative">
                        <div className="absolute inset-0 rounded-full bg-[#250020] opacity-40"></div>
                        <div className="relative z-10 transform hover:scale-110 transition-transform">
                          <span className="text-3xl">{steps[activeStep-1].emoji}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {steps[activeStep-1].title}
                      </h3>
                      
                      <div className="bg-black/40 rounded-md p-3 mb-3 w-full overflow-auto text-left">
                        <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap">
                          {steps[activeStep-1].code}
                        </pre>
                      </div>
                      
                      <p className="text-white/80 leading-relaxed text-xs max-w-xs">
                        {steps[activeStep-1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;