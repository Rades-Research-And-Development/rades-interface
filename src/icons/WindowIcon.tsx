import { SvgIcon, SvgIconProps } from "@mui/material";

const WindowIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        d="M17.5 0H2.5C1.12125 0 0 1.12125 0 2.5V17.5C0 18.8787 1.12125 20 2.5 20H17.5C18.8787 20 20 18.8787 20 17.5V2.5C20 1.12125 18.8787 0 17.5 0ZM1.66667 17.5V2.5C1.66667 2.04042 2.04042 1.66667 2.5 1.66667H5.83333V18.3333H2.5C2.04042 18.3333 1.66667 17.9596 1.66667 17.5ZM18.3333 17.5C18.3333 17.9596 17.9596 18.3333 17.5 18.3333H7.5V1.66667H17.5C17.9596 1.66667 18.3333 2.04042 18.3333 2.5V17.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default WindowIcon;
