import { SvgIcon, SvgIconProps } from "@mui/material";

const UserBigIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M7,7a5,5,0,1,1,5,5A5,5,0,0,1,7,7ZM21.89,20.55,20,16.76A5,5,0,0,0,15.53,14H8.47A5,5,0,0,0,4,16.76L2.11,20.55A1,1,0,0,0,3,22H21A1,1,0,0,0,21.89,20.55Z" />
    </SvgIcon>
  );
};

export default UserBigIcon;
