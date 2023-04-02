import IChains from "interface/chains.interface";
import Web3 from "web3";

export const getBalanceByTokenAddress = async (connection: Web3, cryptoAdress: string, cryptoABILink: string, publicKey: string) => {
    const cryptoAddress = cryptoAdress;
    const test = await fetch(cryptoABILink)
    const cryptoABIRaw = await test.json()
    const cryptoABI = JSON.parse(cryptoABIRaw.result);
    await connection.setProvider(connection.currentProvider);
    const cryptoCongtract = await new connection.eth.Contract(cryptoABI, cryptoAddress);
    const cryptodecimals = await cryptoCongtract.methods.decimals().call((error, decimals) => decimals);
    const cryptoBalanceRaw = await cryptoCongtract.methods.balanceOf(publicKey).call((error, cryptoBalance) => cryptoBalance)
    return Number(Number(cryptoBalanceRaw / 10 ** cryptodecimals).toFixed(2));
};