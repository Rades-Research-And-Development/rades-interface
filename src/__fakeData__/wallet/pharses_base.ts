const LIST_USERS = [
  {
    uuid: "5201f3d7ebf048e9a18cf4a453bd8730",
    name: "Nguyen The Vinh",
    avatar: "/static/user/rades.png",
    wallet_address: "9jPM6BvtDrc1G6MbLxQsUEVnE1Fzva3MzJ8rjVDEGPig",
    wallet: {
      SOL: 7.67,
      RTE: 654.89,
      USDC: 0,
    },
    items: {
      books: Array.from(Array(20).keys()).map((data: any, index: number) => {
        return {
          uuid: `${String(
            Math.floor(Math.random() * 4353) + 995
          )}9d199d0624eaeb0fc64cf9f${String(
            Math.floor(Math.random() * 4353) + 995
          )}2a`,
          read_progress: Math.floor(Math.random() * 10) + 99,
        };
      }),
      gems: Array.from(Array(15).keys()).map((data: any, index: number) => {
        return {
          gem_uuid: `${String(
            Math.floor(Math.random() * 4353) + 995
          )}9d199deb0fc64cf9f${String(
            Math.floor(Math.random() * 4353) + 995
          )}2a`,
        };
      }),
      boxs: [
        {
          box_uuid: `8649d19${String(
            Math.floor(Math.random() * 4353) + 995
          )}624eaeb0fc64cf9f2f322a`,
        },
        {
          box_uuid: `${String(
            Math.floor(Math.random() * 4353) + 995
          )}9d199d0624eaeb0fc64cf9f2f322a`,
        },
      ],
    },
  },
  {
    uuid: "5201f3d7ebf048e9a18cf4a453bd8731",
    name: "Reader",
    avatar: "/static/user/rades.png",
    wallet_address: "9jPM6BvtDrc1G6MbLxQsUEVnE1Fzva3MzJ8rjVDEGPig",
    wallet: {
      SOL: 7.67,
      RTE: 654.89,
      USDC: 0,
    },
    items: {
      books: Array.from(Array(20).keys()).map((data: any, index: number) => {
        return {
          uuid: `${String(
            Math.floor(Math.random() * 4353) + 995
          )}9d199d0624eaeb0fc64cf9f${String(
            Math.floor(Math.random() * 4353) + 995
          )}2a`,
          read_progress: Math.floor(Math.random() * 10) + 99,
        };
      }),
      gems: Array.from(Array(15).keys()).map((data: any, index: number) => {
        return {
          gem_uuid: `${String(
            Math.floor(Math.random() * 4353) + 995
          )}9d199deb0fc64cf9f${String(
            Math.floor(Math.random() * 4353) + 995
          )}2a`,
        };
      }),
      boxs: [
        {
          box_uuid: `8649d19${String(
            Math.floor(Math.random() * 4353) + 995
          )}624eaeb0fc64cf9f2f322a`,
        },
        {
          box_uuid: `${String(
            Math.floor(Math.random() * 4353) + 995
          )}9d199d0624eaeb0fc64cf9f2f322a`,
        },
      ],
    },
  },
];

export default LIST_USERS;
