const hre = require("hardhat");
const fs = require("fs/promises");

async function main() {
  const VehicleChain = await hre.ethers.getContractFactory("VehicleChain");
  const vehicleChain = await VehicleChain.deploy();

  // await vehicleChain.deployed();
  await writeDeploymentInfo(vehicleChain, "VehicleChain.json");
}

async function writeDeploymentInfo(contract, filename = "") {
  const data = {
    contract: {
      address: contract.address,
      // signerAddress: contract.signer.address,
      abi: contract.interface.format(),
    },
  };

  const content = JSON.stringify(data, null, 2);
  await fs.writeFile(filename, content, { encoding: "utf-8" });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
