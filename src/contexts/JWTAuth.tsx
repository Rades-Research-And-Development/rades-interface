import LoadingScreen from "components/LoadingScreen";
import jwtDecode from "jwt-decode";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import axios from "../utils/axios";

// --------------------------------------------------------
type AuthUser = null | Record<string, any>;

type InitialAuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
};

// props type
type AuthProviderProps = { children: ReactNode };
// --------------------------------------------------------

const initialState: InitialAuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const isValidToken = (accessToken: string) => {
  if (!accessToken) return false;

  const decodedToken = jwtDecode<{ exp: number }>(accessToken);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp > currentTime;
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    // localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    // localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state: InitialAuthState, action: any) => {
  switch (action.type) {
    case "INIT": {
      return {
        isInitialized: true,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };
    }
    case "LOGIN": {
      return { ...state, isAuthenticated: true, user: action.payload.user };
    }
    case "LOGOUT": {
      return { ...state, user: null, isAuthenticated: false };
    }
    case "REGISTER": {
      return { ...state, isAuthenticated: true, user: action.payload.user };
    }
    default: {
      return state;
    }
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT",
  logout: () => {},
  login: (email: string, password: string) => Promise.resolve(),
  register: (email: string, password: string, username: string) =>
    Promise.resolve(),
});

export const JWTAuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email: string, password: string) => {
    const { data } = await axios.post("/api/auth/login", { email, password });
    setSession(data.accessToken);
    dispatch({ type: "LOGIN", payload: { user: data.user } });
  };

  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    const { data } = await axios.post("/api/auth/register", {
      email,
      username,
      password,
    });
    setSession(data.accessToken);
    dispatch({ type: "REGISTER", payload: { user: data.user } });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    (async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          const { data } = await axios.get("/api/auth/profile");
          dispatch({
            type: "INIT",
            payload: { user: data.user, isAuthenticated: true },
          });
        } else {
          dispatch({
            type: "INIT",
            payload: { user: null, isAuthenticated: false },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INIT",
          payload: { user: null, isAuthenticated: false },
        });
      }
    })();
  }, []);

  // show loading until not initialized
  if (!state.isInitialized) <LoadingScreen />;

  return (
    <AuthContext.Provider
      value={{ ...state, method: "JWT", login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
