import { Box, Theme } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H6, Small, Tiny } from "components/Typography";
import AvatarBadge from "components/avatars/AvatarBadge";
import React, { FC } from "react";
import { lightTheme } from "../../constants";

// ---------------------------------------------------------
type RecentChatItemProps = {
  chat: {
    name: string;
    time: string;
    image: string;
    lastMsg: string;
    unseenMsg?: number | undefined;
  };
};
// ---------------------------------------------------------

const RecentChatItem: FC<RecentChatItemProps> = ({ chat }) => {
  const backgroundColor = (theme: Theme) =>
    lightTheme(theme) ? "grey.200" : "divider";

  return (
    <FlexBox
      gap={1.5}
      p={2}
      sx={{ cursor: "pointer", "&:hover": { backgroundColor } }}
    >
      <AvatarBadge variant="dot" width={7} height={7} color="success">
        <AppAvatar src={chat.image} />
      </AvatarBadge>

      <Box flexGrow={1}>
        <FlexBetween>
          <H6>{chat.name}</H6>
          <Tiny fontSize={10} fontWeight={500}>
            {chat.time}
          </Tiny>
        </FlexBetween>

        <FlexBetween>
          <Tiny fontWeight={500}>{chat.lastMsg}</Tiny>
          {chat.unseenMsg && (
            <FlexRowAlign
              sx={{
                width: 15,
                height: 15,
                color: "white",
                borderRadius: "50%",
                backgroundColor: "primary.main",
              }}
            >
              <Small fontSize={10}>{chat.unseenMsg}</Small>
            </FlexRowAlign>
          )}
        </FlexBetween>
      </Box>
    </FlexBox>
  );
};

export default RecentChatItem;
