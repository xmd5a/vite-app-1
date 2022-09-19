import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import { getUsers, postUser, UserPayload } from "./api";

const TodoList = () => {
  const client = useQueryClient();
  const query = useQuery(["users"], getUsers);
  const { mutate } = useMutation(
    ({ name, surname, email }: UserPayload) =>
      postUser({ name, surname, email }),
    {
      onSuccess: () => {
        client.invalidateQueries(["users"]);
      },
    }
  );

  return <div>todolist</div>;
};

export { TodoList };
