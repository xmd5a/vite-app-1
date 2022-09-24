import { FormEvent } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useInput } from "./useInput";

type FormProps = {
  onSubmit: any;
};

const Form = ({ onSubmit }: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    nameValue &&
      surnameValue &&
      emailValue &&
      onSubmit({ name: nameValue, surname: surnameValue, email: emailValue });

    resetName();
    resetSurname();
    resetEmail();
  };

  const { input: Name, value: nameValue, reset: resetName } = useInput("Name");
  const {
    input: Surname,
    value: surnameValue,
    reset: resetSurname,
  } = useInput("Surname");
  const {
    input: Email,
    value: emailValue,
    reset: resetEmail,
  } = useInput("Email");

  return (
    <Box
      component="form"
      sx={{
        m: 3,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        {Name}
        {Surname}
        {Email}
        <Button
          sx={{
            mt: 1,
          }}
          size="large"
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </Box>
  );
};

export { Form };
