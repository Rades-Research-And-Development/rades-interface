import { SvgIcon, SvgIconProps } from "@mui/material";

const Chat = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M15,16a4,4,0,0,0,4-4V6a4,4,0,0,0-4-4H5A4,4,0,0,0,1,6V18.5a.5.5,0,0,0,.5.5.49.49,0,0,0,.35-.15l2-2A3,3,0,0,1,6,16ZM21,6v8a4,4,0,0,1-4,4H5a2,2,0,0,0,2,2H18a3,3,0,0,1,2.13.88l2,2a.49.49,0,0,0,.35.15.5.5,0,0,0,.5-.5V8A2,2,0,0,0,21,6Z" />
    </SvgIcon>
  );
};

export default Chat;
