import { ChevronRight, Send } from "@mui/icons-material";
import {
  Box,
  Breakpoint,
  Card,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  Stack,
  styled,
  Theme,
  useMediaQuery,
} from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import SearchInput from "components/input-fields/SearchInput";
import Scrollbar from "components/ScrollBar";
import { H5, Tiny } from "components/Typography";
import AttachmentDiagonal from "icons/AttachmentDiagonal";
import FileOutlined from "icons/FileOutlined";
import Image from "icons/Image";

import Link from "icons/Link";
import Common from "page-sections/message/Common";
import FileType from "page-sections/message/FileType";
import IncomingMsg from "page-sections/message/IncomingMsg";
import OutgoingMsg from "page-sections/message/OutgoingMsg";
import PersonInfo from "page-sections/message/PersonInfo";
import RecentChatItem from "page-sections/message/RecentChatItem";
import { FC, useState } from "react";
import RECENT_CHATS from "__fakeData__/recent_chats";
import { lightTheme } from "../constants";

// styled components
const StyledIconButton = styled(IconButton)(() => ({ padding: 0 }));

const StyledSearchInput = styled(SearchInput)(({ theme }) => ({
  backgroundColor: lightTheme(theme)
    ? theme.palette.action.hover
    : theme.palette.divider,
}));

const ToggleBtn = styled(Box)<{ screen: number | Breakpoint }>(
  ({ theme, screen = "md" }) => ({
    top: 20,
    zIndex: 1,
    padding: 5,
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up(screen)]: { display: "none" },
  })
);

const Message: FC = () => {
  const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
  const [openRightDrawer, setOpenRightDrawer] = useState(false);
  const downXl = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const recentChatsContent = (
    <Card sx={{ maxHeight: 700, height: "100%", pb: 1 }}>
      <PersonInfo
        name="Jamie Alexender"
        title="UI/UX Designer"
        image="/static/avatar/001-man.svg"
      />

      <Divider />

      <Box px={2} pt={2}>
        <StyledSearchInput placeholder="Search..." />
        <H5 py={3}>Recent Chats</H5>
      </Box>

      <Scrollbar autoHide={false} style={{ maxHeight: 504 }}>
        {RECENT_CHATS.map((chat, key) => (
          <RecentChatItem key={key} chat={chat} />
        ))}
      </Scrollbar>
    </Card>
  );

  const filesContent = (
    <Card sx={{ maxHeight: 700, height: "100%", pb: 1 }}>
      <Stack alignItems="center" sx={{ padding: 3 }}>
        <AppAvatar src="/static/avatar/006-woman-1.svg" />
        <H5 mt={1.5} mb={0.5}>
          Taylor clark
        </H5>
        <Tiny fontWeight={500}>Developer</Tiny>
      </Stack>

      <Divider />

      <FlexBox justifyContent="center" gap={2} p={2}>
        <Common Icon={FileOutlined} amount={230} title="Files" />
        <Common Icon={Link} amount={230} title="Links" />
      </FlexBox>

      <H5 p={2}>File Type</H5>
      <Scrollbar autoHide={false} style={{ maxHeight: 435 }}>
        <Stack spacing={3} px={2}>
          <FileType />
        </Stack>
      </Scrollbar>
    </Card>
  );

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {downMd ? (
          <Drawer
            anchor="left"
            open={openLeftDrawer}
            onClose={() => setOpenLeftDrawer(false)}
          >
            <Box width={300} padding={1}>
              {recentChatsContent}
            </Box>
          </Drawer>
        ) : (
          <Grid item xl={3} md={5}>
            {recentChatsContent}
          </Grid>
        )}

        <Grid item xl={6} md={7} xs={12}>
          <Card sx={{ maxHeight: 700 }}>
            <PersonInfo
              name="Taylor clark"
              title="Online now"
              image="/static/avatar/002-girl.svg"
            />

            <Divider />

            <Box position="relative">
              <ToggleBtn
                screen="md"
                onClick={() => setOpenLeftDrawer(true)}
                sx={{ left: 0, borderRadius: "0 8px 8px 0" }}
              >
                <ChevronRight sx={{ fontSize: 16, color: "white" }} />
              </ToggleBtn>

              <Scrollbar style={{ maxHeight: 562 }}>
                <Stack spacing={4} px={3} py={2}>
                  <OutgoingMsg />
                  <IncomingMsg />
                  <OutgoingMsg />
                  <IncomingMsg />
                  <OutgoingMsg />
                  <IncomingMsg />
                  <OutgoingMsg />
                </Stack>
              </Scrollbar>

              <ToggleBtn
                screen="xl"
                onClick={() => setOpenRightDrawer(true)}
                sx={{ right: 0, borderRadius: "8px 0 0 8px" }}
              >
                <ChevronRight sx={{ fontSize: 16, color: "white" }} />
              </ToggleBtn>
            </Box>

            <Divider />

            <FlexBetween padding={2} gap={2}>
              <InputBase
                fullWidth
                multiline
                placeholder="Write a message..."
                startAdornment={
                  <FlexBox mr={1.5} gap={1.5}>
                    <StyledIconButton>
                      <AttachmentDiagonal sx={{ color: "text.disabled" }} />
                    </StyledIconButton>
                    <StyledIconButton>
                      <Image sx={{ color: "text.disabled" }} />
                    </StyledIconButton>
                  </FlexBox>
                }
                sx={{ fontSize: 12, fontWeight: 500 }}
              />

              <StyledIconButton>
                <Send sx={{ color: "primary.main" }} />
              </StyledIconButton>
            </FlexBetween>
          </Card>
        </Grid>

        {downXl ? (
          <Drawer
            anchor="right"
            open={openRightDrawer}
            onClose={() => setOpenRightDrawer(false)}
          >
            <Box width={300} padding={1}>
              {filesContent}
            </Box>
          </Drawer>
        ) : (
          <Grid item xl={3}>
            {filesContent}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Message;
