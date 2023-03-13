import { Checkbox, CheckboxProps } from "@mui/material";
import OvalCheckedIcon from "icons/OvalCheckedIcon";
import OvalIcon from "icons/OvalIcon";
import { FC } from "react";

const RoundCheckBox: FC<CheckboxProps> = (props) => {
  return (
    <Checkbox
      disableRipple
      checkedIcon={<OvalCheckedIcon fontSize="small" color="primary" />}
      icon={<OvalIcon fontSize="small" color="primary" />}
      {...props}
    />
  );
};

export default RoundCheckBox;
