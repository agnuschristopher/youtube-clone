import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

const VideoDetail = () => {
  const { id } = useParams();

  return (
    <Box sx={{ minHeight: '95vh', p: 2, backgroundColor: '#0f0f0f' }}>
      <Box sx={{ width: '100%', maxWidth: '1000px', margin: '0 auto', position: 'relative', pt: '56.25%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '12px'
          }}
        />
      </Box>
    </Box>
  );
};

export default VideoDetail;