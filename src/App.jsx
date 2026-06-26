import { HashRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './views/Feed';
import VideoDetail from './views/VideoDetail';
import SearchFeed from './views/SearchFeed';

const App = () => (
  <HashRouter> 
    <Box sx={{ backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </HashRouter>
);

export default App;
