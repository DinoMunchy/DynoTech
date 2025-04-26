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
  Paper,
  Chip,
  Rating,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { LocalOffer, Computer, Tv, Monitor, Memory } from '@mui/icons-material';

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

const Home: React.FC = () => {
  const theme = useTheme();
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'iBUYPOWER Y40 Pro Gaming Desktop',
      price: 3099.99,
      image: 'https://pisces.bbystatic.com/image/BestBuy_US/images/products/6616/6616860_sd.jpg',
      category: 'PCs',
      rating: 4.8,
      reviews: 156,
      discount: 0,
      description: 'High-performance gaming PC featuring AMD Ryzen 9 9900X processor and NVIDIA GeForce RTX 5080 graphics.',
      specifications: {
        processor: 'AMD Ryzen 9 9900X',
        graphics: 'NVIDIA GeForce RTX 5080 16GB',
        memory: '32GB DDR5 RGB',
        storage: '2TB NVMe SSD',
        powerSupply: '1000 Watt - High Power 80 PLUS Gold PSU',
        warranty: '3 Year Standard Warranty (3 Year Labor + 2 Year Parts)'
      },
      originalPrice: 3099.99
    },
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
    },
    {
      id: 3,
      name: 'ASUS ROG Swift 32" QD-OLED UHD 240Hz G-SYNC FreeSync Gaming Monitor',
      price: 1085.99,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6579/6579792_sd.jpg',
      category: 'Monitors',
      rating: 4.9,
      reviews: 187,
      discount: 0,
      description: 'Experience stunning visuals with this 32" QD-OLED gaming monitor featuring 4K UHD resolution, 240Hz refresh rate, G-SYNC and FreeSync Premium Pro, and HDR support.',
      originalPrice: 1085.99
    },
    {
      id: 4,
      name: 'ASUS TUF Gaming NVIDIA GeForce RTX 5080 16GB GDDR7 Graphics Card',
      price: 1599.99,
      image: 'https://pisces.bbystatic.com/image/BestBuy_US/images/products/6613/6613333_sd.jpg',
      category: 'Components',
      rating: 4.9,
      reviews: 167,
      discount: 0,
      description: 'Experience next-level gaming with the ASUS TUF Gaming RTX 5080. Featuring 16GB of GDDR7 memory, PCI Express 5.0, and advanced cooling technology for optimal performance.',
      specifications: {
        memory: '16GB GDDR7',
        interface: 'PCI Express 5.0',
        cooling: 'Axial-tech fan design with 0dB technology',
        powerConnector: '2x 8-pin',
        recommendedPSU: '850W',
        dimensions: '11.8" x 5.1" x 2.5"',
        warranty: '3 years'
      },
      originalPrice: 1599.99
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          py: 10,
          mb: 8,
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
          <Grid container spacing={6} alignItems="center">
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
                Welcome to TechStore
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
                Your One-Stop Shop for Premium Electronics
              </Typography>
              <Button
                component={Link}
                to="/products?category=all"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ 
                  mt: 2,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: '0 4px 14px 0 rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px 0 rgba(0,0,0,0.25)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Shop Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)'
                  },
                  bgcolor: 'grey.50',
                  p: 3
                }}
              >
                <Box
                  component="img"
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6576/6576598_sd.jpg"
                  alt="Featured Product - Samsung TV"
                  sx={{
                    maxWidth: '80%',
                    maxHeight: '80%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Deals Section */}
      <Container maxWidth="xl" sx={{ mb: 8, flex: 1 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 4,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: 60,
              height: 3,
              bgcolor: 'error.main',
              borderRadius: 1.5
            }
          }}
        >
          <LocalOffer sx={{ mr: 1, color: 'error.main' }} />
          <Typography 
            variant="h4" 
            component="h2"
            sx={{ fontWeight: 600 }}
          >
            Today's Deals
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
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
                    borderColor: 'primary.main'
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      objectFit: (product.id === 1 || product.id === 3 || product.id === 4 || product.id === 5) ? 'contain' : 'cover',
                      backgroundColor: (product.id === 1 || product.id === 3 || product.id === 4 || product.id === 5) ? 'grey.50' : 'transparent',
                      p: (product.id === 1 || product.id === 3 || product.id === 4 || product.id === 5) ? 2 : 0
                    }}
                  />
                  {product.discount > 0 && (
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
                  )}
                </Box>
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography 
                      gutterBottom 
                      variant="h6" 
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
                      sx={{ mb: 1 }}
                    >
                      {product.category}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 1 }}>
                      <Typography 
                        variant="h6" 
                        color="primary" 
                        sx={{ 
                          mr: 1,
                          fontWeight: 600
                        }}
                      >
                        ${product.price}
                      </Typography>
                      {product.discount > 0 && product.originalPrice && (
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ 
                            textDecoration: 'line-through',
                            opacity: 0.7
                          }}
                        >
                          ${product.originalPrice}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Button
                    component={Link}
                    to={`/products/${product.id}`}
                    variant="contained"
                    fullWidth
                    sx={{ 
                      mt: 2,
                      borderRadius: 1.5,
                      textTransform: 'none',
                      fontWeight: 500
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

      {/* Featured Categories */}
      <Box sx={{ 
        bgcolor: 'background.paper', 
        py: 8,
        position: 'relative',
        width: '100%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)'
        }
      }}>
        <Container maxWidth="xl">
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 6,
              fontWeight: 600,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 3,
                bgcolor: 'primary.main',
                borderRadius: 1.5
              }
            }}
          >
            Shop by Category
          </Typography>
          <Grid container spacing={4}>
            {[
              { 
                name: 'PCs', 
                icon: <Computer sx={{ fontSize: 60 }} />, 
                color: '#3f51b5',
                gradient: 'linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%)'
              },
              { 
                name: 'TVs', 
                icon: <Tv sx={{ fontSize: 60 }} />, 
                color: '#f44336',
                gradient: 'linear-gradient(135deg, #f44336 0%, #ef5350 100%)'
              },
              { 
                name: 'Monitors', 
                icon: <Monitor sx={{ fontSize: 60 }} />, 
                color: '#4caf50',
                gradient: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)'
              },
              { 
                name: 'Components', 
                icon: <Memory sx={{ fontSize: 60 }} />, 
                color: '#ff9800',
                gradient: 'linear-gradient(135deg, #ff9800 0%, #ffa726 100%)'
              }
            ].map((category) => (
              <Grid item key={category.name} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                      borderColor: category.color,
                      '& .category-icon': {
                        color: category.color,
                        transform: 'scale(1.1)'
                      },
                      '& .category-name': {
                        color: category.color
                      }
                    }
                  }}
                  component={Link}
                  to={`/products?category=${category.name}`}
                  elevation={0}
                >
                  <Box 
                    className="category-icon"
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      transition: 'all 0.3s ease',
                      p: 2,
                      borderRadius: '50%',
                      bgcolor: 'grey.50'
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography 
                    className="category-name"
                    variant="h6" 
                    component="h3" 
                    align="center" 
                    fontWeight="medium"
                    sx={{
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {category.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 