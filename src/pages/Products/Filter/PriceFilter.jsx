import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PriceFilter = ({ priceSort, setPriceSort }) => {
  const handleChange = (e) => {
    setPriceSort(e.target.value);
  };
  return (
    <Box sx={{ padding: 1 }}>
      <FormControl>
        <InputLabel>價格</InputLabel>
        <Select
          value={priceSort}
          label="price"
          size="small"
          onChange={handleChange}
        >
          <MenuItem value={0}>不排序</MenuItem>
          <MenuItem value={1}>價格低到高</MenuItem>
          <MenuItem value={2}>價格高到低</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default PriceFilter