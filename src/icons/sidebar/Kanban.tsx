import { SvgIcon, SvgIconProps } from "@mui/material";

const Kanban = (props: SvgIconProps) => {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M18,15v5H6V15H18m0-2H6a2,2,0,0,0-2,2v5a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V15a2,2,0,0,0-2-2Zm0-9V9H6V4H18m0-2H6A2,2,0,0,0,4,4V9a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2Z" />
    </SvgIcon>
  );
};

export default Kanban;
