import { SvgIcon, SvgIconProps } from "@mui/material";

const UserAddIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M16.89,18.55A1,1,0,0,1,16,20H2a1,1,0,0,1-.89-1.45l1.44-2.89A3,3,0,0,1,5.24,14h7.52a3,3,0,0,1,2.69,1.66ZM9,12A4,4,0,1,0,5,8,4,4,0,0,0,9,12Zm13.5-2H20V7.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V10H15.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H18v2.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V12h2.5a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,22.5,10Z" />
    </SvgIcon>
  );
};

export default UserAddIcon;
