import { ArrowRightAlt } from "@mui/icons-material";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5 } from "components/Typography";
import { StyledPagination } from "page-sections/libs/styledComponents";
import { ChangeEvent, FC, useMemo } from "react";
import {
  useExpanded,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import ScrollBar from "simplebar-react";

// component props interface
interface CustomTableProps {
  data: object[];
  columnShape: object[];
  showFooter?: boolean;
  hidePagination?: boolean;
  rowClick?: (rowData: object) => void;
}

const CustomTable: FC<CustomTableProps> = (props) => {
  const { data, rowClick, showFooter, columnShape, hidePagination } = props;
  // hooks
  const tableData: any = useMemo(() => data, [data]);
  const columns: any = useMemo(() => columnShape, [columnShape]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
  }: any = useTable(
    {
      columns,
      data: tableData,
    },
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );
  // handle pagination
  const handleChange = (_e: ChangeEvent<unknown>, currentPageNo: number) => {
    gotoPage(currentPageNo - 1);
  };

  return (
    <Box>
      <ScrollBar>
        <Table
          {...getTableProps()}
          sx={{ borderSpacing: "0 1rem", borderCollapse: "separate" }}
        >
          <TableHead>
            {headerGroups.map((headerGroup: any) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    sx={{
                      paddingY: 0,
                      fontSize: 12,
                      fontWeight: 600,
                      borderBottom: 0,
                      width: column.width,
                      color: "text.secondary",
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth,
                      "&:last-child": { textAlign: "center" },
                    }}
                  >
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <TableRow
                  {...row.getRowProps()}
                  onClick={rowClick && rowClick(row.original)}
                  sx={{
                    backgroundColor: "background.paper",
                    cursor: rowClick ? "pointer" : "unset",
                    "& td:first-of-type": {
                      borderLeft: "0",
                      borderTopLeftRadius: "8px",
                      borderBottomLeftRadius: "8px",
                    },
                    "& td:last-of-type": {
                      borderRight: "0",
                      textAlign: "center",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    },
                  }}
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <TableCell
                        {...cell.getCellProps()}
                        sx={{
                          border: 0,
                          fontSize: 13,
                          fontWeight: 500,
                          color: "text.secondary",
                          "&:first-child": { paddingLeft: "16px" },
                          "&:last-child": { paddingRight: "16px" },
                        }}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollBar>

      {!hidePagination && (
        <Stack alignItems="flex-end" marginY={1}>
          <StyledPagination
            count={pageOptions.length}
            shape="rounded"
            onChange={handleChange}
          />
        </Stack>
      )}

      {showFooter && (
        <FlexBetween gap={0.5}>
          <H5 color="text.secondary" fontSize={13}>
            Showing 1-12 of 24 result
          </H5>
          <ButtonBase
            disableRipple
            sx={{ fontSize: 13, fontWeight: 600, color: "text.secondary" }}
          >
            See All
            <ArrowRightAlt />
          </ButtonBase>
        </FlexBetween>
      )}
    </Box>
  );
};

export default CustomTable;
