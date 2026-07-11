import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player'; // Optional fallback

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    // You can add API fetch here later
    console.log("Video ID:", id);
  }, [id]);

  return (
    <Box minHeight="95vh" px={2} py={4}>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={4}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'relative', pt: '56.25%' }}>
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
              title="YouTube video player"
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
      </Stack>
    </Box>
  );
};

export default VideoDetail;