import { IconButton, Stack } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, Tiny } from "components/Typography";
import AvatarBadge from "components/avatars/AvatarBadge";
import MoreHorizontal from "icons/MoreHorizontal";
import React, { FC } from "react";

// ------------------------------------------------------
type PersonInfoProps = {
  name: string;
  title: string;
  image: string;
  handleMore?: () => void;
};
// ------------------------------------------------------

const PersonInfo: FC<PersonInfoProps> = ({ name, title, image }) => {
  return (
    <FlexBetween padding={2}>
      <FlexBox alignItems="center" gap={1}>
        <AvatarBadge variant="dot" width={7} height={7} color="success">
          <AppAvatar src={image} alt={name} />
        </AvatarBadge>
        <Stack spacing={0.3}>
          <H5>{name}</H5>
          <Tiny fontWeight={500}>{title}</Tiny>
        </Stack>
      </FlexBox>

      <IconButton sx={{ padding: 0 }}>
        <MoreHorizontal sx={{ fontSize: 19, color: "text.disabled" }} />
      </IconButton>
    </FlexBetween>
  );
};

export default PersonInfo;
