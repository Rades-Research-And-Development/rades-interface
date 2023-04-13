import {
  Button,
  Card,
  Divider,
  Grid,
  RadioGroup,
  Stack,
  styled,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/system";
import AppCheckBox from "components/AppCheckBox";
import AppModal from "components/AppModal";
import AppRadio from "components/AppRadio";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import { H5, H6, Small } from "components/Typography";
import Add from "icons/Add";
import ChevronLeft from "icons/ChevronLeft";
import Shopping from "icons/Shopping";
import BillingAddressCard from "page-sections/marketplaces/BillingAddressCard";
import Heading from "page-sections/marketplaces/Heading";
import OrderSummery from "page-sections/marketplaces/OrderSummery";
import Stepper from "page-sections/marketplaces/Stepper";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBook } from "__fakeData__/books/books";

//  styled components
const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  "& .MuiTypography-root": { fontSize: 12, fontWeight: 600 },
}));

const TransactionBilling: FC = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("home");
  const { id } = useParams();
  const [book, setBook] = useState(getBook(id));

  useEffect(() => {
    setBook(getBook(id));
  }, [setBook, id]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Heading title="Checkout" Icon={Shopping} />
          <Box mt={3} maxWidth={700}>
            <Stepper stepNo={1} />
          </Box>
          <Grid item md={12} xs={12}>
            <Card sx={{ padding: 3 }}>
              <H5 mb={3}>Payment Method</H5>

              <FlexBox alignItems="center">
                <AppRadio
                  value="paypal"
                  // onChange={handleChangePaymentMethod}
                  // checked={selectPaymentMethod === "paypal"}
                  sx={{ paddingLeft: 0 }}
                />
                <img src="/static/payment/paypal-text.svg" alt="Paypal" />
              </FlexBox>

              <Divider sx={{ my: 2 }} />

              <FlexBox alignItems="center">
                <AppRadio
                  value="card"
                  sx={{ paddingLeft: 0 }}
                  // onChange={handleChangePaymentMethod}
                  // checked={selectPaymentMethod === "card"}
                />

                <FlexBetween flexGrow={1}>
                  <H6 fontSize={12}>Credit or debit card</H6>
                  <FlexBox gap={1}>
                    <img src="/static/payment/Visa.svg" alt="Paypal" />
                    <img src="/static/payment/MasterCard.svg" alt="Paypal" />
                    <img
                      src="/static/payment/AmericanExpress.svg"
                      alt="Paypal"
                    />
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
                  // onChange={handleChangePaymentMethod}
                  // checked={selectPaymentMethod === "cash"}
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
        </Grid>

        <Grid item md={6} xs={12}>
          <FlexBetween flexWrap="wrap" gap={1.5} mb={3}>
            <H5>Billing & address</H5>
            <Button
              startIcon={<Add />}
              onClick={() => setOpenModal(true)}
              sx={{
                padding: 1,
                background: "black",
                border: "2px solid #27CE88",
                borderRadius: "20px",
              }}
            >
              Add New Wallet
            </Button>
          </FlexBetween>

          <AppModal open={openModal} handleClose={() => setOpenModal(false)}>
            <H5>Add new address</H5>

            <Box py={2}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <RadioGroup row value={selectedValue} onChange={handleChange}>
                    <StyledFormControlLabel
                      value="home"
                      control={<AppRadio />}
                      label="Home"
                    />
                    <StyledFormControlLabel
                      value="office"
                      control={<AppRadio />}
                      label="Office"
                    />
                  </RadioGroup>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField fullWidth size="small" label="Full Name" />
                </Grid>

                {/* <Grid item sm={6} xs={12}>
                  <AppTextField fullWidth size="small" label="Phone" />
                </Grid> */}

                <Grid item xs={12}>
                  <AppTextField fullWidth size="small" label="Wallet address" />
                </Grid>
                {/* 
                <Grid item sm={6} xs={12}>
                  <AppTextField fullWidth size="small" label="City" />
                </Grid> */}

                <Grid item sm={6} xs={12}>
                  <AppTextField fullWidth size="small" label="Country" />
                </Grid>

                <Grid item xs={12}>
                  <FlexBox alignItems="center" gap={1}>
                    <AppCheckBox />
                    <Small fontSize={12}>Use this address as default</Small>
                  </FlexBox>
                </Grid>
              </Grid>
            </Box>

            <FlexBox alignItems="center" justifyContent="end" gap={1} mt={1}>
              <Button
                variant="GreyOutlined"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
              <Button variant="contained">Deliver to this address</Button>
            </FlexBox>
          </AppModal>

          <Stack gap={2}>
            <BillingAddressCard selected />
          </Stack>

          <Box mt={2}>
            <Button
              disableRipple
              startIcon={<ChevronLeft />}
              onClick={() => navigate("/dashboards/checkout")}
            >
              Back
            </Button>
          </Box>
          <OrderSummery
            buttonText="Payment"
            book={book}
            handleClick={() => console.log("Payment")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionBilling;
