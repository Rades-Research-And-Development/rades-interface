import { Badge, BadgeProps, styled } from "@mui/material";
import { FC } from "react";

// ----------------------------------------------------------------
type AvatarBadgeProps = { width?: number; height?: number };
// ----------------------------------------------------------------

const StyledBadge = styled(Badge)<AvatarBadgeProps>(
  ({ theme, width, height }) => ({
    "& .MuiBadge-badge": {
      width: width,
      height: height,
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.light,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
    "& .MuiBadge-colorSuccess.MuiBadge-badge": {
      backgroundColor: theme.palette.success.main,
      boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    },
  })
);

const AvatarBadge: FC<BadgeProps & AvatarBadgeProps> = ({
  children,
  width = 25,
  height = 25,
  ...props
}) => {
  return (
    <StyledBadge
      width={width}
      height={height}
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

export default AvatarBadge;
