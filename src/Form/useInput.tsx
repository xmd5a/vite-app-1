import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

const useInput = (label: string) => {
  const [value, setValue] = useState("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const reset = () => setValue("");

  return {
    input: (
      <TextField
        sx={{ width: "40%", mr: 1 }}
        required
        id="outlined-required"
        label={label}
        onChange={handleOnChange}
        value={value}
      />
    ),
    reset,
    value,
  };
};

export { useInput };
