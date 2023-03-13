import { SvgIcon, SvgIconProps } from "@mui/material";

const MoreHorizontal = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M18,10a2,2,0,1,1-2,2A2,2,0,0,1,18,10Zm-4,2a2,2,0,1,0-2,2A2,2,0,0,0,14,12ZM8,12a2,2,0,1,0-2,2A2,2,0,0,0,8,12Z" />
    </SvgIcon>
  );
};

export default MoreHorizontal;
