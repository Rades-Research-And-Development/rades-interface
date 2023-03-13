import { SvgIcon, SvgIconProps } from "@mui/material";

const PasswordIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M18,10V8A6,6,0,0,0,6,8v2a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V12A2,2,0,0,0,18,10ZM8,8a4,4,0,0,1,8,0v2H8Zm7,7.5a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5Zm-4,0a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5Zm-4,1v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-1A.5.5,0,0,1,7,16.5Z" />
    </SvgIcon>
  );
};

export default PasswordIcon;
