import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  TextField,
  Divider,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { removeItem, updateQuantity, CartItem } from '../store/cartSlice';
import { RootState, AppDispatch } from '../store';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  const { items, total } = cart;

  const shipping = 10.00;
  const tax = total * 0.08; // 8% tax
  const finalTotal = total + shipping + tax;

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Shopping Cart
        </Typography>
        <Grid container spacing={4}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            {items.map((item: CartItem) => (
              <Card key={item.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4} sm={3}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt={item.name}
                      />
                    </Grid>
                    <Grid item xs={8} sm={9}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body1" color="text.secondary" gutterBottom>
                        ${item.price}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        >
                          <Remove />
                        </IconButton>
                        <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        >
                          <Add />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleRemoveItem(item.id)}
                          sx={{ ml: 2 }}
                        >
                          <Delete />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Grid>

          {/* Order Summary */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>
                <Box sx={{ my: 2 }}>
                  <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                    <Grid item>
                      <Typography>Subtotal</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>${total.toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                    <Grid item>
                      <Typography>Shipping</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>${shipping.toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                    <Grid item>
                      <Typography>Tax</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>${tax.toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 2 }} />
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">Total</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">${finalTotal.toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cart; 