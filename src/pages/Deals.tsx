import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Chip,
  Rating,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { LocalOffer } from '@mui/icons-material';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  discount: number;
  description?: string;
  specifications?: Record<string, string>;
  originalPrice?: number;
}

const Deals: React.FC = () => {
  const theme = useTheme();
  
  // Products on sale
  const dealsProducts: Product[] = [
    {
      id: 5,
      name: 'Samsung 65" Class S90D Series OLED 4K UHD Smart Tizen TV (2024)',
      price: 1399.99,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6576/6576598_sd.jpg',
      category: 'TVs',
      rating: 4.9,
      reviews: 312,
      discount: 18,
      description: 'Experience stunning picture quality with this 65" OLED 4K UHD TV featuring Quantum HDR OLED+, Motion Xcelerator Turbo Pro 144Hz, built-in Alexa, and Samsung Gaming Hub. Model: QN65S90DAFXZA',
      originalPrice: 1699.99
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.error.dark} 0%, ${theme.palette.error.main} 50%, ${theme.palette.error.light} 100%)`,
          color: 'white',
          py: 8,
          mb: 6,
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  mb: 2
                }}
              >
                Today's Deals
              </Typography>
              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{
                  opacity: 0.9,
                  mb: 4,
                  fontWeight: 400
                }}
              >
                Limited-time offers on premium electronics
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                <LocalOffer sx={{ fontSize: 120, opacity: 0.2 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Deals Products */}
      <Container maxWidth="xl" sx={{ mb: 8, flex: 1 }}>
        <Grid container spacing={3}>
          {dealsProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.2s ease-in-out',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    borderColor: 'error.main'
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      objectFit: (product.id === 1 || product.id === 3 || product.id === 4 || product.id === 5) ? 'contain' : 'cover',
                      backgroundColor: (product.id === 1 || product.id === 3 || product.id === 4 || product.id === 5) ? 'grey.50' : 'transparent',
                      p: (product.id === 1 || product.id === 3 || product.id === 4 || product.id === 5) ? 2 : 0
                    }}
                  />
                  <Chip
                    label={`${product.discount}% OFF`}
                    color="error"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      fontWeight: 600,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </Box>
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h3"
                      sx={{ 
                        fontWeight: 600,
                        mb: 1
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating 
                        value={product.rating} 
                        precision={0.5} 
                        readOnly 
                        size="small"
                        sx={{ color: 'warning.main' }}
                      />
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ ml: 1 }}
                      >
                        ({product.reviews})
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      gutterBottom
                      sx={{ mb: 2 }}
                    >
                      {product.category}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      paragraph
                      sx={{ mb: 2 }}
                    >
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 1 }}>
                      <Typography 
                        variant="h5" 
                        color="error" 
                        sx={{ 
                          mr: 1,
                          fontWeight: 600
                        }}
                      >
                        ${product.price}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ 
                          textDecoration: 'line-through',
                          opacity: 0.7
                        }}
                      >
                        ${product.originalPrice}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    component={Link}
                    to={`/products/${product.id}`}
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{ 
                      mt: 3,
                      borderRadius: 1.5,
                      textTransform: 'none',
                      fontWeight: 500,
                      py: 1.5
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Deals; 