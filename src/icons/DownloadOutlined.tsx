import { SvgIcon, SvgIconProps } from "@mui/material";

const DownloadOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22ZM12,4a8,8,0,1,1-8,8A8,8,0,0,1,12,4Zm-.72,13.78a.77.77,0,0,0,.53.22h.38a.75.75,0,0,0,.53-.22l3.13-3.14a.5.5,0,0,0,0-.71l-.7-.71a.5.5,0,0,0-.71,0L13,14.67V6.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v8.17L9.56,13.23a.49.49,0,0,0-.7,0l-.71.71a.5.5,0,0,0,0,.71Z" />
    </SvgIcon>
  );
};

export default DownloadOutlined;
