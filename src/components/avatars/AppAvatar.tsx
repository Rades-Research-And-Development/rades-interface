import { Avatar, AvatarProps, styled } from "@mui/material";
import { FC } from "react";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  borderColor: theme.palette.common.white,
  borderWidth: 1,
}));

const AppAvatar: FC<AvatarProps> = (props) => {
  return <StyledAvatar {...props} />;
};

export default AppAvatar;
