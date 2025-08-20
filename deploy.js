const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const initialSupply = process.env.INITIAL_SUPPLY || "1000000"; // tokens (not wei)
  const name = process.env.TOKEN_NAME || "FutureCoin";
  const symbol = process.env.TOKEN_SYMBOL || "FTR";

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(name, symbol, initialSupply);
  await token.deployed();
  console.log("MyToken deployed to:", token.address);

  const outDir = path.join(__dirname, "..", "addresses");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const network = hre.network.name;
  const file = path.join(outDir, `${network}.json`);
  fs.writeFileSync(file, JSON.stringify({
    network,
    address: token.address,
    deployer: deployer.address,
    name, symbol, initialSupply,
    timestamp: new Date().toISOString()
  }, null, 2));
  console.log("Saved:", file);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
