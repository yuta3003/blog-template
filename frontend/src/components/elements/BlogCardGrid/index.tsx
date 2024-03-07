import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BlogCard from '../BlogCard'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FullWidthGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Item>
            <BlogCard
              imageSrc='/static/images/cards/contemplative-reptile.jpg'
              imageAlt='Lizard'
              title='Lizard'
              description='Lizards are a widespread group of squamate reptiles, with over 6,000'
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>
            <BlogCard
              imageSrc='/static/images/cards/contemplative-reptile.jpg'
              imageAlt='Lizard'
              title='Lizard'
              description='Lizards are a widespread group of squamate reptiles, with over 6,000'
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>
            <BlogCard
              imageSrc='/static/images/cards/contemplative-reptile.jpg'
              imageAlt='Lizard'
              title='Lizard'
              description='Lizards are a widespread group of squamate reptiles, with over 6,000'
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>
            <BlogCard
              imageSrc='/static/images/cards/contemplative-reptile.jpg'
              imageAlt='Lizard'
              title='Lizard'
              description='Lizards are a widespread group of squamate reptiles, with over 6,000'
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>
            <BlogCard
              imageSrc='/static/images/cards/contemplative-reptile.jpg'
              imageAlt='Lizard'
              title='Lizard'
              description='Lizards are a widespread group of squamate reptiles, with over 6,000'
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>
            <BlogCard
              imageSrc='/static/images/cards/contemplative-reptile.jpg'
              imageAlt='Lizard'
              title='Lizard'
              description='Lizards are a widespread group of squamate reptiles, with over 6,000'
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FullWidthGrid
