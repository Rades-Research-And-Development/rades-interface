import { SvgIcon, SvgIconProps } from "@mui/material";

const CloudIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M17.9,9C17.4,6.2,15,4,12,4c-3.3,0-6,2.7-6,6c-2.8,0-5,2.2-5,5s2.2,5,5,5h11.5c3,0,5.5-2.5,5.5-5.5C23,11.6,20.8,9.2,17.9,9
	z M15.5,11.6l-4.2,4.2c-0.2,0.2-0.5,0.2-0.7,0l-2.1-2.1c-0.2-0.2-0.2-0.5,0-0.7L9,12.5c0.2-0.2,0.5-0.2,0.7,0l1.2,1.2l3.4-3.4
	c0.2-0.2,0.5-0.2,0.7,0l0.5,0.5C15.7,11.1,15.7,11.4,15.5,11.6z"
      />
    </SvgIcon>
  );
};

export default CloudIcon;
