import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

export default function FilterFavorite(props) {
  // filter functions to match favorites
  function selectFavFilterType(event) {
    props.setFavorites(event.target.value);
  }

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Favorites</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.favorites}
        onChange={selectFavFilterType}
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
