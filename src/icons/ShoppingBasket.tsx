import { SvgIcon, SvgIconProps } from "@mui/material";

const ShoppingBasket = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M22.5,10h-4L12.73,2.3a.77.77,0,0,0-.6-.3h-.26a.77.77,0,0,0-.6.3L5.5,10h-4a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H2l1.71,7.65A3,3,0,0,0,6.6,22H17.4a3,3,0,0,0,2.92-2.35L22,12h.47a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,22.5,10ZM8,10l4-5.33L16,10Z" />
    </SvgIcon>
  );
};

export default ShoppingBasket;
