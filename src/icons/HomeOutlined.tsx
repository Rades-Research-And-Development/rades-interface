import { SvgIcon, SvgIconProps } from "@mui/material";

const HomeOutlined = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12.17,5l6.54,6.54a1,1,0,0,1,.29.7V19H16V13a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v6H5V12.24a1,1,0,0,1,.29-.7L11.83,5h.34m.42-2H11.41a1,1,0,0,0-.7.29L3.88,10.12A3,3,0,0,0,3,12.24V20a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V14.25a.25.25,0,0,1,.25-.25h3.5a.25.25,0,0,1,.25.25V20a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V12.24a3,3,0,0,0-.88-2.12L13.29,3.29a1,1,0,0,0-.7-.29Z" />
    </SvgIcon>
  );
};

export default HomeOutlined;
