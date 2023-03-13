
import { WalletAdapter, WalletError } from '@solana/wallet-adapter-base';
import *  as Phantom from '@solana/wallet-adapter-phantom';
import { PublicKey } from '@solana/web3.js';

const wallet: WalletAdapter = new Phantom.PhantomWalletAdapter();

export async function connectToPhantomWallet(): Promise<boolean | WalletAdapter> {
  let res: boolean | WalletAdapter;
  try {
    await wallet.autoConnect();
    res = wallet;
  } catch (error) {
    if (error instanceof WalletError) {
      console.log(`Error connecting to wallet: ${error.message}`);
    } else {
      console.log(`Error connecting to wallet: ${error}`);
    }
    res = false;
  }
  return res;
}

export async function DisconnectToPhantomWallet(wallet_: WalletAdapter): Promise<boolean | WalletAdapter> {
  let res: boolean | WalletAdapter;
  try {
    await wallet_.disconnect();
    res = wallet_;
  } catch (error) {
    if (error instanceof WalletError) {
      console.log(`Error connecting to wallet: ${error.message}`);
    } else {
      console.log(`Error connecting to wallet: ${error}`);
    }
    res = false;
  }
  return res;
}

export function isConnectedToWallet(): boolean {
  return wallet.publicKey !== null;
}

export async function getWalletAddress(): Promise<PublicKey | null> {
  let publicKey: PublicKey | null = wallet.publicKey;
  return publicKey;
}