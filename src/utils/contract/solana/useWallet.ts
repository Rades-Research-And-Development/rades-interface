import {
  LAMPORTS_PER_SOL,
  PublicKey,
  GetProgramAccountsFilter,
  Connection,
  Keypair
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, AccountLayout } from "@solana/spl-token";
import { connection } from "./connection";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Buffer } from "buffer";
// import { Metadata, metadataBeet } from "@metaplex-foundation/mpl-token-metadata";
import { property } from "lodash";

// import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";

export const walletAirDrop = async (publicKey) => {
  try {
    const airdropSignature: string = await connection.requestAirdrop(
      new PublicKey(publicKey),
      LAMPORTS_PER_SOL
    );

    const latestBlockHash = await connection.getLatestBlockhash();

    await connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: airdropSignature,
    });

  } catch (error) {
    return { status: 500, text: JSON.stringify(error) };
  }
  return { status: 200, text: "Air drop successfully" };
};

export const walletGetSolBalance = async (wallet: PhantomWalletAdapter) => {
  if (wallet?.publicKey) {
    const balance = await connection.getBalance(new PublicKey(wallet?.publicKey));
    return balance / LAMPORTS_PER_SOL;
  }
};

export const walletGetInfor = async (connection: Connection, publicKey: PublicKey) => {
  const SOLvalue = ((await connection.getBalance(publicKey) / LAMPORTS_PER_SOL) as number).toFixed(4);

  const USDCmint = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
  const USDCDecimal = 10 ** 6;

  const walletItems: {
    address: string,
    value: Number,
    avatar: string,
  }[] = [{
    address: "Solana",
    value: Number(SOLvalue),
    avatar: "SOL",
  }]

  const tokenAccounts = await connection.getTokenAccountsByOwner(
    publicKey,
    {
      programId: TOKEN_PROGRAM_ID,
    }
  );
  tokenAccounts.value.forEach(async (tokenAccount) => {
    const accountData = AccountLayout.decode(tokenAccount.account.data);
    console.log(accountData.delegatedAmount.toJSON())
    const amountBuffer = accountData.amount.toJSON().data
    const convertBuffer = Buffer.from(amountBuffer);
    let amount = Number(convertBuffer.readBigUInt64LE()), address = new PublicKey(accountData.mint), type: "nft" | "token" = "nft", avatar = "", metadata = {}
    if (address.toString() === USDCmint) {
      type = "token"
      avatar = "USDC"
      amount = amount / USDCDecimal;
      walletItems.push({
        address: new PublicKey(accountData.mint).toBase58(),
        value: amount,
        avatar,
      })
    }
  })

  return walletItems
}

export const walletGetAllNFts = async () => {

}
