import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const Ecommerce = (props: SvgIconProps) => {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21,8a1,1,0,0,0-1-1H17A5,5,0,0,0,7,7H4A1,1,0,0,0,3,8V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2ZM12,4a3,3,0,0,1,3,3H9A3,3,0,0,1,12,4Zm7,16H5V9H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V9h6v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V9h2Z" />
    </SvgIcon>
  );
};

export default Ecommerce;
