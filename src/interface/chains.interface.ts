import IChainsSymbol from "./chainsSymbol.interface";

export default interface IChains {
    chainName: string,
    symbol: IChainsSymbol["symbol"],
    chainId: string,
    stableCoin?: {
        symbol: string,
        address: string,
        path: string,
    }
    RPC?: {
        chainId: string,
        chainName?: string,
        nativeCurrency?: {
            name: string,
            symbol: string,
            decimals: number,
        },
        rpcUrls?: string[],
        blockExplorerUrls?: string[],
    }[]

};

