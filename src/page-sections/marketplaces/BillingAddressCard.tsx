import { AccountBalanceWallet } from "@mui/icons-material";
import { Box, Card, IconButton, Stack } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Paragraph } from "components/Typography";
import CheckmarkCircle from "icons/CheckmarkCircle";
import City from "icons/City";
import Delete from "icons/Delete";
import UserContext from "contexts/userContext";
import { useContext } from "react";
import React, { FC } from "react";
import AppAvatar from "components/avatars/AppAvatar";
// -----------------------------------------------------
type BillingAddressCardProps = {
  selected?: boolean;
};
// -----------------------------------------------------

const BillingAddressCard: FC<BillingAddressCardProps> = ({ selected }) => {
  const { user } = useContext(UserContext);
  return (
    <Card
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: selected ? "2px solid black" : 0,
        borderColor: "black",
      }}
    >
      <Box>
        <FlexBox alignItems="center" gap={1} mb={1}>
          <AccountBalanceWallet sx={{ color: "text.disabled" }} />
          <H6 fontSize={12}>Your wallet</H6>
        </FlexBox>

        <Paragraph fontSize={10} fontWeight={500} lineHeight={1.8}>
          <Stack
            direction="row"
            alignItems="center"
            py={2}
            spacing={2}
            style={{ width: "100%" }}
          >
            <AppAvatar src={user?.avatar} sx={{ borderRadius: "50%" }} />
            <Box>
              <H6>
                Wallet address: {user?.wallet_address.slice(0, 20) + "..."}
              </H6>
            </Box>
          </Stack>
        </Paragraph>
      </Box>

      {/* {selected ? (
        <Box padding={1}>
          <CheckmarkCircle />
        </Box>
      ) : (
        <IconButton>
          <Delete sx={{ color: "text.disabled" }} />
        </IconButton>
      )} */}
    </Card>
  );
};

export default BillingAddressCard;
