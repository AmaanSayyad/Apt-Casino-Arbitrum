const { ethers } = require("hardhat");

async function main() {
  console.log("💰 Funding VRF Subscription (Normal Method)...");

  const [deployer] = await ethers.getSigners();
  console.log("Using account:", deployer.address);
  console.log("Account balance:", ethers.formatEther(await deployer.provider.getBalance(deployer.address)), "ETH");

  const subscriptionId = "453";
  const vrfCoordinatorAddress = "0x50d47e4142598E3411aA864e08a44284e471AC6f";

  try {
    const vrfCoordinatorABI = [
      "function fundSubscription(uint64 subId, uint96 amount) external",
      "function getSubscription(uint64 subId) external view returns (uint96 balance, uint64 reqCount, address owner, address[] memory consumers)"
    ];
    
    const vrfCoordinator = new ethers.Contract(vrfCoordinatorAddress, vrfCoordinatorABI, deployer);
    
    console.log("\n📋 VRF Coordinator Address:", vrfCoordinatorAddress);
    console.log("📝 Subscription ID:", subscriptionId);
    
    // Check current balance
    const subscription = await vrfCoordinator.getSubscription(subscriptionId);
    console.log("💰 Current Balance:", ethers.formatEther(subscription.balance), "ETH");
    
    // Fund subscription with 0.01 ARB ETH (as wei)
    console.log("\n💰 Funding subscription with 0.01 ARB ETH...");
    const fundAmount = ethers.parseEther("0.01");
    
    const fundTx = await vrfCoordinator.fundSubscription(subscriptionId, fundAmount, {
      value: fundAmount
    });
    console.log("Transaction hash:", fundTx.hash);
    await fundTx.wait();
    console.log("✅ Subscription funded with 0.01 ARB ETH!");
    
    // Check updated balance
    const updatedSubscription = await vrfCoordinator.getSubscription(subscriptionId);
    console.log("💰 Updated Balance:", ethers.formatEther(updatedSubscription.balance), "ETH");
    
    console.log("\n🎉 VRF Subscription Funding Complete!");
    console.log("=====================================");
    console.log("Subscription ID:", subscriptionId);
    console.log("Balance:", ethers.formatEther(updatedSubscription.balance), "ARB ETH");
    console.log("=====================================");
    
  } catch (error) {
    console.error("❌ Error funding subscription:", error.message);
    
    // Try alternative method - direct ETH transfer
    console.log("\n🔄 Trying alternative method - direct ETH transfer...");
    try {
      const vrfCoordinatorABI = [
        "function getSubscription(uint64 subId) external view returns (uint96 balance, uint64 reqCount, address owner, address[] memory consumers)"
      ];
      
      const vrfCoordinator = new ethers.Contract(vrfCoordinatorAddress, vrfCoordinatorABI, deployer);
      
      // Send ETH directly to the coordinator
      const fundAmount = ethers.parseEther("0.01");
      const tx = await deployer.sendTransaction({
        to: vrfCoordinatorAddress,
        value: fundAmount,
        data: ethers.hexlify(ethers.toUtf8Bytes(subscriptionId))
      });
      
      console.log("Direct transfer tx:", tx.hash);
      await tx.wait();
      console.log("✅ Direct ETH transfer sent!");
      
    } catch (error2) {
      console.error("❌ Alternative method also failed:", error2.message);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


