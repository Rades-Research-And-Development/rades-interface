import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Rating,
  styled,
} from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, Tiny } from "components/Typography";
import { FC, Fragment, SyntheticEvent, useState } from "react";

// styled component
const MuiAccordion = styled(Accordion)(() => ({
  marginTop: 10,
  "&:not(:last-child)": { borderBottom: 0 },
  "&:before": { display: "none" },
  "&.Mui-expanded": { margin: 0, marginTop: 10 },
}));

const ModalAccordion: FC = () => {
  const [expanded, setExpanded] = useState<string | false>("panel2");

  const handleExpand =
    (panel: string) => (e: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Fragment>
      <MuiAccordion
        square
        disableGutters
        elevation={0}
        expanded={expanded === "panel1"}
        onChange={handleExpand("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMore color="disabled" />}>
          <H5>Description</H5>
        </AccordionSummary>
        <Tiny fontWeight={500} lineHeight={1.7} display="block">
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </Tiny>
      </MuiAccordion>

      <MuiAccordion
        expanded={expanded === "panel2"}
        onChange={handleExpand("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMore color="disabled" />}>
          <H5>Reviews (12)</H5>
        </AccordionSummary>
        <Box paddingTop={1}>
          <FlexBetween>
            <FlexBox alignItems="center">
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "error.main",
                  marginRight: 1,
                }}
              >
                <img src="/static/avatar/001-man.svg" width="100%" alt="" />
              </Box>
              <Tiny
                fontWeight={500}
                lineHeight={1.7}
                marginTop={1.5}
                display="block"
              >
                Tom Cruise
              </Tiny>
            </FlexBox>

            <Rating name="read-only" size="small" value={5} readOnly />
          </FlexBetween>

          <Tiny
            fontWeight={500}
            lineHeight={1.7}
            marginTop={1.5}
            display="block"
          >
            The shoe body is hard and needs to adapt to each other for a period
            of time. I like it very much, I have to go a long way with it
          </Tiny>
        </Box>
      </MuiAccordion>
    </Fragment>
  );
};
export default ModalAccordion;
