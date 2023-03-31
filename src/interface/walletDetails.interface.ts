export default interface IwalletDetails {
    address: string;
    gmail?: string;
    name?: string;
    phone?: string;
    nfts: {
        tokenId: string;
        collectionId: string | undefined;
        owner: string;
        metadata: object;
    }[],
    tokens: {
        address: string;
        value: Number;
        key: string;
    }[],
};
