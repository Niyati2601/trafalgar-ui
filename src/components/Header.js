import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png';

const drawerWidth = 240;
const navItems = ['Home', 'Doctor', 'Apps', 'Testimonials', 'About Us'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={logo} alt='logo' />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex', width:'60vw', justifyContent:'center', margin:'auto'}} >
          <CssBaseline />
          <AppBar component="nav" sx={{ boxShadow: '0 0 0 0' }}>
              <Toolbar sx={{ backgroundColor: 'white', padding: 5 }}>
                  <IconButton
                      color="black"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2, display: { sm: 'none' } }}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Box component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                      <img src={logo} alt='logo' />
                  </Box>
                  <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}>
                      {navItems.map((item) => (
                          <Button key={item} sx={{ color: '#1F1534' }}>
                              {item}
                          </Button>
                      ))}
                  </Box>
              </Toolbar>
          </AppBar>
          <nav>
              <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                      display: { xs: 'block', sm: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
              >
                  {drawer}
              </Drawer>
          </nav>
      </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
