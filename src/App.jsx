import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './views/Feed';
import VideoDetail from './views/VideoDetail';
import SearchFeed from './views/SearchFeed';

const App = () => (
  // 👈 Crucial: Setting the repository base path
  <BrowserRouter basename="/youtube-clone"> 
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
