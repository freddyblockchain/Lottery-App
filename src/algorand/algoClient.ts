import algosdk from "algosdk";

const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";
const token = {
  "X-API-Key": "GCAE61OEML9V1hZKxCYf6EJBOGMHwvd15zmeM4Li",
};

export const APP_ID = 118516649;

export const RANDOM_CONTRACT_ID = 110096026;

export const LOTTERY_TOKEN_ID = 118517002;

export const algodClient = new algosdk.Algodv2(token, baseServer, port);
