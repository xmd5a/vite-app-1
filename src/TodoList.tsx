import { Box } from "@mui/material";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import { getUsers, postUser } from "./api";
import { DataTable } from "./DataTable";
import { Form } from "./Form";
import { UserPayload, UsersResponse } from "./types";

const TodoList = () => {
  const client = useQueryClient();
  const { data, isLoading } = useQuery<UsersResponse>(["users"], getUsers);
  const { mutate } = useMutation(
    ({ name, surname, email }: UserPayload) =>
      postUser({ name, surname, email }),
    {
      onSuccess: () => {
        client.invalidateQueries(["users"]);
      },
    }
  );

  return (
    <Box sx={{ width: 700 }}>
      <Form onSubmit={mutate} />
      <DataTable isLoading={isLoading} data={data} />
    </Box>
  );
};

export { TodoList };
