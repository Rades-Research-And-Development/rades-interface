import { SvgIcon, SvgIconProps } from "@mui/material";

const Copy = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M18,16V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16A2,2,0,0,0,18,16ZM4,4H16V16H4ZM20,6V18a2,2,0,0,1-2,2H6a2,2,0,0,0,2,2H18a4,4,0,0,0,4-4V8A2,2,0,0,0,20,6Z" />
    </SvgIcon>
  );
};

export default Copy;
