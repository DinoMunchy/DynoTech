import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your trusted source for high-quality electronics and computer components.
              We offer the latest technology at competitive prices.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: support@dynotech.com
              <br />
              Phone: (555) 123-4567
              <br />
              Address: 123 Tech Street, Silicon Valley, CA
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/products" color="inherit" display="block">
              Products
            </Link>
            <Link href="/cart" color="inherit" display="block">
              Cart
            </Link>
            <Link href="/checkout" color="inherit" display="block">
              Checkout
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} DynoTech. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 