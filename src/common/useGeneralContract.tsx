import { Provider, Web3Provider } from "@ethersproject/providers";
import {
  Creature,
  CreatureAccessory,
  RadesMockCurrency,
  Marketplace,
  RadesMockCurrency__factory,
} from "app/contracts";
import { providers } from "ethers";
import IChains from "interface/chains.interface";
import create from "zustand";
export type IGeneralContract = {
  RadesMockCurrency: RadesMockCurrency | any;
  Marketplace: Marketplace | any;
  Creature: Creature | any;
  CreatureAccessory: CreatureAccessory | any;
};
const provider = new providers.Web3Provider((window as any)?.ethereum);
const useGeneralContract = create<IGeneralContract>(() => ({
  RadesMockCurrency: {},
  Marketplace: {},
  Creature: {},
  CreatureAccessory: {},
}));
export default useGeneralContract;
