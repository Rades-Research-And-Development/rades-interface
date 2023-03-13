import { Pagination, PaginationProps, styled } from "@mui/material";

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  //   '& .MuiPaginationItem-root': { fontWeight: 600 },
  //   '& .MuiPaginationItem-page:hover': {
  //     color: '#fff',
  //     backgroundColor: theme.palette.primary.main,
  //   },
  "& .MuiPaginationItem-page.Mui-selected": {
    fontWeight: 600,
    //   color: "#fff",
    //   borderRadius: "4px",
    //   backgroundColor: theme.palette.primary.main,
  },
  //   '& .MuiPaginationItem-previousNext': {
  //     color: theme.palette.text.disabled,
  //     border: `1px solid black ${theme.palette.text.disabled}`,
  //     '&:hover': { backgroundColor: 'transparent' },
  //   },
  //   '& .MuiPagination-ul li': { marginLeft: 4, marginRight: 4 },
}));

const AppPagination = (props: PaginationProps) => (
  <StyledPagination {...props} />
);

export default AppPagination;
