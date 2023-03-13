import { SvgIcon, SvgIconProps } from "@mui/material";

const NotificationOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M10,20h4a2,2,0,0,1-4,0Zm9.71-4.29-.83-.83A3,3,0,0,1,18,12.76V10a6,6,0,0,0-1.2-3.6l-.9-1.2A3,3,0,0,0,13.5,4H13V2.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V4h-.5A3,3,0,0,0,8.1,5.2L7.2,6.4A6,6,0,0,0,6,10v2.76a3,3,0,0,1-.88,2.12l-.83.83a1,1,0,0,0-.29.7V17a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1v-.59A1,1,0,0,0,19.71,15.71Z" />
    </SvgIcon>
  );
};

export default NotificationOutlined;
