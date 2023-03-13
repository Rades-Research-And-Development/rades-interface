import { SvgIcon, SvgIconProps } from "@mui/material";

const LiteCoin = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.73,14.6a.5.5,0,0,1-.49.4H9.3a.25.25,0,0,1-.24-.3l.64-3.18-1.38.39A.26.26,0,0,1,8,13.67v-1a.5.5,0,0,1,.36-.48l1.71-.49.85-4.26a.5.5,0,0,1,.49-.4H13.7a.25.25,0,0,1,.24.3l-.69,3.45,1.43-.41a.26.26,0,0,1,.32.24v1a.5.5,0,0,1-.36.48l-1.76.51-.53,2.64H15.7a.25.25,0,0,1,.24.3Z" />
    </SvgIcon>
  );
};

export default LiteCoin;
