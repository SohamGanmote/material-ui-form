import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CountryInput = (props) => {
  const handleChange = (e) => {
    props.setCountry(e.target.value);
    props.setError(false);
  };
  return (
    <FormControl sx={{ m: 1, width: "600px" }}>
      <InputLabel id="demo-simple-select-label">Country</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Country"
        value={props.country}
        onChange={handleChange}
      >
        <MenuItem value="ca">Canada</MenuItem>
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="si">Singapore</MenuItem>
      </Select>
    </FormControl>
  );
};
export default CountryInput;
