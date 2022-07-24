// https://docs.lukso.tech/tools/lsp-factoryjs/getting-started

import "dotenv/config";
import { LSPFactory } from "@lukso/lsp-factory.js";
import { RPC_ENDPOINT_L14 } from "./constants";
import Web3 from "web3";

const web3 = new Web3();

const lspFactory = new LSPFactory(RPC_ENDPOINT_L14, {
  deployKey: process.env.PRIVATE_KEY, // Private key of the account which will deploy any smart contract,
  chainId: 22, // Chain Id of the network you want to deploy to
  // 22 for L14
  // 2828 for L16
});

const myEOA = web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY || "");
console.log(`Loaded address: ${myEOA.address} from process.env`);

const main = async () => {
  console.log("Deploying UP with lsp-factory.js");
  const myContracts = await lspFactory.UniversalProfile.deploy({
    controllerAddresses: [myEOA.address], // Account addresses which will control the UP
    lsp3Profile: {
      name: "Elliot",
      description: "Hello hackers",
    },
  });
  console.log("Done");
};

main();
