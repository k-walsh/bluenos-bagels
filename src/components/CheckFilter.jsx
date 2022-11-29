import { useState } from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";

export default function CheckFilter(props) {
  // old way, now thinking of using radio boxes instead
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            onChange={props.selectCategoryFilterType}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        value="Bagels"
        label="Bagels"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={props.selectCategoryFilterType}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        value="Muffins"
        label="Muffins"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={props.selectCategoryFilterType}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        value="Breakfast Sandwich"
        label="Breakfast Sandwich"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={props.selectCategoryFilterType}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        value="Spreads"
        label="Spreads"
      />
    </FormGroup>
  );
}
