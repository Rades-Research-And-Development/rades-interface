import { SvgIcon, SvgIconProps } from "@mui/material";

const HourGlassIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M18,7V4h.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H6V7A3,3,0,0,0,7.13,9.38L10.4,12,7.13,14.62A3,3,0,0,0,6,17v3H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H18V17a3,3,0,0,0-1.13-2.34L13.6,12l3.27-2.62A3,3,0,0,0,18,7Zm-2.38,9.14A1,1,0,0,1,16,17v0H8v0a1,1,0,0,1,.38-.78L12,13.28ZM16,7a1,1,0,0,1-.38.78L14.15,9H9.85L8.38,7.82A1,1,0,0,1,8,7V4h8Z" />
    </SvgIcon>
  );
};

export default HourGlassIcon;
