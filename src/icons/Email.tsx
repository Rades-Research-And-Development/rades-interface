import { SvgIcon, SvgIconProps } from "@mui/material";

const Email = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M20,4H4A2,2,0,0,0,2,6V18a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6A2,2,0,0,0,20,4Zm0,7-6.35,4.45a2.88,2.88,0,0,1-3.3,0L4,11V8.9l7.35,5.15a1.14,1.14,0,0,0,1.3,0L20,8.9Z" />
    </SvgIcon>
  );
};

export default Email;
