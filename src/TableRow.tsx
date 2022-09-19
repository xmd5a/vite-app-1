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
import { UserPayload } from "./types";

type TableRowProps = { [P in keyof UserPayload]: UserPayload[P] | JSX.Element };

const TableRow = ({ name, surname, email }: TableRowProps) => (
  <MuiTableRow
    key={`${name.toString()}-${surname.toString()}-${email.toString()}`}
    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  >
    <TableCell sx={{ width: "33.3%" }} component="th" scope="row">
      {name}
    </TableCell>
    <TableCell sx={{ width: "33.3%" }} align="left">
      {surname}
    </TableCell>
    <TableCell sx={{ width: "33.3%" }} align="left">
      {email}
    </TableCell>
  </MuiTableRow>
);

export { TableRow };
