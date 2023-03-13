import { SvgIcon, SvgIconProps } from "@mui/material";

const CheckMarkCircleOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.82,8.49a.5.5,0,0,0-.7,0l-4.74,4.74-1.5-1.49a.48.48,0,0,0-.7,0l-.53.53a.5.5,0,0,0,0,.71L10,15.35a.48.48,0,0,0,.7,0l5.62-5.62a.5.5,0,0,0,0-.71Z" />
    </SvgIcon>
  );
};

export default CheckMarkCircleOutlined;
