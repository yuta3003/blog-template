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
    thumbnailSrc: '/static/python.jpg',
    thumbnailAlt: 'Lizard',
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
    createdAt: '2024-02-12',
  },
  {
    id: 2,
    thumbnailSrc: '/static/go.png',
    thumbnailAlt: 'Python',
    title: 'Python',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
    createdAt: '2024-02-13',
  },
  {
    id: 3,
    thumbnailSrc: '/static/go.png',
    thumbnailAlt: 'Snake',
    title: 'Snake',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
    createdAt: '2024-02-14',
  },
  {
    id: 4,
    thumbnailSrc: '/static/python.jpg',
    thumbnailAlt: 'Lizard',
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
    createdAt: '2024-02-15',
  },
  {
    id: 5,
    thumbnailSrc: '/static/python.jpg',
    thumbnailAlt: 'Python',
    title: 'Python',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
    createdAt: '2024-02-16',
  },
  {
    id: 6,
    thumbnailSrc: '/static/go.png',
    thumbnailAlt: 'Snake',
    title: 'Snake',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
    createdAt: '2024-02-17',
  },
  {
    id: 7,
    thumbnailSrc: '/static/python.jpg',
    thumbnailAlt: 'Lizard',
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
    createdAt: '2024-02-18',
  },
  {
    id: 8,
    thumbnailSrc: '/static/python.jpg',
    thumbnailAlt: 'Python',
    title: 'Python',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
    createdAt: '2024-02-19',
  },
  {
    id: 9,
    thumbnailSrc: '/static/go.png',
    thumbnailAlt: 'Snake',
    title: 'Snake',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
    createdAt: '2024-02-20',
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
                createdAt={item.createdAt}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default FullWidthGrid
