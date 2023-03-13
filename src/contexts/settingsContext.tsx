import useLocalStorage from "hooks/useLocalStorage";
import { createContext, ReactNode } from "react";
import { themeSettingsTypes } from "theme";
import { THEMES } from "../constants";

const initialSettings: themeSettingsTypes = {
  activeLayout: "layout3",
  direction: "ltr",
  theme: THEMES.DARK,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: (arg: themeSettingsTypes) => {},
});

// component props type
type SettingsProviderProps = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const { data: settings, storeData: setStoreSettings } = useLocalStorage(
    "settings",
    initialSettings
  );

  const saveSettings = (updateSettings: themeSettingsTypes) => {
    setStoreSettings(updateSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
