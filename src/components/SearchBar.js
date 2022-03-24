import React from 'react'
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { getResults, getImageResults } from '../utils';

function SearchBar(props) {
  const [inputField, setInput] = useState('');


  const text = (e) => {
    e.preventDefault();
    if (inputField.length > 0) {
      if(props.searchType === 'search'){

        getResults(inputField).then((data) => {
          console.log(data.items)
          props.setResults(data.items)
         
        })
      }else{
        getImageResults(inputField).then((data) => {
          console.log(data.items)
          props.setResults(data.items)
       
        })
      }

    }
  }
  return (

    <form style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start"
    }}
      onSubmit={text}>

      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
          margin: '0 20px 20px 0'
        }}
      >
        <TextField fullWidth label="Search!" id="fullWidth" onChange={(e) => setInput(e.target.value)} name='searchInput' />
      </Box>

      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>


    </form>

  )
}

export default SearchBar