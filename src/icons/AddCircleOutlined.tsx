import { SvgIcon, SvgIconProps } from "@mui/material";

const AddCircleOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm3.5-9H13V8.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V11H8.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H11v2.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2.5a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,15.5,11Z" />
    </SvgIcon>
  );
};

export default AddCircleOutlined;
