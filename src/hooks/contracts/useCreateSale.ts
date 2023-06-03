import { CreatureAccessory, Marketplace, RadesMockCurrency } from "app/contracts";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralContract from "common/useGeneralContract";
import { Signer } from "ethers";
import { useState } from "react";
import { toast } from "react-hot-toast";
function useCreateSale() {
    const generalConnection = useGeneralConnection((s) => s);
    const Marketplace: Marketplace = useGeneralContract((s) => s.Marketplace);
    const CreatureAccessory: CreatureAccessory = useGeneralContract(
        (s) => s.CreatureAccessory
    );
    const RadesMockCurrency: RadesMockCurrency = useGeneralContract(
        (s) => s.RadesMockCurrency
    );
    const createSale = async (nft_id: number) => {
        let tx: any;
        const isApprove = await CreatureAccessory.isApprovedForAll(
            await (generalConnection.signer as Signer).getAddress(),
            Marketplace.address
        );
        if (!isApprove)
            toast.promise(
                CreatureAccessory.setApprovalForAll(Marketplace.address, true).then(
                    (res) => {
                        console.log(res);
                    }
                ),
                {
                    loading: "Approve",
                    error: "Something went wrong!",
                    success: "Approve NFT successfully!",
                }
            );
        toast.promise(
            Marketplace.createSale(
                false,
                CreatureAccessory.address,
                nft_id,
                1,
                (await generalConnection.connection.getBlock(1)).timestamp,
                (await generalConnection.connection.getBlock(1)).timestamp +
                3 * 24 * 60 * 60 * 1000,
                10,
                RadesMockCurrency.address
            ).then(async (res) => {
                console.log(res);
                await res.wait();
                tx = res;
            }),
            {
                loading: "Signing and sales",
                error: "Something went wrong!",
                success: "Listing NFT successfully!",
            }
        );
        return tx;
    };
    return createSale
}
export default useCreateSale;