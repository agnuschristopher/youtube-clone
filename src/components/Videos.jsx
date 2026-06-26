import { Grid, Box, Typography } from '@mui/material';
import VideoCard from './VideoCard';

const Videos = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return (
      <Typography color="gray" variant="body1" p={2}>
        Loading video layout grid...
      </Typography>
    );
  }

  return (
    // 💡 Switching from Stack to Grid completely destroys any single-line horizontal flex rows
    <Grid 
      container 
      spacing={2} 
      sx={{ 
        width: '100%', 
        margin: 0,
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {videos.map((item, idx) => (
        <Grid 
          item 
          key={idx} 
          xs={12}      // 1 full-width card per row on mobile (Vertical)
          sm={6}       // 2 cards per row on small tablets
          md={4}       // 3 cards per row on standard screens
          lg={3}       // 4 cards per row on wide monitors
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: '358px' } }}>
            {item.id && <VideoCard video={item} />}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;