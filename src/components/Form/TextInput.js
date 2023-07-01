import { Box, TextField } from "@mui/material";

const TextInput = (props) => {
  return (
    <Box
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        "& > :not(style)": { m: 1, width: "600px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Enter Name"
        variant="outlined"
        onChange={(e) => {
          props.setName(e.target.value);
          props.setError(false);
        }}
        required
      />
      <TextField
        id="outlined-basic"
        label="Enter Address"
        variant="outlined"
        rows={4}
        multiline
        onChange={(e) => {
          props.setAddress(e.target.value);
          props.setError(false);
        }}
        required
      />
    </Box>
  );
};
export default TextInput;
