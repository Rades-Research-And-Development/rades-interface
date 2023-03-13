import { SvgIcon, SvgIconProps } from "@mui/material";

const MessagePlay = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M18,2H6A4,4,0,0,0,2,6V21.5a.5.5,0,0,0,.5.5.49.49,0,0,0,.35-.15l3-3A3,3,0,0,1,8,18H18a4,4,0,0,0,4-4V6A4,4,0,0,0,18,2Zm-2.94,8.62-3.89,2.6A.75.75,0,0,1,10,12.6V7.4a.75.75,0,0,1,1.17-.62l3.89,2.6A.74.74,0,0,1,15.06,10.62Z" />
    </SvgIcon>
  );
};

export default MessagePlay;
