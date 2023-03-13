import {
  Badge,
  Button,
  Card,
  Stack,
  styled,
  SvgIconProps,
} from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import { H6, Tiny } from "components/Typography";
import AddCircleOutlined from "icons/AddCircleOutlined";
import ChartBar4 from "icons/ChartBar4";
import CheckMarkCircleOutlined from "icons/CheckMarkCircleOutlined";
import DollarOutlined from "icons/DollarOutlined";
import numeral from "numeral";
import { FC } from "react";

// styled components
const StyledButton = styled(Button)<{ colored?: string }>(
  ({ theme, colored }) => {
    const bgColor = colored ? theme.palette.divider : "transparent";

    return {
      padding: 8,
      marginTop: 16,
      backgroundColor: bgColor,
      transition: "all 0.3s ease-in-out",
      color:
        colored === "active"
          ? theme.palette.primary.main
          : theme.palette.text.primary,
      "&:hover": { backgroundColor: bgColor },
    };
  }
);

// -------------------------------------------------
type ConnectionCardProps = {
  item: {
    img: string;
    name: string;
    position: string;
    connected: boolean;
  };
};
// -------------------------------------------------

const ConnectionCard: FC<ConnectionCardProps> = ({ item }) => {
  return (
    <Card
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Badge
        variant="dot"
        color="success"
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <AppAvatar src={item.img} />
      </Badge>

      <H6 mt={1.5}>{item.name}</H6>
      <Tiny fontSize={10} fontWeight={500}>
        {item.position}
      </Tiny>

      <Stack width="100%" maxWidth="80%">
        <FlexBetween>
          <AmountCard Icon={DollarOutlined} title="Avg Income" amount={14500} />
          <AmountCard Icon={ChartBar4} title="Avg Income" amount={26500} />
        </FlexBetween>

        <StyledButton
          variant="outlined"
          fullWidth
          colored={item.connected ? "active" : ""}
          startIcon={
            item.connected ? <CheckMarkCircleOutlined /> : <AddCircleOutlined />
          }
        >
          {item.connected ? "Connected" : "Connect"}
        </StyledButton>
      </Stack>
    </Card>
  );
};

export default ConnectionCard;

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
