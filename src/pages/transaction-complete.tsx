import {
  Button,
  Card,
  Divider,
  Stack,
  Theme,
  useMediaQuery,
} from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H2, H5, Paragraph } from "components/Typography";
import ChevronLeft from "icons/ChevronLeft";
import DownloadTo from "icons/DownloadTo";
import { FC } from "react";
import { useNavigate } from "react-router";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { getCookie } from "utils/cookies/cookies";
import useGeneralWallet from "common/useGeneralWallet";
import { usernameOptimize } from "utils/usernameOptimize";
const TransactionComplete: FC = () => {
  const down500 = useMediaQuery((theme: Theme) => theme.breakpoints.down(512));
  const navigate = useNavigate();
  const user = useGeneralWallet((s) => s);
  return (
    <Card
      sx={{
        padding: 4,
        minHeight: 600,
        marginTop: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid black",
      }}
    >
      <Stack maxWidth={400} spacing={2} textAlign="center">
        <img
          src="/static/illustration/payment-complete.svg"
          width="100%"
          alt="Payment Complete"
        />
        <H2>Thanks for placing order 🎉</H2>
        <H5 style={{ width: "100%" }}>
          Transaction:{" "}
          <a
            target="_blank"
            href={`https://solscan.io/tx/${
              getCookie("transaction_book") ||
              "0x5b950af4a0754dcd054da3ae0bc09ec54dbb98201cbfe98ae9325084d90139ea"
            }?cluster=devnet`}
            rel="noreferrer"
          >
            {getCookie("transaction_book")?.slice(0, 15) ||
              usernameOptimize(
                "0x5b950af4a0754dcd054da3ae0bc09ec54dbb98201cbfe98ae9325084d90139ea"
              )}
          </a>
        </H5>
        <Paragraph>
          Your NFT content will in your wallet <br /> let view your NFT now
        </Paragraph>
        <Divider />
        <FlexBox gap={2} flexWrap="wrap">
          <Button
            fullWidth={down500}
            variant="GreyOutlined"
            startIcon={<ChevronLeft />}
            onClick={() => navigate("/dashboards/marketplaces")}
            sx={{ border: "2px solid black black" }}
          >
            Continue Shopping
          </Button>

          <Button
            color="success"
            variant="contained"
            fullWidth={down500}
            sx={{ color: "black !important", border: "2px solid black black" }}
            style={{ color: "black !important" }}
            startIcon={<LibraryBooksIcon />}
            onClick={() => {
              navigate("/dashboards/user-profile/wallet");
            }}
          >
            Enjoy the moment with us
          </Button>
        </FlexBox>
      </Stack>
    </Card>
  );
};

export default TransactionComplete;
