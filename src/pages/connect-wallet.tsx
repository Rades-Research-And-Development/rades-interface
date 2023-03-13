import { Box, Card, Grid } from "@mui/material";
import UserContext from "contexts/userContext";
import { FC, useContext, useEffect } from "react";
import Phantom from "./wallet/phantom";
// import { checkConnected } from "utils/contract/etherium/web3";
const ConnectWallet: FC = () => {
  // const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  // const [passcode, setPasscode] = useState<number[]>([]);
  // const [pharses, setPharses] = useState<string[]>([]);
  useEffect(() => {
    // checkConnected().then(res => {
    //   console.log(res)
    //   window.location.href = "/dashboards/marketplaces"
    // })

    });
  // const onDoneWallet = () => {
  //   setCookie("jwt", "6jqvbosAfbFfbiU3ahCW7MkeNyZkDPvFeEfWBAyKrDtG");
  //   setUser?.(
  //     USERS?.filter((data: any, _: number) => {
  //       return (
  //         data?.wallet_address ===
  //         "6jqvbosAfbFfbiU3ahCW7MkeNyZkDPvFeEfWBAyKrDtG"
  //       );
  //     })
  //   );
  //   window.location.href = "/dashboards/wallet";
  //   // console.log('asdf')
  // };
  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {/* <Card sx={{ padding: 3 }}>
            <Grid container spacing={1}>
              <Metamask />
            </Grid>
          </Card> */}

          <Card sx={{ padding: 3, marginTop: 3 }}>
            <Grid container spacing={1}>
              <Phantom />
            </Grid>
          </Card>

          {/* <Card sx={{ padding: 3, marginTop: 3 }}>
            <Grid container spacing={3}>
              <H3 paddingX={3} paddingY={2}>
                {"Create wallet"}
              </H3>
              <Grid item xs={7}>
                <Box py={1}>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ border: "2px solid black" }}
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    fullWidth
                  >
                    Enter your passcode{" "}
                  </Button>
                  <PasscodeModal
                    onDonePasscode={(passcode: number[]) => {
                      setPasscode(passcode);
                    }}
                    open={openModal}
                    onClose={() => setOpenModal(!openModal)}
                  />
                </Box>
                <Box py={1}>
                  <Button
                    onClick={() => setOpenModal2(true)}
                    disabled={passcode.length === 0 ? true : false}
                    size="small"
                    variant="outlined"
                    sx={{ border: "2px solid black" }}
                    fullWidth
                  >
                    Get your 12 pharses{" "}
                  </Button>
                  <PharsesModal
                    open={openModal2}
                    onClose={(pharses: string[]) => {
                      setOpenModal2(!openModal2);
                      setPharses(pharses);
                      console.log(pharses);
                    }}
                  />
                </Box>
                <Box py={1}>
                  <Button
                    onClick={() => setOpenModal3(true)}
                    disabled={pharses.length === 0 ? true : false}
                    size="small"
                    variant="outlined"
                    sx={{ border: "2px solid black" }}
                    fullWidth
                  >
                    Confirm your 12 pharses
                  </Button>
                  <PharsesConfirmModal
                    onDoneComfirmPharses={(data) => {
                      setOpenModal3(false);
                      onDoneWallet();
                    }}
                    open={openModal3}
                    onClose={() => setOpenModal3(!openModal3)}
                  />
                </Box>
              </Grid>
              <Grid item xs={5}>
                <img
                  alt=""
                  src="/static/illustration/payment-page.svg"
                  style={{ padding: 10, display: "block", marginLeft: "auto" }}
                />
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ padding: 3, marginTop: 3 }}>
            <Grid container spacing={1}>
              <ImportWallet onImportPharses={onDoneWallet} />
            </Grid>
          </Card> */}
        </Grid>
        {/* <Grid item lg={4} md={5} sm={5} xs={12}>
          <OrderSummery2 btnText="Order" />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default ConnectWallet;
