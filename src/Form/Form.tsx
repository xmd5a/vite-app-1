import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useInput } from "./useInput";

type FormProps = {
  onSubmit: any;
};

const Form = ({ onSubmit }: FormProps) => {
  const [image, setImage] = useState<File>();
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!titleValue || !image) {
      return false;
    }

    const formData = new FormData();
    formData.append("title", titleValue);
    formData.append("image", image);

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
        <input type="file" onChange={handleImageChange} />
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
