import { ButtonBase, Stack } from "@mui/material";
import { H5 } from "components/Typography";
import Add from "icons/Add";
import Remove from "icons/Remove";
import React, { FC } from "react";

// ----------------------------------------------------------
type QuantityButtonsProps = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
};
// ----------------------------------------------------------

const QuantityButtons: FC<QuantityButtonsProps> = ({
  quantity,
  increment,
  decrement,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: 110,
        border: "2px solid black ",
        padding: "5px 10px",
        borderRadius: "4px",
        borderColor: "grey.300",
      }}
    >
      <ButtonBase disableRipple disabled={quantity < 1} onClick={decrement}>
        <Remove
          sx={{ color: quantity < 2 ? "text.disabled" : "text.primary" }}
        />
      </ButtonBase>

      <H5>{quantity}</H5>

      <ButtonBase disableRipple onClick={increment}>
        <Add />
      </ButtonBase>
    </Stack>
  );
};

export default QuantityButtons;
