import { Box } from "@mui/system";
import { H6, Paragraph } from "components/Typography";
import React, { FC, useEffect } from "react";
interface DescriptionCardProps {
  book: any;
}
const DescriptionCard: FC<DescriptionCardProps> = ({ book }) => {
  return (
    <Box padding={3}>
      <H6 mb={1}>Specification:</H6>
      <Paragraph fontSize={12} mb={5}>
        {book[0]?.volumeInfo?.description}
      </Paragraph>

      <H6 mb={1}>More infomation:</H6>
      <Paragraph fontSize={12}>
        Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65%
        polyester,35% cotton. Insole: 100% polyurethane. Sole: 100%
        thermoplastic. Fixing sole: 100% glued
      </Paragraph>
    </Box>
  );
};

export default DescriptionCard;
