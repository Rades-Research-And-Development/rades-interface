import { Box, Button, Card, Divider } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H3, H5 } from "components/Typography";
import { FC } from "react";
import { useTranslation } from "react-i18next";

// component props interface
interface OrderSummeryProps {
  btnText?: string;
  subtotal?: number;
  discount?: number;
  shoppingCost?: number;
  total?: number;
}

const OrderSummery2: FC<OrderSummeryProps> = ({ btnText }) => {
  const { t } = useTranslation();

  return (
    <Card>
      <H3 paddingX={3} paddingY={2}>
        {t("Order Summery")}
      </H3>

      <Box paddingX={3}>
        <FlexBetween my={2.5}>
          <H5>{t("Subtotal")}</H5>
          <H5>$215</H5>
        </FlexBetween>

        <FlexBetween my={2.5}>
          <H5>{t("Discount")}</H5>
          <H5>15%</H5>
        </FlexBetween>

        <FlexBetween my={2.5}>
          <H5>{t("Shipping Cost")}</H5>
          <H5>$50</H5>
        </FlexBetween>
      </Box>

      <Divider />

      <Box paddingX={3}>
        <FlexBetween my={2}>
          <H3>{t("Total")}</H3>
          <H3 color="primary.main">$285</H3>
        </FlexBetween>

        <Button variant="contained" fullWidth>
          {btnText || "Proceed to payment"}
        </Button>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: 5, padding: 0 }}>
        <img src="/static/illustration/cart-page.svg" alt="" />
      </Box>
    </Card>
  );
};

export default OrderSummery2;
