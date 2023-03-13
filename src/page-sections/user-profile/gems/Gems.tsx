import {
  Badge,
  Button,
  Card,
  Stack,
  styled,
  SvgIconProps,
} from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { H6, Tiny } from "components/Typography";
import UserContext from "contexts/userContext";
import AddCircleOutlined from "icons/AddCircleOutlined";
import CheckMarkCircleOutlined from "icons/CheckMarkCircleOutlined";
import numeral from "numeral";
import { FC, useContext } from "react";

// styled components

const StyledButton = styled(Button)<{ colored?: string }>(
  ({ theme, colored }) => {
    const bgColor = colored ? "aquamarine" : "transparent";

    return {
      padding: 8,
      marginTop: 16,
      backgroundColor: bgColor,
      transition: "all 0.3s ease-in-out",
      border: "2px solid black",
      color: "black",
      "&:hover": { backgroundColor: bgColor },
    };
  }
);

// -------------------------------------------------
type GemsProps = {
  item: {
    img: string;
    name: string;
    position: string;
    connected: boolean;
  };
};
// -------------------------------------------------

const Gems: FC<GemsProps> = ({ item }) => {
  const { user } = useContext(UserContext);
  return (
    <Card
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid black",
      }}
    >
      <Badge
        variant="dot"
        color="success"
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <AppAvatar src={"/static/nfts/gem.gif"} />
      </Badge>

      <H6 mt={1.5}>{user?.name}</H6>
      <Tiny fontSize={10} fontWeight={500}>
        {"Books, Gems"}
      </Tiny>

      <Stack width="100%" maxWidth="80%">
        {/* <FlexBetween>
          <AmountCard Icon={DollarOutlined} title="Avg Income" amount={14500} />
          <AmountCard Icon={ChartBar4} title="Avg Income" amount={26500} />
        </FlexBetween> */}

        <StyledButton
          variant="outlined"
          fullWidth
          colored={item.connected ? "active" : ""}
          startIcon={
            item.connected ? <CheckMarkCircleOutlined /> : <AddCircleOutlined />
          }
        >
          {item.connected ? "Used" : "Use"}
        </StyledButton>
      </Stack>
    </Card>
  );
};

export default Gems;

// ---------------------------------------------------------
type AmountCardProps = {
  Icon: (props: SvgIconProps) => JSX.Element;
  amount: number;
  title: string;
};
// ---------------------------------------------------------

function AmountCard({ Icon, amount, title }: AmountCardProps) {
  return (
    <Stack
      mt={2}
      alignItems="center"
      sx={{
        padding: 2,
        width: "47%",
        border: "1px solid black",
        borderColor: "divider",
        borderRadius: 1,
      }}
    >
      <Icon sx={{ color: "text.disabled" }} />
      <H6 mt={0.5}>${numeral(amount).format("0,0")}</H6>
      <Tiny fontSize={10} fontWeight={500}>
        {title}
      </Tiny>
    </Stack>
  );
}
