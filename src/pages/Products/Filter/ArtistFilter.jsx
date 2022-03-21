import React from 'react'
// mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ArtistFilter = ({ artist, setArtist }) => {
  const handleChange = (e) => {
    setArtist(e.target.value);
  };
  return (
    <Box sx={{ padding: 1 }}>
      <FormControl>
        <InputLabel>藝術家</InputLabel>
        <Select
          size="small"
          value={artist}
          label="artist"
          onChange={handleChange}
        >
          <MenuItem value={'全部'}>全部</MenuItem>
          <MenuItem value={'潔西卡'}>潔西卡</MenuItem>
          <MenuItem value={'沃爾茲'}>沃爾茲</MenuItem>
          <MenuItem value={'艾妮'}>艾妮</MenuItem>
          <MenuItem value={'卡爾'}>卡爾</MenuItem>
          <MenuItem value={'妮妮'}>妮妮</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default ArtistFilter