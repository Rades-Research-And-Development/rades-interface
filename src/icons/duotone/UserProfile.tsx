import { SvgIcon, SvgIconProps } from "@mui/material";

const UserProfile = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 16 17" {...props}>
      <path d="M9.60039 8.75H4.375C1.95891 8.75 0 10.7086 0 13.125C0 13.6082 0.391836 14 0.850391 14H13.125C13.6082 14 13.9754 13.6082 13.9754 13.125C14 10.7078 12.0422 8.75 9.60039 8.75Z" />
      <path
        className="secondary"
        d="M7 7.875C9.17465 7.875 10.9375 6.11215 10.9375 3.9375C10.9375 1.76285 9.17465 0 7 0C4.82563 0 3.0625 1.76285 3.0625 3.9375C3.0625 6.11215 4.82617 7.875 7 7.875Z"
      />
    </SvgIcon>
  );
};

export default UserProfile;
