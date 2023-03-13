import { SvgIcon, SvgIconProps } from "@mui/material";

const SignIn = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M17,12.19v-.38a.77.77,0,0,0-.22-.53L11.64,6.15a.5.5,0,0,0-.71,0l-.71.71a.49.49,0,0,0,0,.7L13.67,11H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H13.67l-3.45,3.44a.5.5,0,0,0,0,.71l.71.7a.5.5,0,0,0,.71,0l5.14-5.13A.75.75,0,0,0,17,12.19ZM14.67,12ZM19,3H13.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H19V19H13.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" />
    </SvgIcon>
  );
};

export default SignIn;
