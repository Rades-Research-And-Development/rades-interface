import IChains from "interface/chains.interface";
import { generateNonce } from "utils/utils";
import Web3 from "web3";

export const signatureAuthenticationRequest = async (publicKey: string) => {
    const nonce = generateNonce();
    const message = `Welcome to Rades! Click to sign in and accept the Rades Terms of Service This request will not trigger a blockchain transaction or cost any gas fees. Your authentication status will reset after 24 hours. Wallet address: ${publicKey.toLowerCase()} Nonce: ${nonce}`;
    const signature = await (window as any).ethereum
        .request({
            method: "personal_sign",
            params: [message, publicKey],
        })
    return { signature, message, nonce }
};