import { Avatar, Button, Chip, Grid, Stack, styled } from "@mui/material";
import AppModal from "components/AppModal";
import { H2, H4 } from "components/Typography";
import FlexBox from "components/flexbox/FlexBox";
import ToastContext from "contexts/toastContext";
import UserContext from "contexts/userContext";
import { setCookie } from "utils/cookies/cookies";
import {
  CarouselProvider,
  Dot,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel";
import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { transactionToOwner } from "utils/contract/solana/useTransaction";
// import { walletGetSolBalance } from "utils/contract/solana/useUtilsWallet";
// component props interface
interface ModalProps {
  data?: any;
  open: boolean;
  edit?: boolean;
  book: any;
  onClose: () => void;
  onDoneConfirm: () => void;
}

// styled components
const StyledAppModal = styled(AppModal)(({ theme }) => ({
  maxWidth: 340,
  minWidth: 200,
  borderRadius: 10,
  border: "3px solid black",
  [theme.breakpoints.down(325)]: { maxWidth: "100%" },
}));
const styledButton = {
  borderRadius: 5,
  border: "2px solid black",
  fontSize: "15px",
};

const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    flexDirection: "row",
    "& .carousel__dot": { marginTop: 0, marginRight: 8 },
  },
}));
const StyledCarouselProvider = styled(CarouselProvider)(({ theme }) => ({
  display: "flex",
  position: "relative",
  "& .carousel__slider": { flexGrow: 1, marginLeft: 10 },
  "& .carousel__slide-focus-ring": { display: "none" },
  "& button": { border: "none !important", opacity: 0.7 },
  "& button:disabled": {
    opacity: 1,
    position: "relative",
    "&::after": {
      left: 0,
      height: 3,
      content: '""',
      width: "100%",
      borderRadius: 3,
      position: "absolute",
      backgroundColor: theme.palette.primary.main,
    },
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    "& .carousel__slider": { marginLeft: 0 },
  },
}));

const ConfirmModal: FC<ModalProps> = ({
  open,
  onClose,
  edit,
  data,
  onDoneConfirm,
  book,
}) => {
  const { user } = useContext(UserContext);
  const { toast } = useContext(ToastContext);
  const navigate = useNavigate();

  return (
    <StyledAppModal open={open} handleClose={onClose}>
      <H2 mb={2}>{"BUY"}</H2>

      {/* <form onSubmit={handleSubmit}> */}
      {/* <Scrollbar style={{ maxHeight: 400 }}> */}

      {/* </Scrollbar> */}
      <StyledCarouselProvider
        totalSlides={2}
        dragEnabled={false}
        naturalSlideWidth={90}
        naturalSlideHeight={90}
      >
        <StyledStack spacing={1}>
          {[book[0]?.volumeInfo?.imageLinks?.thumbnail, book?.avatar_nft].map(
            (item, _: number) => (
              <Dot slide={_} key={_} style={{ width: 60, height: 55 }}>
                <Image
                  hasMasterSpinner={true}
                  src={item}
                  style={{
                    objectFit: "cover",
                    border: "2px solid black black",
                    borderRadius: "5px",
                  }}
                />
              </Dot>
            )
          )}
        </StyledStack>

        <Slider>
          {[book[0]?.volumeInfo?.imageLinks?.thumbnail, book?.avatar_nft].map(
            (item, _: number) => (
              <Slide index={_} key={_}>
                <Image
                  hasMasterSpinner={true}
                  src={item}
                  style={{
                    objectFit: "cover",
                    border: "3px solid black black",
                    borderRadius: "10px",
                  }}
                />
              </Slide>
            )
          )}
        </Slider>
      </StyledCarouselProvider>
      <Grid container mt={1} alignItems="center">
        <Grid item xs={6} sx={{ textAlign: "left" }}>
          <H4 style={{ border: "none" }}>Cost:</H4>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ border: "1px solid black", padding: 0.5, borderRadius: "5px" }}
        >
          <Chip
            avatar={
              <Avatar
                sx={{ width: "40px", height: "40px" }}
                alt="Natacha"
                src="/static/crypto/ETH.png"
              />
            }
            label={(
              ((book[0]?.volumeInfo?.pageCount / 100) * 105) /
              100
            )?.toFixed(2)}
            variant="outlined"
            sx={{ fontSize: "25px", width: "100%", border: "none" }}
          />
        </Grid>
      </Grid>

      <FlexBox justifyContent="flex-end" gap={2} marginTop={4}>
        <Button
          sx={styledButton}
          fullWidth
          size="small"
          variant="outlined"
          onClick={() => {
            navigate("/dashboards/transaction-complete");
          }}
          // onClick={async () => {
          //   const cost = (
          //     ((book[0]?.volumeInfo?.pageCount / 100) * 5) / 100 +
          //     book[0]?.volumeInfo?.pageCount / 100
          //   ).toFixed(3);
          //   await toast.promise(
          //     transactionToOwner(user?.wallet_address, cost).then(
          //       async (res_) => {
          //         await walletGetSolBalance(user?.wallet_address).then(
          //           async (res) => {
          //             await toast.success("Transfer successfully! - " + res_);
          //             setCookie("unread", book[0]?.id);
          //             setCookie("transaction_book", res_);
          //           }
          //         );
          //       }
          //     ),
          //     {
          //       loading: "Transaction in progress...",
          //       error: <b>Could not save.</b>,
          //     }
          //   );
          //   navigate("/dashboards/transaction-complete");
          //   // toast.success('Successful transaction')
          //   // setCookie('unread', book[0]?.id)
          //   // await onDoneConfirm()
          // }}
          style={{
            padding: 1,
            background: "black",
            border: "2px solid #27CE88",
            borderRadius: "20px",
          }}
        >
          CONFIRM
        </Button>
      </FlexBox>
      {/* </form> */}
    </StyledAppModal>
  );
};

export default ConfirmModal;
