import { useState } from "react";
import { Stack, IconButton, Typography, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Handles submitting the search term and navigating to your SearchFeed view
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm(""); // Clears search field input after hitting enter
    }
  };

  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ 
        position: "sticky", 
        background: "#0f0f0f", 
        top: 0, 
        justifyContent: "space-between",
        zIndex: 100
      }}
    >
      {/* Left Side: Navigation triggers */}
      <Stack direction="row" alignItems="center" gap={1}>
        <IconButton component={Link} to="/" sx={{ color: "#fff", p: "10px" }}>
          <MenuIcon />
        </IconButton>
        
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: "5px" }}>
          <span style={{ fontSize: "24px", color: "#ff0000" }}>▶</span>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff", letterSpacing: "-1px" }}>
            YouTube
          </Typography>
        </Link>
      </Stack>

      {/* Center: Inline Embedded Search Engine Element */}
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: '1px solid #303030',
          pl: 2,
          boxShadow: 'none',
          mr: { sm: 5 },
          backgroundColor: '#121212',
          display: 'flex',
          alignItems: 'center',
          width: { xs: '200px', sm: '400px' }
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            color: '#fff',
            width: '100%',
            padding: '8px 0'
          }}
        />
        <IconButton type="submit" sx={{ p: '10px', color: '#aaaaaa' }}>
          <SearchIcon />
        </IconButton>
      </Paper>

      {/* Right Side: Navigation Badges */}
      <Stack direction="row" alignItems="center" gap={{ xs: 1, md: 2 }} sx={{ color: "#fff" }}>
        <IconButton sx={{ color: "#fff", display: { xs: "none", sm: "inline-flex" } }}>
          <VideoCallIcon />
        </IconButton>
        <IconButton sx={{ color: "#fff", display: { xs: "none", sm: "inline-flex" } }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}>
          <AccountCircleIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;