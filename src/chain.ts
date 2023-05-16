import IChains from "interface/chains.interface"
const mainchains: IChains[] = [
    {
        chainName: "Ethereum",
        symbol: "ETH",
        stableCoin: {
            symbol: "USDT",
            address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            path: "https://api.etherscan.io/api?module=contract&action=getabi&address=0xdac17f958d2ee523a2206206994597c13d831ec7"
        },
        chainId: "0x1",
        RPC: [{
            chainId: '0x1',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
        }]
    },
    {
        chainName: "Binance Smart Chain",
        symbol: "BNB",
        stableCoin: {
            symbol: "BUSD",
            address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            path: "https://api.bscscan.com/api?module=contract&action=getabi&address=0xe9e7cea3dedca5984780bafc599bd69add087d56"
        },
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
        stableCoin: {
            symbol: "USDT",
            address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
            path: "https://api.polygonscan.com/api?module=contract&action=getabi&address=0xc2132d05d31c914a87c6611c10748aeb04b58e8f"
        },
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
        chainId: "0xa4b1",
        stableCoin: {
            symbol: "USDT",
            address: "0xf31e1AE27e7cd057C1D6795a5a083E0453D39B50",
            path: "https://api.arbiscan.io/api?module=contract&action=getabi&address=0xf31e1ae27e7cd057c1d6795a5a083e0453d39b50&apikey=3829TZSZ798PD4TAFJG6XGVARC193ANJ13"
        },
        RPC: [{
            chainId: "0xa4b1",
            chainName: 'Arbtribum',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
            rpcUrls: ['https://matic-mainnet.chainstacklabs.com'],
            blockExplorerUrls: ['https://polygonscan.com/'],
        }]
    },
    {
        chainName: "Optimism",
        symbol: "OP",
        chainId: "0xa",
        stableCoin: {
            symbol: "USDT",
            address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
            path: "https://api-optimistic.etherscan.io/api?module=contract&action=getabi&address=0x94b008aa00579c1307b0ef2c499ad98a8ce58e58&apikey=HB9SHU81DJUD5TG6YS9K5R7HRDVNMJ9ZXJ",
        },
        RPC: [{
            chainId: '0xa',
            chainName: 'Optimism',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
            rpcUrls: ['https://mainnet.optimism.io'],
            blockExplorerUrls: ['https://optimism.etherscan.io/'],
        }]
    },]

const testchains: IChains[] = [

    {
        chainName: "Ethereum",
        symbol: "ETH",
        chainId: "0xaa36a7",
        stableCoin: {
            symbol: "USDT",
            address: "0x509Ee0d083DdF8AC028f2a56731412edD63223B9",
            path: "https://api-goerli.etherscan.io/api?module=contract&action=getabi&address=0x509ee0d083ddf8ac028f2a56731412edd63223b9",
        },
        RPC: [{
            chainId: "0xaa36a7", nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
        }]
    },
    {
        chainName: "Binance Smart Chain",
        symbol: "BNB",
        chainId: "0x61",
        stableCoin: {
            symbol: "BUSD",
            address: "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
            path: "https://api-testnet.bscscan.com/api?module=contract&action=getabi&address=0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee"
        },
        RPC: [{
            chainId: '0x61',
            chainName: 'BSC Testnet',
            nativeCurrency: {
                name: 'BNB',
                symbol: 'BNB',
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
        stableCoin: {
            symbol: "USDT",
            address: "0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832",
            path: "https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=0xa02f6adc7926efebbd59fd43a84f4e0c0c91e832",
        },
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
        chainId: "0x66eed",
        stableCoin: {
            symbol: "USDT",
            address: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
            path: "https://api-goerli.arbiscan.io/api?module=contract&action=getabi&address=0xe39ab88f8a4777030a534146a9ca3b52bd5d43a3",
        },
        RPC: [{
            chainId: "0x66eed",
            chainName: 'Arbtribum Goerli',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
            rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
            blockExplorerUrls: ['https://goerli.arbiscan.io/'],
        }]
    },
    {
        chainName: "Optimism",
        symbol: "OP",
        chainId: "0x1a4",
        stableCoin: {
            symbol: "USDT",
            address: "0x4200000000000000000000000000000000000006",
            path: "https://api-goerli-optimism.etherscan.io/api?module=contract&action=getabi&address=0x4200000000000000000000000000000000000006&apikey=HB9SHU81DJUD5TG6YS9K5R7HRDVNMJ9ZXJ",
        },
        RPC: [{
            chainId: '0x1a4',
            chainName: 'Optimism Goerli',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
            },
            rpcUrls: ['https://goerli.optimism.io'],
            blockExplorerUrls: ['https://goerli-optimism.etherscan.io/'],
        }]
    },

]

let standalChains: IChains[];
if (process.env.APP_ENV === "production") standalChains = mainchains
else standalChains = testchains; export default standalChains;