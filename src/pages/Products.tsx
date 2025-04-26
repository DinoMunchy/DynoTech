import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  SelectChangeEvent,
  Rating,
  Chip,
  Paper,
  Divider,
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
  useTheme
} from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { FilterList, LocalOffer, Memory } from '@mui/icons-material';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  discount: number;
  inStock: boolean;
}

const Products: React.FC = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: 'Gaming PC Pro',
      price: 1499.99,
      image: '/images/products/gaming-pc.jpg',
      category: 'PCs',
      description: 'High-performance gaming PC with RTX 4080',
      rating: 4.5,
      reviews: 128,
      discount: 15,
      inStock: true
    },
    {
      id: 2,
      name: '4K Smart TV',
      price: 799.99,
      image: '/images/products/4k-tv.jpg',
      category: 'TVs',
      description: '65-inch 4K Smart TV with HDR',
      rating: 4.8,
      reviews: 256,
      discount: 10,
      inStock: true
    },
    {
      id: 3,
      name: 'Ultra-wide Monitor',
      price: 499.99,
      image: '/images/products/ultrawide-monitor.jpg',
      category: 'Monitors',
      description: '34-inch Curved Ultra-wide Monitor',
      rating: 4.6,
      reviews: 89,
      discount: 20,
      inStock: true
    },
    {
      id: 4,
      name: 'RTX 4080 Graphics Card',
      price: 899.99,
      image: 'https://m.media-amazon.com/images/I/71m9FJCubXL._AC_SL1500_.jpg',
      category: 'Components',
      description: 'NVIDIA GeForce RTX 4080 16GB',
      rating: 4.9,
      reviews: 167,
      discount: 5,
      inStock: false
    }
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearchParams({ search: value, category: selectedCategory });
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelectedCategory(value);
    setSearchParams({ search: searchTerm, category: value });
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
  };

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Products
        </Typography>

        {/* Search and Sort */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search Products"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                label="Sort By"
                onChange={handleSortChange}
              >
                <MenuItem value="featured">Featured</MenuItem>
                <MenuItem value="price-low">Price: Low to High</MenuItem>
                <MenuItem value="price-high">Price: High to Low</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* Filters Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FilterList sx={{ mr: 1 }} />
                <Typography variant="h6">Filters</Typography>
              </Box>
              
              <Typography variant="subtitle1" gutterBottom>
                Category
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                    />
                  }
                  label="All Categories"
                />
                {['PCs', 'TVs', 'Monitors', 'Components'].map((cat) => (
                  <FormControlLabel
                    key={cat}
                    control={
                      <Checkbox
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                      />
                    }
                    label={cat}
                  />
                ))}
              </FormGroup>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle1" gutterBottom>
                Price Range
              </Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={2000}
                step={100}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">${priceRange[0]}</Typography>
                <Typography variant="body2">${priceRange[1]}</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Product Grid */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {filteredProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'transform 0.2s ease-in-out',
                        boxShadow: 3
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
                          objectFit: product.id === 4 ? 'contain' : 'cover',
                          backgroundColor: product.id === 4 ? 'grey.100' : 'transparent',
                          p: product.id === 4 ? 2 : 0
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
                            right: 10
                          }}
                        />
                      )}
                      {!product.inStock && (
                        <Chip
                          label="Out of Stock"
                          color="default"
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 10,
                            left: 10
                          }}
                        />
                      )}
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {product.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Rating value={product.rating} precision={0.5} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({product.reviews})
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {product.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 1 }}>
                        <Typography variant="h6" color="primary" sx={{ mr: 1 }}>
                          ${product.price}
                        </Typography>
                        {product.discount > 0 && (
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ textDecoration: 'line-through' }}
                          >
                            ${(product.price * (1 + product.discount/100)).toFixed(2)}
                          </Typography>
                        )}
                      </Box>
                      <Button
                        component={Link}
                        to={`/products/${product.id}`}
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? 'View Details' : 'Out of Stock'}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Products; 