import { Card, styled, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import AppSelect from "components/AppSelect";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5 } from "components/Typography";
import { FC } from "react";
import Chart from "react-apexcharts";

// --------------------------------------------------------------------------
const chartSeries = [
  { name: "Leads", data: [10, 30, 85, 49, 55, 35, 60] },
  { name: "Customers", data: [50, 34, 45, 79, 35, 70, 120] },
];
const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

// --------------------------------------------------------------------------

const StyledChart = styled(Chart)(() => ({
  minHeight: "230px !important",
  "& .apexcharts-xaxistooltip": { display: "none !important" },
  "& .apexcharts-tooltip": { boxShadow: "none" },
}));

const LeadVSCustomer: FC = () => {
  const theme = useTheme();
  // chart options
  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      toolbar: { show: false },
      stacked: false,
    },
    colors: [theme.palette.primary.main, theme.palette.warning.main],
    dataLabels: { enabled: false },
    grid: { show: false },
    theme: { mode: theme.palette.mode },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      categories: chartCategories,
      labels: {
        style: {
          fontWeight: 500,
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    yaxis: {
      tickAmount: 3,
      max: 150,
      min: 0,
      labels: {
        style: {
          fontWeight: 500,
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    tooltip: {
      style: {
        fontFamily: theme.typography.fontFamily,
        fontSize: "13px",
      },
      x: { show: false },
      y: { formatter: (val: number) => `${val}` },
    },
    legend: {
      position: "top",
      fontWeight: 600,
      fontFamily: theme.typography.fontFamily,
      itemMargin: { horizontal: 15 },
    },
    stroke: { curve: "smooth" },
  };

  return (
    <Card sx={{ padding: 3, height: "100%" }}>
      <FlexBetween mb={2}>
        <H5>Leads VS Customers</H5>

        <AppSelect>
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </AppSelect>
      </FlexBetween>

      <StyledChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={230}
      />
    </Card>
  );
};

export default LeadVSCustomer;
