import { createContext } from "react";
interface IUserContext {
  user: any;
  setUser?: (data?: any) => void;
}
const defaultState = {
  user: {},
};

const UserContext = createContext<IUserContext>(defaultState);

export default UserContext;
