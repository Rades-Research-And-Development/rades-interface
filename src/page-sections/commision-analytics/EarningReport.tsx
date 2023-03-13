import {
  Box,
  Card,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import { ApexOptions } from "apexcharts";
import FlexBox from "components/flexbox/FlexBox";
import { H5 } from "components/Typography";
import numeral from "numeral";
import { FC, useState } from "react";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const chartData = [
  {
    title: "Month",
    data: [
      {
        name: "Earning",
        data: [
          15000, 4500, 12000, 5000, 7500, 13000, 3000, 12000, 7500, 10000, 5500,
          15000,
        ],
      },
    ],
  },
  {
    title: "Week",
    data: [
      {
        name: "Earning",
        data: [
          10000, 4500, 14000, 6000, 7500, 13000, 7000, 12000, 11500, 10000,
          5500, 11000,
        ],
      },
    ],
  },
  {
    title: "Day",
    data: [
      {
        name: "Earning",
        data: [
          15000, 4500, 15000, 5000, 9500, 13000, 3000, 12000, 10500, 10000,
          5500, 11000,
        ],
      },
    ],
  },
];

const chartCategories = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const EarningReport: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [seriesData, setSeriesData] = useState("Month");

  const handleChangeSeriesData = (event: SelectChangeEvent) => {
    setSeriesData(event.target.value);
  };
  // filter chart data basis on select option
  const chartSeries = chartData.find((item) => item.title === seriesData)?.data;

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      toolbar: { show: false },
    },
    colors: [theme.palette.primary.main],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    states: {
      active: {
        filter: { type: "none" },
      },
      hover: {
        filter: { type: "none" },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      categories: chartCategories,
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontFamily: theme.typography.fontFamily,
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 15000,
      tickAmount: 4,
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontFamily: theme.typography.fontFamily,
          fontWeight: 500,
        },
        formatter: (value) => numeral(value).format("0a"),
      },
    },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (val: number) => `$${val}`,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "30%",
      },
    },
    responsive: [
      {
        breakpoint: 550,
        options: {
          chart: {
            height: 350,
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          xaxis: {
            min: 0,
            max: 15000,
            tickAmount: 4,
            labels: {
              show: true,
              style: {
                colors: theme.palette.text.secondary,
                fontFamily: theme.typography.fontFamily,
                fontWeight: 500,
              },
              formatter: (value: number) => numeral(value).format("0a"),
            },
          },
          yaxis: {
            show: true,
            labels: {
              style: {
                colors: theme.palette.text.secondary,
                fontFamily: theme.typography.fontFamily,
                fontWeight: 500,
              },
            },
          },
        },
      },
    ],
  };

  return (
    <Card
      sx={{
        height: "100%",
        paddingTop: "1.5rem",
        [theme.breakpoints.down(425)]: { padding: "1.5rem" },
      }}
    >
      <FlexBox justifyContent="space-between" alignItems="center" mx={2}>
        <H5>{t("Earnings Report")}</H5>

        <Select
          value={seriesData}
          onChange={handleChangeSeriesData}
          sx={{
            fontSize: 13,
            fontWeight: 500,
            color: "text.secondary",
            "& fieldset": { border: "0 !important" },
            "& .MuiSvgIcon-root": { right: 0 },
            "& .MuiOutlinedInput-input.MuiInputBase-input": {
              paddingRight: 1,
              padding: "0 5px",
            },
          }}
        >
          <MenuItem value="Month">Month</MenuItem>
          <MenuItem value="Week">Week</MenuItem>
          <MenuItem value="Day">Day</MenuItem>
        </Select>
      </FlexBox>

      <Box
        sx={{
          "& .apexcharts-tooltip *": {
            fontWeight: 500,
            fontFamily: theme.typography.fontFamily,
          },
          "& .apexcharts-tooltip": {
            boxShadow: 0,
            borderRadius: 4,
            alignItems: "center",
            "& .apexcharts-tooltip-text-y-value": { color: "primary.main" },
            "& .apexcharts-tooltip.apexcharts-theme-light": {
              border: `1px solid black ${theme.palette.divider}`,
            },
            "& .apexcharts-tooltip-series-group:last-child": {
              paddingBottom: 0,
            },
          },
        }}
      >
        <Chart
          type="bar"
          height={230}
          options={chartOptions}
          series={chartSeries}
        />
      </Box>
    </Card>
  );
};

export default EarningReport;
