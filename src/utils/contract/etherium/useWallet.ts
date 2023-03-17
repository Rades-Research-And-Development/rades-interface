import useConnection from "common/useConnection";
import { useEffect } from "react";
import Web3 from "web3";

export async function ConnectWallet() {
    if ((window as any).ethereum) {
        const web3 = new Web3((window as any).ethereum);
        try {
            const account = await (window as any).ethereum.request({ method: "eth_requestAccounts" })
            useConnection.setState({ connection: web3 })
            return web3

        } catch (error) {
            console.error(error);
        }
    }
    else if ((window as any).web3) {
        const web3 = (window as any).web3;
        console.log('Injected web3 detected.');
        return web3;
    }
}