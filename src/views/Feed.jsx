import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Videos from '../components/Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        if (data?.items) setVideos(data.items);
      })
      .catch((err) => console.error("Error fetching homepage feeds:", err));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, backgroundColor: '#0f0f0f', minHeight: '92vh' }}>
      {/* Left Sidebar Pane */}
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: "1px solid #272727", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#606060', display: { xs: 'none', md: 'block' } }}>
          © 2026 YouTube Clone
        </Typography>
      </Box>

      {/* Right Content Stream Container Panel */}
      <Box p={3} sx={{ overflowY: "auto", height: "90vh", flex: 2, width: '100%' }}>
        <Typography variant="h4" fontWeight="bold" mb={3} sx={{ color: '#fff' }}>
          {selectedCategory} <span style={{ color: "#ff0000" }}>Videos</span>
        </Typography>

        {/* 💡 This wrapper ensures the inner layout grid expands fully and drops cards down vertically */}
        <Box sx={{ width: '100%', display: 'block' }}>
          <Videos videos={videos} direction="row" />
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;