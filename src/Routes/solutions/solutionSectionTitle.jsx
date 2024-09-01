import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

export default function SolutionSectionTitle({title}) {
  return (
    <Box sx={{ width: '100%', marginTop:'20px',marginBottom:'30px'}}>
      <Stack spacing={2}>
        <Item><span style={{fontFamily:'TimeNew Roman', fontWeight:'bolder', fontSize:'30px'}} >{title}</span></Item>
      </Stack>
    </Box>
  );
}