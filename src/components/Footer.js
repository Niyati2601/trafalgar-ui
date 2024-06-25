import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/logo.png';
import element1 from '../assets/element-1.png';

const Footer = () => {
  return (
    <Box
    sx={{
      background: 'linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)',
      padding: '40px 20px',
      marginTop: 10,
      color: '#fff',
      position:'relative',
    }}
  >
     <img src={element1} alt='element1' style={{ position: 'absolute', top: 0, left: 0, marginLeft: -10, marginTop: 150, zIndex: 1, overflow:'hidden' }} />
     <img src={element1} alt='element1' style={{ position: 'absolute', top: 0, right: 40, zIndex: 1, marginTop:-80, overflow:'hidden' }} />
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={3}>
        <Box display="flex" alignItems="center">
          <img src={logo} alt="Logo" />
        </Box>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          ©Trafalgar PTY LTD 2020. All rights reserved
        </Typography>
      </Grid>

      <Grid item xs={12} md={2}>
        <Typography variant="h6" component="div">
          Company
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: 1 }}>
            About
          </Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: 1 }}>
            Testimonials
          </Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: 1 }}>
            Find a doctor
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            Apps
          </Link>
        </Box>
      </Grid>

      <Grid item xs={12} md={2}>
        <Typography variant="h6" component="div">
          Region
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: 1 }}>
            Indonesia
          </Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: 1 }}>
            Singapore
          </Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: 1 }}>
            Hongkong
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            Canada
          </Link>
        </Box>
      </Grid>

      <Grid item xs={12} md={2}>
        <Typography variant="h6" component="div">
          Help
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: 1 }}>
            Help center
          </Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: 1 }}>
            Contact support
          </Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: 1 }}>
            Instructions
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            How it works
          </Link>
        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Footer