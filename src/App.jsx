import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './views/Feed';
import VideoDetail from './views/VideoDetail';
import SearchFeed from './views/SearchFeed';

// Create YouTube's official sleek dark mode color palette
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f0f0f', // YouTube pitch black background
      paper: '#0f0f0f',
    },
    primary: {
      main: '#ff0000', // YouTube primary red branding color
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline guarantees normalization across different client web browsers */}
      <CssBaseline /> 
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
          {/* Navbar sits on top globally across all view routes */}
          <Navbar />
          <Routes>
            {/* Main Landing Page Home Feed */}
            <Route path="/" exact element={<Feed />} />
            
            {/* Watch/Video Player Page Dashboard */}
            <Route path="/video/:id" element={<VideoDetail />} />
            
            {/* Search Query Results Dashboard Feed */}
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;