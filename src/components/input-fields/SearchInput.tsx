import { InputBase, InputBaseProps, styled } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";
import SearchIcon from "icons/SearchIcon";
import { FC } from "react";

// styled component
const StyledInputBase = styled(InputBase)<{ disable_border: any }>(
  ({ theme, disable_border }) => ({
    height: 45,
    fontSize: 12,
    width: "100%",
    maxWidth: 350,
    fontWeight: 600,
    padding: "0 1rem",
    borderRadius: "8px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    border: disable_border
      ? "none"
      : `1px solid black ${theme.palette.action.disabled}`,
    // [theme.breakpoints.down(500)]: { maxWidth: "100%" },
    "::placeholder": { color: theme.palette.text.disabled },
  })
);

// ------------------------------------------------------------
type SearchInputProps = {
  icon_style?: CSSProperties;
  disable_border?: boolean;
};
// ------------------------------------------------------------

const SearchInput: FC<SearchInputProps & InputBaseProps> = (props) => {
  const { icon_style = {}, disable_border = false } = props;
  return (
    <StyledInputBase
      disable_border={disable_border ? 1 : 0}
      startAdornment={
        <SearchIcon
          sx={{
            fontSize: 18,
            marginRight: 1,
            color: "text.disabled",
            ...icon_style,
          }}
        />
      }
      {...props}
    />
  );
};

export default SearchInput;
