import { HashRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Feed from './views/Feed';
import VideoDetail from './views/VideoDetail';
import ChannelDetail from './views/ChannelDetail';
import SearchFeed from './views/SearchFeed';
import Navbar from './components/Navbar'; // or wherever your navbar is located

const App = () => (
  <HashRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </HashRouter>
);

export default App;