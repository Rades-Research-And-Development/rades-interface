import { SvgIcon, SvgIconProps } from "@mui/material";

const Add = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M19,11.5v1a.5.5,0,0,1-.5.5H13v5.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V13H5.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H11V5.5a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5V11h5.5A.5.5,0,0,1,19,11.5Z" />
    </SvgIcon>
  );
};

export default Add;
