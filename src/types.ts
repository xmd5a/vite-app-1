type UserPayload = {
  name: string;
  surname: string;
  email: string;
};

type UsersResponse = Array<UserPayload>;

export { UserPayload, UsersResponse };
