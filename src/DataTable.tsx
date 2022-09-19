import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow as MuiTableRow,
  Skeleton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

import { TableRow } from "./TableRow";
import { UsersResponse } from "./types";

type DataTableProps = {
  isLoading: boolean;
  data?: UsersResponse;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 600,
  },
}));

const renderData = (
  isLoading: DataTableProps["isLoading"],
  data: DataTableProps["data"]
) =>
  isLoading
    ? Array(15)
        .fill("")
        .map((el, i) => (
          <TableRow
            key={`skeleton-${i}`}
            name={<Skeleton />}
            surname={<Skeleton />}
            email={<Skeleton />}
          />
        ))
    : data &&
      data.map((userPayload) => (
        <TableRow
          key={`${userPayload.name}-${userPayload.surname}-${userPayload.email}`}
          {...userPayload}
        />
      ));

const DataTable = ({ data, isLoading }: DataTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
        <TableHead>
          <MuiTableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <StyledTableCell sx={{ width: "33.3%" }} component="th" scope="row">
              Name
            </StyledTableCell>
            <StyledTableCell sx={{ width: "33.3%" }} align="left">
              Surname
            </StyledTableCell>
            <StyledTableCell sx={{ width: "33.3%" }} align="left">
              Email
            </StyledTableCell>
          </MuiTableRow>
        </TableHead>
        <TableBody>{renderData(isLoading, data)}</TableBody>
      </Table>
    </TableContainer>
  );
};

export { DataTable };
