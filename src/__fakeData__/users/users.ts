import { getBooks } from "__fakeData__/books/books";

let USERS = [
  {
    uuid: "5201f3d7ebf048e9a18cf4a453bd8730",
    name: "Nguyen The Vinh",
    avatar: "/static/user/vinh.png",
    wallet_address: "6jqvbosAfbFfbiU3ahCW7MkeNyZkDPvFeEfWBAyKrDtG",
    wallet: {
      cryptos: [
        { total: 7.67, avatar: "/static/crypto/solona.png", key: "SOL" },
        { total: 653.9, avatar: "/static/crypto/rte.png", key: "RTE" },
        { total: 156.34, avatar: "/static/crypto/usdc.png", key: "USDC" },
      ],
      nfts: [
        {
          data: getBooks(8).map((data: any, index: number) => {
            return {
              uuid: index,
              book_id: data?.id,
              read_progress: Math.floor(Math.random() * 70) + 20,
            };
          }),
          key: "BOOKS",
          avatar: "/static/nfts/book.png",
        },

        {
          data: Array.from(Array(3).keys()).map((data: any, index: number) => {
            return {
              uuid: index,
              read_progress: Math.floor(Math.random() * 99) + 10,
            };
          }),
          key: "BOXS",
        },
        {
          data: Array.from(Array(143).keys()).map(
            (data: any, index: number) => {
              return {
                uuid: index,
                read_progress: Math.floor(Math.random() * 99) + 10,
              };
            }
          ),
          key: "GEMS",
          avatar: "/static/nfts/gem.gif",
        },
      ],
    },
    pharses: [
      "state",
      "try",
      "gown",
      "jar",
      "legend",
      "health",
      "away",
      "worry",
      "subway",
      "unaware",
      "scan",
      "juice",
    ],
  },
  {
    uuid: "5201f3d7ebf048e9a18cf4a453bd873",
    name: "Reader",
    avatar: "/static/user/vinh.png",
    wallet_address: "9jPM6BvtDrc1G6MbLxQsUEVnE1Fzva3MzJ8rjVDEGPig",
    wallet: {
      cryptos: [
        { total: 7.67, avatar: "/static/crypto/solona.png", key: "SOL" },
        { total: 653.9, avatar: "/static/crypto/rte.png", key: "RTE" },
        { total: 156.34, avatar: "/static/crypto/usdc.png", key: "USDC" },
      ],
      nfts: [
        {
          data: getBooks(8).map((data: any, index: number) => {
            return {
              uuid: index,
              book_id: data?.id,
              read_progress: Math.floor(Math.random() * 70) + 20,
            };
          }),
          key: "BOOKS",
          avatar: "/static/nfts/book.png",
        },

        {
          data: Array.from(Array(3).keys()).map((data: any, index: number) => {
            return {
              uuid: index,
              read_progress: Math.floor(Math.random() * 99) + 10,
            };
          }),
          key: "BOXS",
        },
        {
          data: Array.from(Array(143).keys()).map(
            (data: any, index: number) => {
              return {
                uuid: index,
                read_progress: Math.floor(Math.random() * 99) + 10,
              };
            }
          ),
          key: "GEMS",
          avatar: "/static/nfts/gem.gif",
        },
      ],
    },
    pharses: [
      "state",
      "try",
      "gown",
      "jar",
      "legend",
      "health",
      "away",
      "worry",
      "subway",
      "unaware",
      "scan",
      "juice",
    ],
  },
];

export default USERS;
