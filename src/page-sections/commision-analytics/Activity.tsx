import { Card, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import { H5 } from "components/Typography";
import { FC } from "react";
import Chart from "react-apexcharts";

const Activity: FC = () => {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.grey[400],
    ],
    chart: {
      stacked: false,
      background: "transparent",
      sparkline: { enabled: true },
      fontFamily: theme.typography.fontFamily,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Avg Range",
              fontSize: "14px",
              fontWeight: 500,
              color: theme.palette.text.disabled,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
              },
            },
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: 600,
              formatter: (val) => val,
            },
          },
        },
      },
    },
    states: {
      normal: { filter: { type: "none" } },
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },
    labels: ["Transactions", "Payouts", "Sales", "Reports"],
    theme: { mode: theme.palette.mode },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "13px",
      fontWeight: 500,
      itemMargin: { horizontal: 20, vertical: 5 },
      onItemClick: { toggleDataSeries: false },
      onItemHover: { highlightDataSeries: false },
    },
    tooltip: { style: { fontSize: "13px" } },
    stroke: { width: 0 },
  };

  return (
    <Card sx={{ padding: 3, height: "100%" }}>
      <H5 mb={3} textAlign="center">
        Project Status
      </H5>

      <Chart
        height={320}
        type="donut"
        options={chartOptions}
        series={[50, 30, 20, 40]}
      />
    </Card>
  );
};

export default Activity;
