import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video }) => {
  // 1. SAFELY EXTRACT THE VIDEO ID:
  // Search API returns an object (video.id.videoId)
  // Suggested/Popular API returns a string (video.id)
  const videoId = typeof video?.id === 'object' ? video?.id?.videoId : video?.id;
  
  const snippet = video?.snippet;

  // 2. FALLBACK PATH:
  // If videoId is missing, fallback safely to prevent a broken URL route
  const videoLinkPath = videoId ? `/video/${videoId}` : '#';

  return (
    <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: '12px', backgroundColor: 'transparent', backgroundImage: 'none' }}>
      {/* Thumbnail Link */}
      <Link to={videoLinkPath} style={{ textDecoration: 'none' }}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url || 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600'} 
          alt={snippet?.title} 
          sx={{ width: '100%', height: 180, borderRadius: '12px', objectFit: 'cover' }} 
        />
      </Link>
      
      <CardContent sx={{ backgroundColor: 'transparent', height: '106px', pl: 0, pt: 1 }}>
        {/* Title Link */}
        <Link to={videoLinkPath} style={{ textDecoration: 'none', color: '#fff' }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.4rem' }}>
            {snippet?.title || "Video Title Placeholder"}
          </Typography>
        </Link>
        
        {/* Channel Details */}
        <Typography variant="subtitle2" fontWeight="bold" color="gray" mt={0.5} sx={{ display: 'flex', alignItems: 'center' }}>
          {snippet?.channelTitle || "Unknown Channel"}
          <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;