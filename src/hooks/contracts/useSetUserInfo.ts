// TODO: set general publicKey
import { useEffect } from "react";

//State use for all wallet
import { RadesMockCurrency } from "app/contracts";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralContract from "common/useGeneralContract";
import useGeneralWallet from "common/useGeneralWallet";
import { ethers } from "ethers";
import { getUser } from "utils/api/users";
// set Public Key When connection change
function useSetUserInfo() {
    const RadesMockCurrency: RadesMockCurrency = useGeneralContract(
        (s) => s.RadesMockCurrency
    );
    const generalConnection = useGeneralConnection((s) => s);
    const setUserInfo = async () => {
        if (generalConnection?.connection && generalConnection?.signer && RadesMockCurrency) {
            const ___ = async () => {
                const userInfor = await getUser();
                const ethBalance = ethers.utils.formatEther(
                    await generalConnection.connection.getBalance(
                        userInfor.user.publicKey
                    )
                );
                const balance = await RadesMockCurrency.balanceOf(
                    userInfor.user.publicKey
                );
                const radesBalance = ethers.utils.formatUnits(balance, 18);
                useGeneralWallet.setState({
                    ...userInfor.user,
                    chain: generalConnection.chainRPC.symbol,
                    details: {
                        tokens: [
                            {
                                address: "0x",
                                value: Number(ethBalance),
                                key:
                                    generalConnection.chainRPC.RPC?.[0].nativeCurrency?.symbol ||
                                    generalConnection.chainRPC.symbol,
                            },
                            {
                                address: RadesMockCurrency.address,
                                value: Number(radesBalance),
                                key: "RAD",
                            },
                        ],
                        nfts: [],
                    },
                });
            };
            ___().catch((err) => {
                console.log(err);
            });
        }
    };
    return setUserInfo
}
export default useSetUserInfo;