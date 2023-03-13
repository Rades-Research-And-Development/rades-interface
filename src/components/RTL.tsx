import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useTheme } from "@mui/material";
import { FC, ReactNode, useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";

// component props types
type RTLProps = {
  children?: ReactNode;
};

const RTL: FC<RTLProps> = ({ children }) => {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRTL = createCache({
    key: theme.direction === "rtl" ? "rtl" : "css",
    // @ts-ignore
    stylisPlugins: theme.direction === "rtl" ? [rtlPlugin] : [],
  });

  cacheRTL.compat = true;

  return <CacheProvider value={cacheRTL}>{children}</CacheProvider>;
};

export default RTL;
