import create from "zustand";
import web3 from "web3";
export type IConnection = {
  connection: web3;
};

const useEthereumConnection = create<IConnection>(() => ({
  connection: new web3(),
}));
export default useEthereumConnection;
