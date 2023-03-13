import { SvgIcon, SvgIconProps } from "@mui/material";

const DeleteOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M20,4.5v1a.5.5,0,0,1-.5.5H4.5A.5.5,0,0,1,4,5.5v-1A.5.5,0,0,1,4.5,4H9V3a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V4h4.5A.5.5,0,0,1,20,4.5ZM16.28,18H7.72L7,8H5l.87,12.14a2,2,0,0,0,2,1.86h8.28a2,2,0,0,0,2-1.86L19,8H17Z" />
    </SvgIcon>
  );
};

export default DeleteOutlined;
