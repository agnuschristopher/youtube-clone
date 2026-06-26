import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from '../components/Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        if (data?.items) setVideos(data.items);
      })
      .catch((err) => console.error(err));
  }, [searchTerm]);

  return (
    // 👈 Using display flex with column direction ensures content stacks vertically down the page
    <Box p={3} sx={{ display: 'flex', flexDirection: 'column', overflowY: "auto", minHeight: "90vh", flex: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={3} sx={{ color: '#fff' }}>
        Search Results for: <span style={{ color: "#ff0000" }}>{searchTerm}</span>
      </Typography>
      
      {/* Container box to house the videos component */}
      <Box sx={{ width: '100%' }}>
        <Videos videos={videos} direction="row" />
      </Box>
    </Box>
  );
};

export default SearchFeed;