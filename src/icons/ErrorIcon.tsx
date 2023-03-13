import { SvgIcon, SvgIconProps } from "@mui/material";

const ErrorIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,13.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Zm-.22-3.72a.25.25,0,0,1-.25.22H11.47a.25.25,0,0,1-.25-.22l-.4-3.22a.5.5,0,0,1,.5-.56h1.36a.5.5,0,0,1,.5.56Z" />
    </SvgIcon>
  );
};

export default ErrorIcon;
