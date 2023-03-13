import FlexBox from "components/flexbox/FlexBox";
import { H6, Small } from "components/Typography";
import { FC } from "react";

// component props interface
interface TabLabelProps {
  title: string;
  total: number;
}

const TabLabel: FC<TabLabelProps> = ({ title, total }) => {
  return (
    <FlexBox alignItems="center" color="text.primary">
      <H6 fontSize={12}>{title}</H6>
      <Small
        sx={{
          backgroundColor: "divider",
          padding: "0px 10px",
          borderRadius: "10px",
          marginLeft: 1,
        }}
      >
        {total}
      </Small>
    </FlexBox>
  );
};

export default TabLabel;
