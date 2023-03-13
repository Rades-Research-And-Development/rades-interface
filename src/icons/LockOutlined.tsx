import { SvgIcon, SvgIconProps } from "@mui/material";

const LockOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M18,12m0,0v8H6V12ZM12,2A6,6,0,0,0,6,8v2a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V12a2,2,0,0,0-2-2V8a6,6,0,0,0-6-6ZM8,10V8a4,4,0,0,1,8,0v2Z" />
    </SvgIcon>
  );
};

export default LockOutlined;
