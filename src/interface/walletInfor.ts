export interface IwalletInfo {
    address: string;
    value: Number;
    property: {
        type: "token" | "nft";
        avatar: string;
        metadata: {};
    };
}[];
