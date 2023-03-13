import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const OvalCheckedIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 12 12" {...props}>
      <circle cx="6" cy="6" r="6" fill="currentColor" />
      <path
        d="M4.00007 5.84661L5.42338 7.26991L8.26998 4.4233"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default OvalCheckedIcon;
