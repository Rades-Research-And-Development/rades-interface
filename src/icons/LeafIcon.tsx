import { SvgIcon, SvgIconProps } from "@mui/material";

const LeafIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M19,12.33c0-4.57-4.15-8.52-6.06-10.1A1,1,0,0,0,12.3,2h-.6a1,1,0,0,0-.64.23C9.15,3.81,5,7.76,5,12.33a7,7,0,0,0,6,6.92V21.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V19.25A7,7,0,0,0,19,12.33Zm-6,4.9V10.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v6.73a5,5,0,0,1-4-4.9C7,9.06,10,5.78,12,4c2,1.74,5,5,5,8.29A5,5,0,0,1,13,17.23Z" />
    </SvgIcon>
  );
};

export default LeafIcon;
