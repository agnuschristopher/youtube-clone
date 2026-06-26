import { Stack } from '@mui/material';
import { Home, Code, MusicNote, SportsEsports, LiveTv } from '@mui/icons-material';

// Array of categories with corresponding Material UI icons
const categories = [
  { name: 'New', icon: <Home /> },
  { name: 'Coding', icon: <Code /> },
  { name: 'Music', icon: <MusicNote /> },
  { name: 'Gaming', icon: <SportsEsports /> },
  { name: 'Live', icon: <LiveTv /> },
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '92vh' },
      flexDirection: { md: 'column' },
      width: { md: '240px' },
      background: '#0f0f0f',
      pt: 1,
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
        style={{
          background: category.name === selectedCategory ? '#272727' : 'transparent',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          cursor: 'pointer',
          borderRadius: '10px',
          margin: '4px 12px',
          textAlign: 'left',
          fontSize: '14px',
          fontWeight: category.name === selectedCategory ? 'bold' : 'normal',
          transition: 'background 0.2s ease',
        }}
      >
        <span style={{ 
          color: category.name === selectedCategory ? '#fff' : '#ff0000', 
          display: 'flex', 
          alignItems: 'center' 
        }}>
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;