import { AttachMoney, Autorenew } from "@mui/icons-material";
import { Box, Grid, useTheme } from "@mui/material";
import EarningIcon from "icons/EarningIcon";
import PeopleIcon from "icons/PeopleIcon";
import LeadVSCustomer from "page-sections/commision-analytics/LeadVSCustomer";
import Activity from "page-sections/commision-analytics/Activity";
import EarningReport from "page-sections/commision-analytics/EarningReport";
import CardItem from "page-sections/commision-analytics/InfoCardV1";
import { FC } from "react";

const CommisionAnalytics: FC = () => {
  const theme = useTheme();

  const cardList = [
    {
      trend: "up",
      title: "Revenue",
      amount: "$35,800",
      Icon: EarningIcon,
      percentage: 10.23,
      color: theme.palette.success.main,
    },
    {
      trend: "up",
      Icon: Autorenew,
      amount: "$12,900",
      percentage: 20.4,
      title: "Repeat Purchase",
      color: theme.palette.success.main,
    },
    {
      trend: "down",
      amount: "$1,000",
      Icon: AttachMoney,
      percentage: 10.23,
      title: "Average Order value",
      color: theme.palette.primary.red,
    },
    {
      amount: 143,
      trend: "down",
      Icon: PeopleIcon,
      percentage: 10.23,
      title: "New Customers",
      color: theme.palette.primary.red,
    },
  ];

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Box width="100%" height="100%">
            <Grid container spacing={3}>
              {cardList.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={3} lg={6}>
                  <CardItem
                    title={item.title}
                    amount={item.amount}
                    color={item.color ? item.color : ""}
                    percentage={item.percentage}
                    trend={item.trend}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <EarningReport />
        </Grid>

        <Grid item lg={8} md={7} xs={12}>
          <LeadVSCustomer />
        </Grid>

        <Grid item lg={4} md={5} xs={12}>
          <Activity />
        </Grid>

        {/* <Grid item lg={8} md={7} xs={12}>
          <PopularProducts />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <RecentOrders />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default CommisionAnalytics;
