import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex'
}));


const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  height: '5rem',
  width: "200px",
  paddingRight: '5px'
};

export default function BasicStack(props) {
  return (
    <div>
      <Stack spacing={2}>
        {props.results !== '' ?
          props.results.map((result) => {
            return (
              <Item key={result.cacheId}>
                <Box sx={{ ...commonStyles, borderRight: 1, overflowWrap:"break-word", overflow:"hidden"}}>
                  <Typography variant='h2' gutterBottom component="div" sx={{ fontSize: 15, fontWeight: 'bold' }}>
                    {result.title}
                  </Typography>
                  <Link href={result.link} underline="hover" >
                    {result.link}
                  </Link>
                </Box>
                <Box sx={{ mx: "auto", width: 200 }}>
                  <Typography variant='h3' gutterBottom component="div" sx={{fontSize: 10, textAlign:"left" }}>
                    {result.snippet}
                  </Typography>
                </Box>
              </Item>
            )
          }) :
          <>
          </>
        }
      </Stack>




    </div>
  );
}