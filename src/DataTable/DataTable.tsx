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

import { TableRow } from "../TableRow";
import { ImageResponse } from "../types";

type DataTableProps = {
  isLoading: boolean;
  data?: Array<ImageResponse>;
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
            title={<Skeleton />}
            image={<Skeleton />}
            imageId={""}
          />
        ))
    : data &&
      data.map(({ title, image }) => (
        <TableRow
          key={`${title}-${image}`}
          title={title}
          image={image}
          imageId={title}
        />
      ));

const DataTable = ({ data, isLoading }: DataTableProps) => (
  <TableContainer component={Paper}>
    <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
      <TableHead>
        <MuiTableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <StyledTableCell sx={{ width: "20%" }} component="th" scope="row">
            Title
          </StyledTableCell>
          <StyledTableCell sx={{ width: "20%" }} align="left">
            Preload
          </StyledTableCell>
          <StyledTableCell sx={{ width: "60%" }} align="left">
            Image
          </StyledTableCell>
        </MuiTableRow>
      </TableHead>
      <TableBody>{renderData(isLoading, data)}</TableBody>
    </Table>
  </TableContainer>
);

export { DataTable };
