import { Step, StepConnector, StepLabel, styled } from "@mui/material";
import stepConnectorClasses from "@mui/material/StepConnector/stepConnectorClasses";
import MuiStepper from "@mui/material/Stepper";
import React, { FC, useEffect, useState } from "react";

// styled components
const StyledStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 6,
    zIndex: -1,
    left: "calc(-50% + 5px)",
    right: "calc(50% + 5px)",
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    border: `1px solid black ${theme.palette.grey[300]}`,
  },
}));

const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiSvgIcon-root": { fontSize: 14 },
  "& .MuiStepIcon-text": { display: "none" },
  "& .MuiStepLabel-iconContainer": { padding: 0 },
  "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 600,
    color: theme.palette.text.disabled,
  },
  "& .MuiStepLabel-label.Mui-completed": { color: theme.palette.primary.main },
}));

const STEPS = ["Cart", "Billing & address", "Payment"];

// ----------------------------------------------------------------
type StepperProps = { stepNo?: number };
// ----------------------------------------------------------------

const Stepper: FC<StepperProps> = ({ stepNo }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (stepNo) {
      setActiveStep(stepNo);
    }
  }, [stepNo]);

  return (
    <MuiStepper
      alternativeLabel
      activeStep={activeStep}
      connector={<StyledStepConnector />}
    >
      {STEPS.map((label) => {
        return (
          <Step key={label} sx={{ padding: 0 }}>
            <StyledStepLabel>{label}</StyledStepLabel>
          </Step>
        );
      })}
    </MuiStepper>
  );
};

export default Stepper;
