export default interface IwalletDetails {
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
