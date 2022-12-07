import React, { FC } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import "bootstrap/dist/css/bootstrap.min.css"

interface CardDropdownProps {}

const CardDropdown: FC<CardDropdownProps> = () => {
  const [selection, setSelection] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => setSelection(event.target.value)

  return (
  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} data-testid="CardDropdown">
    <InputLabel id="select-label">What goes here?</InputLabel>
    <Select
    labelId="select-label"
    onChange={handleChange}
    label="What"
    value={selection}
    >
      <MenuItem value=""><em>None</em></MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
)
}

export default CardDropdown;
