import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";
import { useProduct } from "../../context/ProductContext";

export default function FilterProduct() {
  const { filterProduct } = useProduct();
  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "flex-end",
        p: "20px 30px",
        position: "absolute",
      }}
    >
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Filter</FormLabel>
        <RadioGroup
          onChange={(e) => filterProduct("type", e.target.value)}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="mac" control={<Radio />} label="Mac" />
          <FormControlLabel value="watch" control={<Radio />} label="Watch" />
          <FormControlLabel value="iphone" control={<Radio />} label="iPhone" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
