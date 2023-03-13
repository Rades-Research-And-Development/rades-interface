import { SvgIcon, SvgIconProps } from "@mui/material";

const Flag = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M20,6.5v9a.5.5,0,0,1-.5.5H14a2,2,0,0,1-2-2H6v7.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,4.5,2h1a.5.5,0,0,1,.5.5V4h6a2,2,0,0,1,2,2h5.5A.5.5,0,0,1,20,6.5Z" />
    </SvgIcon>
  );
};

export default Flag;
