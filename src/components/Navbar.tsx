import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Badge,
  InputBase,
  Box,
  Menu,
  MenuItem,
  Container,
  useTheme,
  alpha
} from '@mui/material';
import { 
  ShoppingCart, 
  Computer, 
  Tv, 
  Monitor, 
  Memory,
  Search,
  Person,
  KeyboardArrowDown
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'text.primary', boxShadow: 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{ 
              flexGrow: 0,
              textDecoration: 'none', 
              color: 'primary.main',
              fontWeight: 'bold',
              mr: 4
            }}
          >
            DynoTech
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: alpha(theme.palette.common.black, 0.05),
              borderRadius: 1,
              p: '2px 4px',
              mr: 2
            }}
          >
            <InputBase
              placeholder="Search products..."
              sx={{ ml: 1, flex: 1 }}
            />
            <IconButton sx={{ p: '10px' }}>
              <Search />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              color="inherit"
              component={Link}
              to="/products"
              startIcon={<Computer />}
              endIcon={<KeyboardArrowDown />}
              onClick={handleMenuOpen}
            >
              Categories
            </Button>
            
            <Button
              color="inherit"
              component={Link}
              to="/deals"
              startIcon={<Memory />}
            >
              Deals
            </Button>

            <IconButton
              color="inherit"
              component={Link}
              to="/account"
            >
              <Person />
            </IconButton>

            <IconButton
              color="inherit"
              component={Link}
              to="/cart"
            >
              <Badge badgeContent={0} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Categories Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ mt: 1 }}
      >
        <MenuItem component={Link} to="/products?category=PCs" onClick={handleMenuClose}>
          <Computer sx={{ mr: 1 }} /> PCs
        </MenuItem>
        <MenuItem component={Link} to="/products?category=Components" onClick={handleMenuClose}>
          <Memory sx={{ mr: 1 }} /> Components
        </MenuItem>
        <MenuItem component={Link} to="/products?category=TVs" onClick={handleMenuClose}>
          <Tv sx={{ mr: 1 }} /> TVs
        </MenuItem>
        <MenuItem component={Link} to="/products?category=Monitors" onClick={handleMenuClose}>
          <Monitor sx={{ mr: 1 }} /> Monitors
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar; 