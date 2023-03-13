import { Button, Grid } from "@mui/material";
import { WalletAdapter } from "@solana/wallet-adapter-base";
import { PublicKey } from "@solana/web3.js";
import { setCookie } from "utils/cookies/cookies";
import { FC, useEffect, useState } from "react";
import { connectToPhantomWallet } from "utils/contract/solana/useConnectWallet";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, callback: (args: any) => void) => void;
  isPhantom: boolean;
}

type WindowWithSolana = Window & {
  solana?: PhantomProvider;
};

const Connect2Phantom: FC = () => {
  const [walletAvail, setWalletAvail] = useState(false);
  const [provider, setProvider] = useState<PhantomProvider | null>(null);
  const [connected] = useState(false);
  const [pubKey] = useState<PublicKey | null>(null);

  useEffect(() => {
    if ("solana" in window) {
      const solWindow = window as WindowWithSolana;
      if (solWindow?.solana?.isPhantom) {
        setProvider(solWindow.solana);
        setWalletAvail(true);
        solWindow.solana.connect({ onlyIfTrusted: true });
      }
    }
  }, []);

  const connectHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    // console.log(`connect handler`);
    // provider?.connect().catch((err) => {
    //   console.error("connect ERROR:", err);
    // });
    connectToPhantomWallet().then((res: WalletAdapter | boolean) => {
      setCookie("publicKey", (res as WalletAdapter).publicKey);
    });
  };

  const disconnectHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    console.log("disconnect handler");
    provider?.disconnect().catch((err) => {
      console.error("disconnect ERROR:", err);
    });
  };
  return (
    <>
      {walletAvail ? (
        <Grid container>
          <Grid item xs={12}>
            {" "}
            <Button
              style={{ border: "2px solid black", width: "100%" }}
              color="info"
              variant="outlined"
              disabled={connected}
              onClick={connectHandler}
            >
              Connect to Phantom
            </Button>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Grid container>
              <Grid item xs={12} sx={{ marginTop: 1 }}>
                {connected ? (
                  <p>Your public key is : {pubKey?.toBase58()}</p>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            {" "}
            <Button
              style={{ border: "2px solid black", width: "100%" }}
              color="info"
              variant="outlined"
              disabled={!connected}
              onClick={disconnectHandler}
            >
              Disconnect to Phantom
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <p>
              Opps!!! Phantom is not available. Go get it{" "}
              <a href="https://phantom.app/">https://phantom.app/</a>.
            </p>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Connect2Phantom;
