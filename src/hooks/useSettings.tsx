import { useContext } from "react";
import { SettingsContext } from "../contexts/settingsContext";

const useSettings = () => useContext(SettingsContext);

export default useSettings;
