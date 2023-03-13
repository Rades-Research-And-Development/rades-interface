import { SvgIcon, SvgIconProps } from "@mui/material";

const Clear = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M17.85,16.44a.5.5,0,0,1,0,.71l-.7.7a.5.5,0,0,1-.71,0L12,13.41,7.56,17.85a.5.5,0,0,1-.71,0l-.7-.7a.5.5,0,0,1,0-.71L10.59,12,6.15,7.56a.5.5,0,0,1,0-.71l.7-.7a.5.5,0,0,1,.71,0L12,10.59l4.44-4.44a.5.5,0,0,1,.71,0l.7.7a.5.5,0,0,1,0,.71L13.41,12Z" />
    </SvgIcon>
  );
};

export default Clear;
