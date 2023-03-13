import { Add, Remove } from "@mui/icons-material";
import { Box, Button, ButtonBase, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { H5, Small } from "components/Typography";
import { FC, useState } from "react";

// styled components
const StyledButton = styled(ButtonBase)(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: "10px",
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary[200]
      : theme.palette.divider,
}));

const StyledCard = styled(Card)(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "1rem 2rem",
  marginBottom: "1.5rem",
  justifyContent: "space-between",
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(868)]: { marginTop: 16 },
}));

// component props interface
interface CartListItemProps {
  item: {
    image: string;
    name: string;
    price: number;
    quantity: number;
    stock: number;
  };
}

const CartListItem: FC<CartListItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <StyledCard>
      <FlexBox alignItems="center">
        <AppAvatar
          src={item.image}
          sx={{ width: 60, height: 60, borderRadius: "10%" }}
        />

        <Box marginLeft={2}>
          <H5 lineHeight={1.5}>{item.name}</H5>
          <H5 lineHeight={1.5}>${item.price}</H5>
          <Small color="text.disabled">
            {item.stock > 0 ? "In Stock" : "Out of Stock"}
          </Small>
        </Box>
      </FlexBox>

      <ButtonWrapper>
        {quantity > 0 ? (
          <FlexBox alignItems="center">
            <StyledButton
              sx={{ backgroundColor: "action.hover" }}
              onClick={() => setQuantity((state) => state + 1)}
            >
              <Add sx={{ color: "text.disabled", fontSize: 16 }} />
            </StyledButton>

            <H5 width={40} textAlign="center">
              {quantity}
            </H5>

            <StyledButton
              sx={{ backgroundColor: "action.hover" }}
              onClick={() =>
                setQuantity((state) => (state > 0 ? state - 1 : state))
              }
            >
              <Remove sx={{ color: "text.disabled", fontSize: 16 }} />
            </StyledButton>
          </FlexBox>
        ) : (
          <Button variant="contained" onClick={() => setQuantity(quantity + 1)}>
            Add To Cart
          </Button>
        )}
      </ButtonWrapper>
    </StyledCard>
  );
};

export default CartListItem;
