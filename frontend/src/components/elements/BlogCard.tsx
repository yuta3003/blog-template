import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { BlogData } from '@/types/BlogData'
import { useRouter } from 'next/navigation'

const BlogCard: React.FC<BlogData> = ({
  id,
  thumbnailSrc,
  thumbnailAlt,
  title,
  description,
  createdAt,
}) => {

  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/posts/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={thumbnailSrc}
          alt={thumbnailAlt}
          sx={{
            objectFit: 'contain',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {createdAt}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BlogCard
