import { FormEvent, useRef } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useInput } from "./useInput";

type FormProps = {
  onSubmit: any;
};

const Form = ({ onSubmit }: FormProps) => {
  const imageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!titleValue || !imageRef.current?.value) {
      return false;
    }

    const formData = new FormData();
    formData.append("title", titleValue);
    formData.append("image", imageRef.current.value);

    titleValue && onSubmit(formData);
    resetTitle();
  };

  const { input, value: titleValue, reset: resetTitle } = useInput("title");

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
        {input}
        <input type="file" ref={imageRef} />
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
