'use client'

import { useRouter } from 'next/navigation'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const BlogContent = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#ffffff', height: '100vh' }} />
      </Container>
    </React.Fragment>
  )
}


export default BlogContent
