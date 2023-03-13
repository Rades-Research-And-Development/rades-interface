import { SvgIcon, SvgIconProps } from "@mui/material";

const FileOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M6,22H18a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2H11.24a3,3,0,0,0-2.12.88L4.88,7.12A3,3,0,0,0,4,9.24V20A2,2,0,0,0,6,22Zm12-2H6V10h5a1,1,0,0,0,1-1V4h6Z" />
    </SvgIcon>
  );
};

export default FileOutlined;
