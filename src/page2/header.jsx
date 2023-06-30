import React from 'react';
import { Container, Grid, IconButton, Typography, Switch } from '@mui/material';
import { styled } from '@mui/system';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const HeaderContainer = styled('header')({
  width: '100%',
  margin: '5px 0',
  backgroundColor: '#EEA47F',
  padding: '16px',
  borderRadius: 4,
});

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h4" display="flex" alignItems="center">
              <CurrencyExchangeIcon style={{ marginRight: '10px', fontSize: '27px', marginLeft:"2rem" , padding:'2px'}} />
              <span>Currency Converter</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
