import create from "zustand";
import web3 from "web3";
export type IConnection = {
  connection: any;
};

const useConnection = create<IConnection>(() => ({
  connection: new web3(),
}));
export default useConnection;
