import { Avatar, Box } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Tiny } from "components/Typography";
import { FC } from "react";

// component props interface
interface RecommedAccountProps {
  conversation: {
    name: string;
    image: string;
    lastMsg: string;
    time?: string;
  };
}

const RecommedAccount: FC<RecommedAccountProps> = ({ conversation }) => {
  return (
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
  );
};

export default RecommedAccount;
