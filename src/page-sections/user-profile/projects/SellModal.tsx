import {
  Avatar,
  Button,
  Chip,
  Grid,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import AppModal from "components/AppModal";
import { H2, H4, Tiny } from "components/Typography";
import FlexBox from "components/flexbox/FlexBox";
import ToastContext from "contexts/toastContext";
import {
  CarouselProvider,
  Dot,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel";
import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// component props interface

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
interface ModalProps {
  data?: any;
  open: boolean;
  edit?: boolean;
  book: any;
  onClose: () => void;
  onDoneConfirm: () => void;
}
const SellModal: FC<ModalProps> = ({
  open,
  onClose,
  edit,
  data,
  onDoneConfirm,
  book,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const { toast } = useContext(ToastContext);
  // const { id } = useParams()
  // const [book, setBook] = useState(getBook(id))
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState<number[]>(
    Array.from(Array(6)).map(() => -1)
  );
  const [confirmPasscode, setConfirmPasscode] = useState<number[]>(
    Array.from(Array(6)).map(() => -2)
  );
  const [passcodeIndex, setPasscodeIndex] = useState<number>(0);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

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
          <H4 style={{ border: "none" }}>Sell cost:</H4>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ border: "1px solid black", padding: 0.5, borderRadius: "5px" }}
        >
          <Grid container>
            <Grid item xs={8}>
              <TextField fullWidth type="number" />
            </Grid>
            <Grid item xs={4}>
              <Chip
                avatar={
                  <Avatar
                    sx={{ width: "40px", height: "40px" }}
                    alt="Natacha"
                    src="/static/crypto/solona_logo.png"
                  />
                }
                // label={(book[0]?.volumeInfo?.pageCount / 100 * 105 / 100)?.toFixed(2)}
                variant="outlined"
                sx={{
                  fontSize: "25px",
                  width: "100%",
                  border: "none",
                  marginTop: "0.5rem",
                  marginLeft: "0.5rem",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "right" }}>
          <Tiny> {"Fee marketplace: 5%"}</Tiny>
        </Grid>
      </Grid>

      <FlexBox justifyContent="flex-end" gap={2} marginTop={4}>
        <Button
          sx={styledButton}
          fullWidth
          size="small"
          variant="outlined"
          onClick={() => {
            toast.success("Sell on marketplace successfully");
            // navigate('/dashboards/user-profile/2')
            onClose();
            onDoneConfirm();
          }}
          style={{ background: "aqua", color: "black" }}
        >
          SELL
        </Button>
      </FlexBox>

      {/* </form> */}
    </StyledAppModal>
  );
};

export default SellModal;
