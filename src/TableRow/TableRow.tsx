import { Button, TableCell, TableRow as MuiTableRow } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getImage } from "../api";
import { ImageResponse } from "../types";
import { Image } from "../Image";

type TableRowProps = {
  title: string | JSX.Element;
  image: string | JSX.Element;
  imageId: string;
};

const TableRow = ({ imageId, title, image }: TableRowProps) => {
  const { data, refetch, isError, isFetching } = useQuery<ImageResponse>(
    ["image", imageId],
    () => getImage(imageId),
    {
      enabled: false,
    }
  );
  const handleLoadImage = () => {
    refetch();
  };

  return (
    <MuiTableRow
      key={`${title.toString()}-${image.toString()}}`}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell sx={{ width: "20%" }} component="th" scope="row">
        {title}
      </TableCell>
      <TableCell sx={{ width: "20%" }} align="left">
        <Button variant="contained" onClick={handleLoadImage}>
          load 🖼️
        </Button>
      </TableCell>
      <TableCell sx={{ width: "60%" }} align="left">
        <Image
          isError={isError}
          isLoading={isFetching}
          src={data?.image || ""}
        />
      </TableCell>
    </MuiTableRow>
  );
};

export { TableRow };
