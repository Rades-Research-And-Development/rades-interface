import IChains from "interface/chains.interface"

const mainchains: IChains[] = [
    {
        chainName: "Ethereum",
        symbol: "ETH",
        chainId: "0x1",
        RPC: [{ chainId: '0x1' }]
    },
    {
        chainName: "Binance Smart Chain",
        symbol: "BSC",
        chainId: "0x38",
        RPC: [{
            chainId: '0x38',
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
                name: 'BNB',
                symbol: 'BNB',
                decimals: 18,
            },
            rpcUrls: ['https://bsc-dataseed2.defibit.io'],
            blockExplorerUrls: ['https://bscscan.com/'],
        }]
    },
    {
        chainName: "Polygon",
        symbol: "MATIC",
        chainId: "0x89",
        RPC: [{
            chainId: '0x89',
            chainName: 'Polygon',
            nativeCurrency: {
                name: 'MATIC',
                symbol: 'MATIC',
                decimals: 18,
            },
            rpcUrls: ['https://matic-mainnet.chainstacklabs.com'],
            blockExplorerUrls: ['https://polygonscan.com/'],
        }]
    },
    {
        chainName: "Arbtribum",
        symbol: "ARB",
        chainId: "0x89",
        RPC: [{
            chainId: '0x89',
            chainName: 'Arbtribum',
            nativeCurrency: {
                name: 'ARB',
                symbol: 'ARB',
                decimals: 18,
            },
            rpcUrls: ['https://matic-mainnet.chainstacklabs.com'],
            blockExplorerUrls: ['https://polygonscan.com/'],
        }]
    },
    {
        chainName: "Optimism",
        symbol: "OP",
        chainId: "0x89",
        RPC: [{
            chainId: '0x89',
            chainName: 'Optimism',
            nativeCurrency: {
                name: 'OP',
                symbol: 'OP',
                decimals: 18,
            },
            rpcUrls: ['https://matic-mainnet.chainstacklabs.com'],
            blockExplorerUrls: ['https://polygonscan.com/'],
        }]
    },]

const testchains: IChains[] = [{
    chainName: "Ethereum",
    symbol: "ETH",
    chainId: "0x5",
    RPC: [{ chainId: '0x5' }]
},
{
    chainName: "Binance Smart Chain",
    symbol: "BSC",
    chainId: "0x61",
    RPC: [{
        chainId: '0x61',
        chainName: 'BSC Testnet',
        nativeCurrency: {
            name: 'tBNB',
            symbol: 'tBNB',
            decimals: 18,
        },
        rpcUrls: ['https://data-seed-prebsc-1-s3.binance.org:8545'],
        blockExplorerUrls: ['https://testnet.bscscan.com/'],
    }]
},
{
    chainName: "Polygon",
    symbol: "MATIC",
    chainId: "0x13881",
    RPC: [{
        chainId: '0x13881',
        chainName: 'Polygon Mumbai',
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
        blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    }]
},
{
    chainName: "Arbtribum",
    symbol: "ARB",
    chainId: "0x89",
    RPC: [{
        chainId: '0x89',
        chainName: 'Arbtribum',
        nativeCurrency: {
            name: 'ARB',
            symbol: 'ARB',
            decimals: 18,
        },
        rpcUrls: ['https://matic-mainnet.chainstacklabs.com'],
        blockExplorerUrls: ['https://polygonscan.com/'],
    }]
},
{
    chainName: "Optimism",
    symbol: "OP",
    chainId: "0x89",
    RPC: [{
        chainId: '0x89',
        chainName: 'Optimism',
        nativeCurrency: {
            name: 'OP',
            symbol: 'OP',
            decimals: 18,
        },
        rpcUrls: ['https://matic-mainnet.chainstacklabs.com'],
        blockExplorerUrls: ['https://polygonscan.com/'],
    }]
},

]

let standalChains: IChains[];
if (process.env.APP_ENV === "production") standalChains = mainchains
else standalChains = testchains;

export default standalChains;