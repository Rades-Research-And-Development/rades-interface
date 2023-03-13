import { createContext } from "react";
interface IProviderContext {
  provider: any;
  setProvider?: (data?: any) => void;
}
const defaultState = {
  provider: {},
};

const ProviderContext = createContext<IProviderContext>(defaultState);

export default ProviderContext;
