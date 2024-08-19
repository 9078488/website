import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';



function AfterLogin  () {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('access_token');
    navigate('/signin');
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Welcome! You are logged in.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1">
            This is the page you see after successfully logging in.
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};



function Private() {
  const accessToken = localStorage.getItem('access_token');
  const navigate = useNavigate();

  useEffect(() => {
    if(!accessToken) {
      navigate('/signin');
      return;
    }
  }, [accessToken, navigate]);

  
  return <AfterLogin />;

}



export default Private;
