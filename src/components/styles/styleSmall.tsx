import styled from "@emotion/styled";
import { Small } from "components/Typography";

export const StyledSmall = styled(Small)(({ theme }) => ({
  padding: "3px 12px",
  borderRadius: "4px",
  display: "inline-block",
  fontSize: 12,
  backgroundColor: (theme as any).palette.action.hover,
  color: (theme as any).palette.text.secondary,
}));
