const hre = require("hardhat");

async function main() {
  const MintNFT = await hre.ethers.getContractFactory("MintNFT");
  const mintNFT = await MintNFT.deploy();

  await mintNFT.deployed();

  console.log("MintNFT deployed to: ", mintNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
