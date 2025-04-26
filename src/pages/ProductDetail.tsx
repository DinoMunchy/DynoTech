import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  TextField,
  Rating,
  Paper,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { 
  ArrowBackIos as ArrowBackIosIcon, 
  ArrowForwardIos as ArrowForwardIosIcon,
  ImageNotSupported as ImageNotSupportedIcon
} from '@mui/icons-material';
import { addItem } from '../store/cartSlice';
import { AppDispatch } from '../store';

interface ProductSpecs {
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
}

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

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

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // All products data
  const products: Product[] = [
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
      specifications: {
        display: 'OLED 4K UHD (3840 x 2160)',
        processor: 'Neural Quantum Processor',
        features: 'Quantum HDR OLED+, Motion Xcelerator Turbo Pro 144Hz',
        smartFeatures: 'Built-in Alexa, Samsung Gaming Hub, Tizen OS',
        model: 'QN65S90DAFXZA',
        year: '2024'
      },
      originalPrice: 1699.99
    },
    {
      id: 3,
      name: 'ASUS ROG Swift 32" QD-OLED UHD 240Hz G-SYNC FreeSync Gaming Monitor',
      price: 999.99,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6579/6579792_sd.jpg',
      category: 'Monitors',
      rating: 4.9,
      reviews: 187,
      discount: 0,
      description: 'Experience stunning visuals with this 32" QD-OLED gaming monitor featuring 4K UHD resolution, 240Hz refresh rate, G-SYNC and FreeSync Premium Pro, and HDR support.',
      specifications: {
        display: '32" QD-OLED',
        resolution: '4K UHD (3840 x 2160)',
        refreshRate: '240Hz',
        responseTime: '0.03ms',
        adaptiveSync: 'G-SYNC and FreeSync Premium Pro',
        hdr: 'HDR',
        ports: 'HDMI 2.1, DisplayPort 1.4',
        features: 'ASUS Aura Sync, GamePlus, GameVisual',
        model: 'PG32UCDM'
      },
      originalPrice: 999.99
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

  // Find the product based on the URL parameter
  const product = products.find(p => p.id === parseInt(id || '1')) || products[0];

  // Product images based on the current product
  const productImages = [product.image];

  // Fallback image in case the primary images fail to load
  const fallbackImage = product.image;

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: productImages[currentImageIndex],
      quantity: quantity,
    }));
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
    // Reset image error state when changing images
    setImageError(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
    // Reset image error state when changing images
    setImageError(false);
  };

  const handleImageError = () => {
    console.log('Image failed to load, trying fallback');
    // Try to load the fallback image
    const imgElement = document.querySelector(`img[src="${productImages[currentImageIndex]}"]`) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = fallbackImage;
      // If the fallback also fails, show the error UI
      imgElement.onerror = () => {
        setImageError(true);
      };
    } else {
      setImageError(true);
    }
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="xl" sx={{ py: 4, flex: 1 }}>
        <Grid container spacing={4}>
          {/* Product Image Carousel */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', mb: 2 }}>
              {imageError ? (
                <Box
                  sx={{
                    width: '100%',
                    height: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'grey.100',
                    borderRadius: 2,
                    boxShadow: 3,
                    mb: 2
                  }}
                >
                  <ImageNotSupportedIcon sx={{ fontSize: 60, color: 'grey.400', mb: 2 }} />
                  <Typography variant="body1" color="text.secondary">
                    Image not available
                  </Typography>
                </Box>
              ) : (
                <Box
                  component="img"
                  src={productImages[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                    mb: 2
                  }}
                />
              )}
              
              {/* Navigation Arrows */}
              <IconButton
                onClick={handlePrevImage}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 16,
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                  zIndex: 1
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>
              
              <IconButton
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 16,
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                  zIndex: 1
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
              
              {/* Image Indicators */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  mt: 1,
                  gap: 1
                }}
              >
                {productImages.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      bgcolor: currentImageIndex === index ? 'primary.main' : 'grey.300',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: currentImageIndex === index ? 'primary.dark' : 'grey.400',
                      }
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Product Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={product.rating} precision={0.5} readOnly />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                ({product.reviews} reviews)
              </Typography>
            </Box>
            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price}
              {product.discount > 0 && product.originalPrice && (
                <Typography 
                  component="span" 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    ml: 1, 
                    textDecoration: 'line-through',
                    fontSize: '0.8em'
                  }}
                >
                  ${product.originalPrice}
                </Typography>
              )}
            </Typography>
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Quantity:
              </Typography>
              <TextField
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                inputProps={{ min: 1 }}
                sx={{ width: 100 }}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleAddToCart}
              sx={{ mb: 3 }}
            >
              Add to Cart
            </Button>

            {/* Specifications */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Specifications
              </Typography>
              <Grid container spacing={2}>
                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                  <Grid item xs={12} key={key}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: 'divider'
                    }}>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Typography>
                      <Typography variant="body1">
                        {value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetail; 