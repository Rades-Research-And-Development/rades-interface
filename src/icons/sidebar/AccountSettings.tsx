import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const AccountSettings = (props: SvgIconProps) => {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M21,10.1l-2.8-5c-0.7-1.3-2-2.1-3.5-2.1H9.3C7.8,3,6.5,3.8,5.8,5.1l-2.8,5c-0.7,1.2-0.7,2.7,0,3.9l2.8,5
	c0.7,1.3,2,2.1,3.5,2.1h5.4c1.5,0,2.8-0.8,3.5-2.1l2.8-5C21.7,12.7,21.7,11.3,21,10.1z M19.2,13l-2.8,5c-0.4,0.6-1,1-1.7,1H9.3
	c-0.7,0-1.4-0.4-1.7-1l-2.8-5c-0.3-0.6-0.3-1.3,0-1.9l2.8-5c0.4-0.6,1-1,1.7-1h5.4c0.7,0,1.4,0.4,1.7,1l2.8,5
	C19.6,11.6,19.6,12.4,19.2,13z M12,9c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S13.7,9,12,9z"
      />
    </SvgIcon>
  );
};

export default AccountSettings;
