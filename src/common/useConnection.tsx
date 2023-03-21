import create from "zustand";
import web3 from "web3";
import { Connection } from "@solana/web3.js";
export type IConnection = {
  connection: web3 | Connection;
};

const useConnection = create<IConnection>(() => ({
  connection: new web3(),
}));
export default useConnection;
