// https://docs.lukso.tech/tools/erc725js/getting-started

import { ERC725, ERC725JSONSchema } from "@erc725/erc725.js";
import Web3 from "web3";
import LSP3 from "@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json";
import { RPC_ENDPOINT } from "./constants";

const upAddress = "0xc6D4e65AbaB748C41a772d2F28DD0D0ecEF47Aec";
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const config = {
  ipfsGateway: "https://ipfs.lukso.network/ipfs/",
};

const erc725 = new ERC725(
  LSP3 as ERC725JSONSchema[],
  upAddress,
  provider,
  config
);

const main = async () => {
  console.log("Starting...");
  const data = await erc725.getData();
  console.log(data);
  console.log("Done");
};

main();
