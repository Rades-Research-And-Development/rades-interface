import AuthContext from "contexts/JWTAuth";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);

export default useAuth;
