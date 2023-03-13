import { Star } from "@mui/icons-material";
import {
  Button,
  Divider,
  Drawer,
  FormGroup,
  Rating,
  Stack,
  styled,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import RadioGroup from "@mui/material/RadioGroup";
import { Box } from "@mui/system";
import AppCheckBox from "components/AppCheckBox";
import AppRadio from "components/AppRadio";
import ColorRadio from "components/ColorRadio";
import FlexBetween from "components/flexbox/FlexBetween";
import AppTextField from "components/input-fields/AppTextField";
import { H3, H5 } from "components/Typography";
import Clear from "icons/Clear";
import Restore from "icons/Restore";
import { ChangeEvent, FC, useState } from "react";

// styled components
const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  "& .MuiCheckbox-root": { padding: "5px 9px" },
  "& .MuiRadio-root": { paddingTop: 5, paddingBottom: 5 },
  "& .MuiTypography-root": { fontSize: 12, fontWeight: 500 },
}));

// -------------------------------------------------------
type FilterBarProps = {
  open: boolean;
  onClose: () => void;
};
// -------------------------------------------------------

const FilterBar: FC<FilterBarProps> = ({ open, onClose }) => {
  const [colorSelect, setColorSelect] = useState("red");
  const [rating, setRating] = useState<number | null>(2);
  const [selectCategory, setSelectCategory] = useState("shoes");

  // handle change color function
  const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    setColorSelect(event.target.value);
  };
  // handle change category function
  const changeCategory = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectCategory(event.target.value);
  };

  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Box sx={{ maxWidth: 250 }}>
        <FlexBetween padding={2}>
          <H3>Filter</H3>
          <IconButton sx={{ padding: 0 }} onClick={onClose}>
            <Clear />
          </IconButton>
        </FlexBetween>

        <Divider />

        <Box padding={2} mt={1}>
          <H5 mb={2}>Categories</H5>
          <RadioGroup value={selectCategory} onChange={changeCategory}>
            <StyledFormControlLabel
              value="all"
              control={<AppRadio />}
              label="All"
            />
            <StyledFormControlLabel
              value="shoes"
              control={<AppRadio />}
              label="Shoes"
            />
            <StyledFormControlLabel
              value="clothing"
              control={<AppRadio />}
              label="Clothing"
            />
            <StyledFormControlLabel
              value="accessories"
              control={<AppRadio />}
              label="Accessories"
            />
          </RadioGroup>

          <H5 mt={3} mb={2}>
            Gender
          </H5>
          <FormGroup>
            <StyledFormControlLabel
              value="men"
              control={<AppCheckBox />}
              label="Men"
            />
            <StyledFormControlLabel
              value="women"
              control={<AppCheckBox />}
              label="Women"
            />
            <StyledFormControlLabel
              value="kids"
              control={<AppCheckBox />}
              label="Kids"
            />
          </FormGroup>

          <H5 mt={3} mb={2}>
            Color
          </H5>
          <RadioGroup row value={colorSelect} onChange={handleChangeColor}>
            <ColorRadio value="red" icon_color="#FF316F" />
            <ColorRadio value="pumpkin" icon_color="#FE8969" />
            <ColorRadio value="purple" icon_color="#8C8DFF" />
            <ColorRadio value="blue" icon_color="#2499EF" />
            <ColorRadio value="green" icon_color="#27CE88" />
          </RadioGroup>

          <H5 mt={3} mb={2}>
            Price Range
          </H5>
          <Stack direction="row" spacing={2}>
            <AppTextField placeholder="Min" size="small" />
            <AppTextField placeholder="Max" size="small" />
          </Stack>

          <H5 mt={3} mb={2}>
            Rating
          </H5>
          <Rating
            value={rating}
            onChange={(_, newValue) => setRating(newValue)}
            emptyIcon={<Star sx={{ opacity: 0.4, fontSize: "inherit" }} />}
            sx={{ color: "warning.main", fontSize: 28 }}
          />

          <Button
            fullWidth
            variant="GreyOutlined"
            startIcon={<Restore />}
            sx={{ mt: 3 }}
          >
            Clear all
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterBar;
