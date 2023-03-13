import { Box, Button, Card, Divider, Grid, IconButton } from "@mui/material";
import AppRadio from "components/AppRadio";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import { H5, H6, Span, Tiny } from "components/Typography";
import ChevronLeft from "icons/ChevronLeft";
import Edit from "icons/Edit";
import Shopping from "icons/Shopping";
import Heading from "page-sections/marketplaces/Heading";
import Stepper from "page-sections/marketplaces/Stepper";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

const TransactionPayment: FC = () => {
  const navigate = useNavigate();
  const [selectPaymentMethod, setSelectPaymentMethod] = useState("paypal");

  const handleChangePaymentMethod = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectPaymentMethod(event.target.value);
  };

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Heading title="Checkout" Icon={Shopping} />
          <Box mt={3} maxWidth={700}>
            <Stepper stepNo={2} />
          </Box>
        </Grid>

        <Grid item md={8} xs={12}>
          <Card sx={{ padding: 3 }}>
            <H5 mb={3}>Payment Method</H5>

            <FlexBox alignItems="center">
              <AppRadio
                value="paypal"
                onChange={handleChangePaymentMethod}
                checked={selectPaymentMethod === "paypal"}
                sx={{ paddingLeft: 0 }}
              />
              <img src="/static/payment/paypal-text.svg" alt="Paypal" />
            </FlexBox>

            <Divider sx={{ my: 2 }} />

            <FlexBox alignItems="center">
              <AppRadio
                value="card"
                sx={{ paddingLeft: 0 }}
                onChange={handleChangePaymentMethod}
                checked={selectPaymentMethod === "card"}
              />

              <FlexBetween flexGrow={1}>
                <H6 fontSize={12}>Credit or debit card</H6>
                <FlexBox gap={1}>
                  <img src="/static/payment/Visa.svg" alt="Paypal" />
                  <img src="/static/payment/MasterCard.svg" alt="Paypal" />
                  <img src="/static/payment/AmericanExpress.svg" alt="Paypal" />
                </FlexBox>
              </FlexBetween>
            </FlexBox>

            <Box mt={2} mb={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <AppTextField label="Card Number" fullWidth />
                </Grid>

                <Grid item md={6} xs={12}>
                  <AppTextField label="Exp Date" fullWidth />
                </Grid>

                <Grid item md={6} xs={12}>
                  <AppTextField label="CVC" fullWidth />
                </Grid>
              </Grid>
            </Box>

            <Divider sx={{ my: 2 }} />

            <FlexBox alignItems="center">
              <AppRadio
                value="cash"
                sx={{ paddingLeft: 0 }}
                onChange={handleChangePaymentMethod}
                checked={selectPaymentMethod === "cash"}
              />
              <H6 fontSize={12}>Cash on Delivery</H6>
            </FlexBox>
          </Card>

          <Box mt={2}>
            <Button
              disableRipple
              startIcon={<ChevronLeft />}
              onClick={() => navigate("/dashboards/billing-address")}
            >
              Back
            </Button>
          </Box>
        </Grid>

        <Grid item md={4} xs={12}>
          <Card sx={{ padding: 3, mb: 3 }}>
            <FlexBetween mb={1.5}>
              <H5>Billing Address</H5>

              <IconButton>
                <Edit sx={{ fontSize: 16, color: "text.disabled" }} />
              </IconButton>
            </FlexBetween>

            <H6 mb={0.5}>
              Office UI lib{" "}
              <Span fontWeight={500} color="text.disabled">
                (Home)
              </Span>
            </H6>
            <Tiny lineHeight={1.8}>
              Ap #285-7193 Ullamcorper Avenue <br /> Amesbury HI 93373 <br /> US
            </Tiny>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionPayment;
