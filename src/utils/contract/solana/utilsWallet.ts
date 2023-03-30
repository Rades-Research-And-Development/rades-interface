import { TOKEN_PROGRAM_ID, AccountLayout, u64 } from "@solana/spl-token";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Buffer } from "buffer";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import { toast } from 'react-hot-toast';

import {
  Keypair,
  Transaction,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Connection,
} from "@solana/web3.js";

export const utilsSolanaWallet = {
  /**
     * Test airdrop from testnet
     */
  walletAirDrop: async (connection: Connection, publicKey: string) => {
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
  },
  /**
   * Return the balance of native token in wallet
   */
  walletGetNativeTokenBalance: async (connection: Connection, publicKey: string) => {
    if (publicKey) {
      const balance = await connection.getBalance(new PublicKey(publicKey));
      return balance / LAMPORTS_PER_SOL;
    }
  },
  /**
  * Return the nfts & token in wallet
  */
  walletGetInfor: async (connection: Connection, publicKey: string) => {
    const SOLvalue = (
      ((await connection.getBalance(new PublicKey(publicKey))) / LAMPORTS_PER_SOL) as number
    ).toFixed(4);
    const USDCmint = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";
    const USDCAccount = await connection.getTokenAccountsByOwner(new PublicKey(publicKey), {
      mint: new PublicKey(USDCmint)
    })
    const USDCDecimal = 10 ** 6;
    /**
    * Return the tokens in wallet
    */
  //  const temp = Number(u64.fromBuffer(AccountLayout.decode(USDCAccount?.value?.[0]?.account?.data).amount)) / USDCDecimal;
    const walletTokens: {
      address: string;
      value: Number;
      key: string;
    }[] = [
        {
          address: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
          value: Number(SOLvalue),
          key: "SOL",
        },
        {
          address: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
          value: USDCAccount?.value?.[0]?.account?.data ? Number(u64.fromBuffer(AccountLayout.decode(USDCAccount?.value?.[0]?.account?.data).amount)) / USDCDecimal : 0,
          // value: 0,
          key: "USDC",
        },
      ];

    const walletNFTs = await Metadata.findDataByOwner(connection, publicKey as string).then(
      async (nftsmetadata) => {
        const walletNFTs_: {
          tokenId: string;
          collectionId: string;
          owner: string;
          metadata: object;
        }[] = await Promise.all(
          nftsmetadata.map(async (nft, _) => ({
            tokenId: String(_),
            collectionId: nft.collection?.key as string,
            owner: nft.updateAuthority,
            metadata: await fetch(nft.data.uri).then((res) => res.json()),
          }))
        );

        return walletNFTs_;
      }
    );
    // const tokenAccounts = await connection.getTokenAccountsByOwner(new PublicKey(publicKey), {
    //   programId: TOKEN_PROGRAM_ID,
    // });

    // tokenAccounts.value.forEach(async (tokenAccount) => {
    //   const accountData = AccountLayout.decode(tokenAccount.account.data);
    //   console.log(accountData)

    //   if (new PublicKey(accountData.mint).toString() === USDCmint) {
    //     walletTokens.push({
    //       address: new PublicKey(accountData.mint).toBase58(),
    //       value: Number(u64.fromBuffer(accountData.amount)) / USDCDecimal,
    //       key: "USDC"
    //     });
    //   }
    // });

    return {
      tokens: walletTokens,
      nfts: walletNFTs
    };
  },
  /**
  * Return & make a tracsaction
  */
  walletTransaction: async (connection: Connection, publicKey: string, _to: string, _amount: number) => {
    Keypair.generate();
    const to_ = "6aKBKGpyTsm87vhxaFsTpH6oCvkw8yHZn8Jgr7J6YabK";
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey(publicKey),
        toPubkey: new PublicKey(to_),
        lamports: LAMPORTS_PER_SOL * _amount,
      })
    );
    const latestBlockhash = await connection.getLatestBlockhash();
    transaction.feePayer = new PublicKey(publicKey);
    transaction.recentBlockhash = latestBlockhash.blockhash;
    let sign = "";
    await connection.getRecentBlockhash().then(async (recentBlockhash) => {
      await (window as any).solana.connect().then(async () => {
        await (window as any).solana
          .signTransaction(transaction)
          .then(async (signedTransaction) => {
            await connection
              .sendRawTransaction(signedTransaction.serialize())
              .then((signature) => {
                console.log(`Transaction ${signature} sent`);
                sign = signature;
              });
          });
      });
    });
    return sign;
  },
};

