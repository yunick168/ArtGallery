import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CategoryFilter = ({ category, setCategory }) => {

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Box sx={{ padding: 1 }}>
      <FormControl>
        <InputLabel>類別</InputLabel>
        <Select
          value={category}
          label="category"
          size="small"
          onChange={handleChange}
        >
          <MenuItem value={'全部'}>全部</MenuItem>
          <MenuItem value={'風景'}>風景</MenuItem>
          <MenuItem value={'圖畫'}>圖畫</MenuItem>
          <MenuItem value={'景物'}>景物</MenuItem>
          <MenuItem value={'抽象'}>抽象</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default CategoryFilter