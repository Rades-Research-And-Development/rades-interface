import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const ChartDonut = (props: SvgIconProps) => {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21,10.47a.51.51,0,0,1-.13.37.52.52,0,0,1-.37.16h-1a.5.5,0,0,1-.5-.48A6,6,0,0,0,13.47,5,.5.5,0,0,1,13,4.53v-1a.52.52,0,0,1,.16-.37A.51.51,0,0,1,13.53,3,8,8,0,0,1,21,10.47ZM18.48,13h-1a.5.5,0,0,0-.5.48A6,6,0,1,1,10.54,7a.5.5,0,0,0,.46-.5v-1a.5.5,0,0,0-.52-.5,8,8,0,1,0,8.5,8.5A.5.5,0,0,0,18.48,13Z" />
    </SvgIcon>
  );
};

export default ChartDonut;
