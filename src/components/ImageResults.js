import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageResults(props) {
  return (
    <ImageList sx={{ width: 500, height: 450, margin: "0 auto 0 auto" }} cols={3} rowHeight={164}>
      {props.results !== '' ?
          props.results.map((item) => 
            
            (
            <ImageListItem key={item.cacheId}>
              <img
                //src={`${item.link}?w=164&h=164&fit=crop&auto=format`}
                src={item.link}
                srcSet={item.link}
                //srcSet={`${item.link}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{width:'164px', height:'164px'}}
              />
            </ImageListItem>

       
        
          ))
         :
        <>
        </>
      }
    </ImageList>
  );
}

