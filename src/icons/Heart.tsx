import { SvgIcon, SvgIconProps } from "@mui/material";

const Heart = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M22,8.5A5.5,5.5,0,0,0,16.5,3,6.36,6.36,0,0,0,12,5.07,6.36,6.36,0,0,0,7.5,3,5.5,5.5,0,0,0,2,8.5C2,12.42,6.75,16.75,9,19l2.28,2.28a.75.75,0,0,0,.53.22h.38a.75.75,0,0,0,.53-.22L15,19C17.25,16.75,22,12.42,22,8.5Z" />
    </SvgIcon>
  );
};

export default Heart;
