
export const ConnectWallet = async () => {
    // if((window as any).ethereum) {
    //     const web3 = new Web3((window as any).ethereum);
    //     try {
    //       await (window as any).ethereum.enable()
    //       return web3
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    //   else if ((window as any).web3) {
    //     const web3 = (window as any).web3;
    //     console.log('Injected web3 detected.');
    //     return web3;
    //   }
}
export const checkConnected = async () => {
    // let connected = false;
    // await (window as any).ethereum
    //     .request({
    //         method: "eth_accounts",
    //     })
    //     .then((accounts : string[]) => {
    //         if(accounts.length !== 0 ) connected =  true
    //         else connected = false
    //     })
    //     .catch((error: any) => {
    //         connected = false;
    //     });
    //     return connected
}