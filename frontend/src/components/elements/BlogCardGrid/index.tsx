import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import BlogCard from '../BlogCard'
import { BlogData } from '@/types/BlogCardData'

// 仮のJSONデータ
const mockData = [
  {
    id: 1,
    thumbnailSrc: '/public/next.svg',
    thumbnailAlt: 'Lizard',
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    id: 2,
    thumbnailSrc: '/static/images/cards/contemplative-reptile.jpg',
    thumbnailAlt: 'Python',
    title: 'Python',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    id: 3,
    thumbnailSrc: '/static/images/cards/contemplative-reptile.jpg',
    thumbnailAlt: 'Snake',
    title: 'Snake',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    id: 4,
    thumbnailSrc: '/static/images/cards/contemplative-reptile.jpg',
    thumbnailAlt: 'Lizard',
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    id: 5,
    thumbnailSrc: '/static/images/cards/contemplative-reptile.jpg',
    thumbnailAlt: 'Python',
    title: 'Python',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    id: 6,
    thumbnailSrc: '/static/images/cards/contemplative-reptile.jpg',
    thumbnailAlt: 'Snake',
    title: 'Snake',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    id: 7,
    thumbnailSrc: '/static/images/cards/contemplative-reptile.jpg',
    thumbnailAlt: 'Lizard',
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    id: 8,
    thumbnailSrc: '/static/images/cards/contemplative-reptile.jpg',
    thumbnailAlt: 'Python',
    title: 'Python',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    id: 9,
    thumbnailSrc: '/static/images/cards/contemplative-reptile.jpg',
    thumbnailAlt: 'Snake',
    title: 'Snake',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const FullWidthGrid = () => {
  const [data, setData] = useState<BlogData[]>([])

  useEffect(() => {
    setData(mockData)
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Item>
              <BlogCard
                id={item.id}
                thumbnailSrc={item.thumbnailSrc}
                thumbnailAlt={item.thumbnailAlt}
                title={item.title}
                description={item.description}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default FullWidthGrid