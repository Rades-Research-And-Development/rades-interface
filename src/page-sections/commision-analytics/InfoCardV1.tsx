import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Card } from "@mui/material";
import { alpha } from "@mui/system";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H3, Small } from "components/Typography";
import { FC } from "react";
import { useTranslation } from "react-i18next";

// component props interface
interface CardItemProps {
  title: string;
  amount: number | string;
  color: string;
  percentage: number;
  trend?: "up" | "down" | any;
}

const CardItem: FC<CardItemProps> = (props) => {
  const { title, color, percentage, amount, trend } = props;

  const { t } = useTranslation();

  return (
    <Card sx={{ padding: "1rem 1.5rem" }}>
      <Small color="text.secondary" mb={1} display="block" fontWeight={500}>
        {t(title)}
      </Small>

      <FlexBox flexDirection="column" alignItems="flex-start">
        <H3 fontSize={24} fontWeight={700} mb={2} color="grey.700">
          {amount}
        </H3>

        <FlexBox alignItems="center" gap={0.5}>
          <FlexRowAlign
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: alpha(color, 0.1),
            }}
          >
            {trend === "up" && <ArrowUpward sx={{ fontSize: 14, color }} />}
            {trend === "down" && <ArrowDownward sx={{ fontSize: 14, color }} />}
          </FlexRowAlign>
          <Small fontWeight={600} color={color}>
            +{percentage}%
          </Small>
        </FlexBox>
      </FlexBox>
    </Card>
  );
};

export default CardItem;
