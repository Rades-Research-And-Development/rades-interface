import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
} from "@mui/material";
import { Box } from "@mui/system";
import { H3, H5, Tiny } from "components/Typography";
import Add from "icons/Add";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import QuantityButtons from "../QuantityButtons";

// styled component
const StyledCardContent = styled(CardContent)(() => ({
  padding: 20,
  display: "flex",
  paddingBottom: 0,
  alignItems: "center",
  justifyContent: "space-between",
}));

const ColorBox = styled(Box)<{ color: string }>(({ color }) => ({
  width: 17,
  height: 17,
  marginLeft: -5,
  borderRadius: "50%",
  position: "relative",
  backgroundColor: color,
  border: "1px solid black white",
  "&:first-of-type": { marginLeft: 0, zIndex: 1 },
}));

const StyledText = styled(Tiny)(({ theme }) => ({
  top: 20,
  right: 20,
  padding: "3px 9px",
  borderRadius: "4px",
  position: "absolute",
  color: theme.palette.error.main,
  backgroundColor: theme.palette.error.light,
}));

// --------------------------------------------------------------
type ProductCardProps = {
  product: {
    name: string;
    price: number;
    image: string;
    off: number;
    new?: boolean;
  };
};
// --------------------------------------------------------------

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <Card sx={{ position: "relative" }}>
      <Link to="/dashboards/product-details">
        <CardMedia height={230} component="img" image={product.image} />
      </Link>

      {product.off > 0 && <StyledText>{product.off}% Off</StyledText>}

      {product.new && (
        <StyledText sx={{ color: "white", backgroundColor: "primary.main" }}>
          New
        </StyledText>
      )}

      <StyledCardContent>
        <Stack spacing={1}>
          <Stack direction="row">
            <ColorBox color="#FF316F" />
            <ColorBox color="#011E3D" />
          </Stack>

          <H5>Nike Airmax 270</H5>
          <H3 color="text.disabled">$120</H3>
        </Stack>

        {quantity === 0 && (
          <Button
            disableRipple
            variant="GreyOutlined"
            onClick={() => setQuantity((state) => state + 1)}
            sx={{ padding: 1, minWidth: 0, borderWidth: 1.8 }}
          >
            <Add />
          </Button>
        )}

        {quantity > 0 && (
          <QuantityButtons
            quantity={quantity}
            increment={() => setQuantity((state) => state + 1)}
            decrement={() => setQuantity((state) => state - 1)}
          />
        )}
      </StyledCardContent>
    </Card>
  );
};

export default ProductCard;
