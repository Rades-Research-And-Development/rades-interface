import { Keypair, Transaction, LAMPORTS_PER_SOL, PublicKey, SystemProgram } from "@solana/web3.js";
import { connection } from "./connection";
export const transactionToOwner = async (from_, amount_) => {
  Keypair.generate();
  const to_ = "6aKBKGpyTsm87vhxaFsTpH6oCvkw8yHZn8Jgr7J6YabK";
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: new PublicKey(from_),
      toPubkey: new PublicKey(to_),
      lamports: LAMPORTS_PER_SOL * amount_,
    })
  );
  const latestBlockhash = await connection.getLatestBlockhash();
  transaction.feePayer = new PublicKey(from_);
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
};
