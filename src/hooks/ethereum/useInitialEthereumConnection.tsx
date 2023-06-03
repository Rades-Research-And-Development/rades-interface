import {
  CreatureAccessory__factory,
  Creature__factory,
  Marketplace__factory,
  RadesMockCurrency__factory,
} from "app/contracts";
import standalChains from "chain";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralContract from "common/useGeneralContract";
import useGeneralWallet from "common/useGeneralWallet";
import { providers } from "ethers";
import useSetUserInfo from "hooks/contracts/useSetUserInfo";
import IChains from "interface/chains.interface";
import { useEffect } from "react";
import { getCookie } from "utils/cookies/cookies";
export default function useInitialEthereumConnectionListener() {
  const generalConnection = useGeneralConnection((s) => s);
  const generalWallet = useGeneralWallet((s) => s);
  const setUserInfo = useSetUserInfo();
  useEffect(() => {
    const provider = new providers.Web3Provider((window as any)?.ethereum);
    provider
      ?.send?.("eth_accounts", [])
      ?.then(async (publicKeys) => {
        const chain: IChains = standalChains.filter(
          (res) => res.chainId === (provider.provider as any).chainId
        )[0];
        if (publicKeys[0] && getCookie("authentication_code")) {
          const signer = await provider.getSigner();
          useGeneralConnection.setState({
            connection: provider,
            signer,
            chainRPC: chain || standalChains[0],
          });
          useGeneralContract.setState({
            Creature: Creature__factory.connect(
              "0xa213F98CC2F2CD5F657B4978fFF0949cD77c3796",
              signer
            ),
            CreatureAccessory: CreatureAccessory__factory.connect(
              "0x9EC41A36e3913Bc05B8C820ae4f7C54b255d8A1A",
              signer
            ),
            Marketplace: Marketplace__factory.connect(
              "0x535e0cF7d0533013343C68c7Dc93E841f3ccd7E2",
              signer
            ),
            RadesMockCurrency: RadesMockCurrency__factory.connect(
              "0xee3424d777966E9ac50d23f21D4d4DB5b060ce44",
              signer
            ),
          });
          setUserInfo().then((res) => {
            console.log(res);
          });
        }
        //  else if (publicKeys[0] && !getCookie("authentication_code")) {
        //   const { signature, message, nonce } =
        //     await signatureAuthenticationRequest(publicKeys[0]);
        //   const user = await userOauthWallet(publicKeys[0], signature, nonce);
        //   setUserInfo()
        //     .then((res) => {
        //       console.log(res);
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        //   setCookie("authentication_code", user.token);
        //   (
        //     API.defaults.headers as any
        //   ).Authorization = `Token ${user.token} || ""}`;
        // }
      })
      .catch((err) => console.log(err));
  }, [generalConnection.chainRPC]);

  // useEffect(() => {
  //   const provider = new providers.Web3Provider((window as any)?.ethereum);
  //   const chain: IChains = standalChains.filter(
  //     (res) => res.chainId === (provider.provider as any).chainId
  //   )[0];
  //   (window as any).ethereum?.on?.("accountsChanged", (accounts) => {
  //     removeCookie("authentication_code");
  //     (API.defaults.headers as any).Authorization = `Token`;
  //     if (!accounts.length) {
  //       useGeneralConnection.setState({
  //         connection: provider,
  //         signer: "",
  //         chainRPC: chain || standalChains[0],
  //       });

  //       useGeneralWallet.setState({ publicKey: "", chain: "" });
  //       useModalPopup.setState({ oauthModal: true });
  //     }
  //   });
  // }, []);
}
