import { SvgIcon, SvgIconProps } from "@mui/material";

const DevicesIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M22,10v8H18V10h4m0-2H18a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2ZM4,6V17H14v3H1a1,1,0,0,1-1-1v-.5A.5.5,0,0,1,.5,18H2V5A1,1,0,0,1,3,4H21a1,1,0,0,1,1,1V6Z" />
    </SvgIcon>
  );
};

export default DevicesIcon;
