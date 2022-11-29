import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

export default function FilterCategory(props) {
  //   const [category, setCategory] = useState("All");
  //   const [favorites, setFavorites] = useState("All");

  //   // filter functions to match categories
  //   const selectCategoryFilterType = (event) => {
  //     setCategory(event.target.value);
  //   };

  //   const matchesCategoryFiltertype = (item) => {
  //     if (category === "All") {
  //       return true;
  //     } else if (category === item.category) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };

  //   // filter functions to match favorites
  //   const selectFavFilterType = (event) => {
  //     setFavorites(event.target.value);
  //   };

  //   const matchesFavFiltertype = (item) => {
  //     if (favorites === "All") {
  //       return true;
  //     } else {
  //       return item.favorite; // favorite is a boolean already
  //     }
  //   };

  //   const filteredData = props.items.filter((e) => {
  //     return matchesCategoryFiltertype(e) && matchesFavFiltertype(e);
  //   });
  //   props.setItems(filteredData);

  //   useEffect(() => {
  //     const filteredData = props.items.filter((e) => {
  //       return matchesCategoryFiltertype(e) && matchesFavFiltertype(e);
  //     });

  //     props.setItems(filteredData);
  //   }, [category, favorites]);

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Category</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.category}
        onChange={props.selectCategoryFilterType}
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Bagels" control={<Radio />} label="Bagels" />
        <FormControlLabel value="Muffins" control={<Radio />} label="Muffins" />
        <FormControlLabel
          value="Breakfast Sandwich"
          control={<Radio />}
          label="Breakfast Sandwich"
        />
        <FormControlLabel value="Spreads" control={<Radio />} label="Spreads" />
      </RadioGroup>
    </FormControl>
  );
}
