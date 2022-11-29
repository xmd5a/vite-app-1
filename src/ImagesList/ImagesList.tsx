import { Box } from "@mui/material";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import { getImages, postImage } from "../api";
import { DataTable } from "../DataTable/DataTable";
import { Form } from "../Form";
import { ImagePayload, ImageResponse } from "../types";

const TodoList = () => {
  const client = useQueryClient();
  const { data, isLoading } = useQuery<Array<ImageResponse>>(
    ["images"],
    getImages
  );
  const { mutate } = useMutation((data: ImagePayload) => postImage(data), {
    onSuccess: () => {
      client.invalidateQueries(["images"]);
    },
  });

  return (
    <Box sx={{ width: 700 }}>
      <Form onSubmit={mutate} />
      <DataTable isLoading={isLoading} data={data} />
    </Box>
  );
};

export { TodoList };
