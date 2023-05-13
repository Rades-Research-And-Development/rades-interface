import { Avatar, Box, Card, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import { H5, H6, Tiny } from "components/Typography";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { FC } from "react";

// component props interface
interface FollowerAccountsProps {}

const FollowerAccounts: FC<FollowerAccountsProps> = ({}) => {
  return (
    <Card sx={{ padding: 3, "& .MuiBox-root": { paddingX: 0 } }}>
      <H5 mb={2}>Recommed Users</H5>
      {conversationList[0] ? (
        conversationList.slice(0, 2).map((conversation, index) => (
          <FlexBetween
            p={2}
            borderBottom={1}
            borderColor="divider"
            sx={{ "&:last-of-type": { borderBottom: 0 }, cursor: "pointer" }}
          >
            <FlexBox alignItems="center">
              <Avatar
                src={conversation.image}
                sx={{ width: 30, height: 30, backgroundColor: "primary.200" }}
              />
              <Box marginLeft={1}>
                <H6>{conversation.name}</H6>
                <Tiny ellipsis display="block" color="text.disabled">
                  {conversation.lastMsg}
                </Tiny>
              </Box>
            </FlexBox>

            <Tiny color="text.disabled">{conversation.time}</Tiny>
          </FlexBetween>
        ))
      ) : (
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={"100%"} height={118} />
        </Stack>
      )}
    </Card>
  );
};

const conversationList = [
  {
    name: "Ella knox",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/070-man-15.svg",
    time: "11:50pm",
  },
  {
    name: "Sean mila",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/069-woman-15.svg",
    time: "11:40pm",
  },
  {
    name: "Taylor Swift",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/067-man-14.svg",
    time: "11:30pm",
  },
  {
    name: "Ella knox",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/070-man-15.svg",
    time: "11:50pm",
  },
  {
    name: "Sean mila",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/069-woman-15.svg",
    time: "11:40pm",
  },
];
export default FollowerAccounts;
