import {
  Avatar,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { H5, H6 } from "components/Typography";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import Edit from "icons/Edit";
import ShoppingCart from "icons/ShoppingCart";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./transactionBilling/ConfirmModal";
// ---------------------------------------------------------------------
type OrderSummeryProps = {
  buttonText: string;
  book: any;
  showCoupon?: boolean;
  showEditBtn?: boolean;
  handleClick?: () => void;
  onSubmitBook?: () => void;
};
// ---------------------------------------------------------------------

const OrderSummery: FC<OrderSummeryProps> = ({
  showCoupon,
  showEditBtn,
  buttonText,
  handleClick,
  book,
}) => {
  const [openModal, setOpenModal] = useState(false);
  // const { toast } = useContext(ToastContext);
  // const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Card sx={{ padding: 3, border: "2px solid black" }}>
      <FlexBetween mb={4}>
        <H5>Order Summery</H5>
        {showEditBtn && (
          <IconButton>
            <Edit sx={{ fontSize: 16, color: "text.disabled" }} />
          </IconButton>
        )}
      </FlexBetween>

      <Stack spacing={1.5} mb={4}>
        <ListItem title="Items" value={book[0]?.volumeInfo?.pageCount / 100} />
        <ListItem
          title="Fee 5%"
          value={((book[0]?.volumeInfo?.pageCount / 100) * 5) / 100}
        />
        <ListItem
          title="Sub Total"
          value={
            ((book[0]?.volumeInfo?.pageCount / 100) * 5) / 100 +
            book[0]?.volumeInfo?.pageCount / 100
          }
        />

        <Divider />
        <ListItem
          title="Total"
          value={
            ((book[0]?.volumeInfo?.pageCount / 100) * 5) / 100 +
            book[0]?.volumeInfo?.pageCount / 100
          }
          valueColor="error.main"
        />
      </Stack>

      {showCoupon && (
        <FlexBox alignItems="center" gap={1} mb={3}>
          <TextField
            color="grey"
            placeholder="Apply Coupon"
            size="small"
            fullWidth
          />
          <Button
            variant="contained"
            size="small"
            sx={{
              padding: 1,
              color: "black",
              background: "aqua",
              border: "2px solid black",
            }}
          >
            Apply
          </Button>
        </FlexBox>
      )}

      <Button
        variant="contained"
        startIcon={<ShoppingCart />}
        fullWidth
        onClick={() => {
          setOpenModal(!openModal);
        }}
        sx={{
          padding: 1,
          color: "black",
          background: "aqua",
          border: "2px solid black",
        }}
      >
        {buttonText}
      </Button>
      <ConfirmModal
        book={book}
        onDoneConfirm={async () => {}}
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
      />
      {/* <PasscodeModal onDonePasscode={(passcode: number[]) => { setPasscode(passcode) }} open={openModal} onClose={() => setOpenModal(!openModal)} /> */}
    </Card>
  );
};

export default OrderSummery;

// -----------------------------------------------------------------------------
type ListItemProps = { title: string; value: number; valueColor?: string };
// -----------------------------------------------------------------------------

function ListItem({ title, value, valueColor }: ListItemProps) {
  return (
    <FlexBetween>
      <H6 fontWeight={500}>{title}</H6>
      <H6 fontWeight={500} color={valueColor}>
        <Chip
          avatar={
            <Avatar
              sx={{ width: "10px", height: "10px" }}
              alt="Natacha"
              src="/static/crypto/solona_logo.png"
            />
          }
          label={value}
          variant="outlined"
          sx={{
            fontSize: "10px",
            border: "none",
            color: title === "Total" ? "red" : "",
          }}
        />
      </H6>
    </FlexBetween>
  );
}
