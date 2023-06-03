import { CreatureAccessory, Marketplace, RadesMockCurrency } from "app/contracts";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralContract from "common/useGeneralContract";
import { Signer } from "ethers";
import { useState } from "react";
import { toast } from "react-hot-toast";
function useBuySale() {
    const generalConnection = useGeneralConnection((s) => s);
    const Marketplace: Marketplace = useGeneralContract((s) => s.Marketplace);
    const CreatureAccessory: CreatureAccessory = useGeneralContract(
        (s) => s.CreatureAccessory
    );
    const RadesMockCurrency: RadesMockCurrency = useGeneralContract(
        (s) => s.RadesMockCurrency
    );
    const buySale = async (saleId: number, amountAprrove: number, to: string) => {
        let tx: any;
        try {
            await toast.promise(
                RadesMockCurrency.approve(Marketplace.address, amountAprrove).then(
                    async (res) => {
                        console.log(res);
                        await res.wait()
                    }
                ),
                {
                    loading: "Approve",
                    error: "Something went wrong!",
                    success: `Approve ${amountAprrove} $RAD successfully!`,
                }
            );
            await toast.promise(
                Marketplace.buy(saleId, to, amountAprrove, 0).then(async (res) => {
                    console.log(res);
                    await res.wait();
                    tx = res;
                }),
                {
                    loading: "Signing and buys",
                    error: "Something went wrong!",
                    success: "Listing NFT successfully!",
                }
            );
            return tx;
        } catch (error) {
            return tx
        }
    };
    return buySale
}
export default useBuySale;