import { SvgIcon, SvgIconProps } from "@mui/material";

const CircleOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12,4a8,8,0,1,1-8,8,8,8,0,0,1,8-8m0-2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Z" />
    </SvgIcon>
  );
};

export default CircleOutlined;
