import { SvgIcon, SvgIconProps } from "@mui/material";

const InvertColors = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12,20a6,6,0,0,1-6-6c0-2.47,1.61-5.28,4.91-8.59L12,4.33Zm.15-18h-.3a.75.75,0,0,0-.53.22L9.5,4C6.86,6.64,4,10.19,4,14a8,8,0,0,0,16,0c0-3.81-2.86-7.36-5.5-10L12.68,2.18A.75.75,0,0,0,12.15,2Z" />
    </SvgIcon>
  );
};

export default InvertColors;
