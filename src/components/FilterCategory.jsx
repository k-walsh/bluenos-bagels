import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

export default function FilterCategory(props) {

  // filter functions to match categories
  function selectCategoryFilterType(event) {
    props.setCategory(event.target.value);
  }

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Category</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.category}
        onChange={selectCategoryFilterType}
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Bagels" control={<Radio />} label="Bagels" />
        <FormControlLabel value="Muffins" control={<Radio />} label="Muffins" />
        <FormControlLabel
          value="Breakfast Sandwiches"
          control={<Radio />}
          label="Breakfast Sandwich"
        />
        <FormControlLabel value="Spreads" control={<Radio />} label="Spreads" />
      </RadioGroup>
    </FormControl>
  );
}
