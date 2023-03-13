import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handler() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // set window size at the first time
    handler();

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  return windowSize;
};

export default useWindowSize;
