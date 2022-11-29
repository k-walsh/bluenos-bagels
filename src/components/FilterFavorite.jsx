import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

export default function FilterFavorite(props) {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Favorites</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.favorites}
        onChange={props.selectFavFilterType}
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel
          value="Favorites"
          control={<Radio />}
          label="Favorites"
        />
      </RadioGroup>
    </FormControl>
  );
}
