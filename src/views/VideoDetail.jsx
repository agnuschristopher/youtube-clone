import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'; // Importing explicitly from youtube helps stability
import { Box, Typography, Stack } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from '../components/Videos'; // For recommended videos layout grid

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // 1. Fetch main video details
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
      .catch((err) => console.error(err));

    // 2. Fetch recommended videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  }, [id]);

  if (!videoDetail?.snippet) return <Typography color="#fff" p={5}>Loading...</Typography>;

  const { snippet: { title, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" px={2} py={4}>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={4}>
        
        {/* Left Side: Video Player Container */}
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'relative', pt: '56.25%' /* 16:9 Aspect Ratio */ }}>
            <ReactPlayer 
              url={`https://www.youtube.com/embed/${id}`} // Use embed structure for better iframe cross-origin handling
              className="react-player"
              controls
              playing
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }
              }}
            />
          </Box>
          
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
          
          <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} px={2} py={1}>
            <Typography variant="subtitle1" color="gray" fontWeight="bold">
              {channelTitle}
            </Typography>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Right Side: Recommended Videos */}
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" md={3.5}>
          <Typography color="#fff" variant="h6" fontWeight="bold" mb={2}>
            Recommended Videos
          </Typography>
          <Videos videos={videos} direction="column" />
        </Box>

      </Stack>
    </Box>
  );
};

export default VideoDetail;