import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import { Icon } from 'react-icons-kit';
import { instagram } from 'react-icons-kit/fa/instagram';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { github } from 'react-icons-kit/fa/github';
import { Transition } from 'react-transition-group';

const duration = 300; // Duration of the animation in milliseconds

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

function FixedContainer() {
  const [activeItem, setActiveItem] = useState(null); // State variable to track active grid item

  const boxStyle = {
    backgroundColor: '#f8c2b1',
    marginTop: '9rem',
    textAlign: 'center',
    color: '#222',
    minHeight: '23rem',
    borderRadius: 2,
    padding: '2rem 2rem',
    boxShadow: '-16px 11px 13px -7px rgba(0,0,0,0.5)',
    position: 'relative',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const footerStyle = {
    backgroundColor: 'gray',
    height: '10%',
    width: '100%',
    display: 'flex',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '5rem',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
  };

  const textStyle = {
    marginTop: '0.5rem',
    fontSize: '1rem',
  };

  const lastBoxStyle = {
    backgroundColor: '#cfe8fc',
    height: '21rem',
    padding: '2rem',
    margin: '0 2rem',
    borderRadius: 7,
    boxShadow: '-14px 10px 15px -3px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/s.i.v.a__s.i.v.a.n.e.s.h?igshid=MzNlNGNkZWQ4Mg==', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/sivaneshwaran-r-n-31220121b', '_blank');
  };

  return (
    <React.Fragment>
     <CssBaseline />
      <Box sx={boxStyle}>
       <Grid container spacing={2} width="100%">
            
         <Grid item xs={12} md={4}>
            <div id='about'>
             <Box sx={{ ...lastBoxStyle, maxWidth: '40rem' }}>
              <div style={{ maxHeight: '100%', overflow: 'auto' }}>
                <Typography variant="h5">ABOUT US</Typography>
                <Typography variant="body1">
                  The concept may seem small, and the tech we used here already exists, but our ultimate aim is to create a product that can be used by our fellow friends.
                </Typography>
              </div>
             </Box>
            </div>
          </Grid>
        
        <Grid item xs={12} md={4}>
         <div id='instruction'>
            <Box sx={{ ...lastBoxStyle, maxWidth: '40rem' }} onClick={() => handleItemClick(1)}>
              <div style={{ maxHeight: '100%', overflow: 'auto' }}>
                <Typography variant="h5">Step by step instructions</Typography>
                <Typography variant="body1">
                  <ol>
                    <li>Select the base currency.</li>
                    <li>Choose the conversion currency.</li>
                    <li>Enter the amount you want to convert.</li>
                    <li>View the conversion result.</li>
                    <li>Use the "Swap" button to interchange base and conversion currencies.</li>
                  </ol>
                </Typography>
              </div>
            </Box>
          
        </div>
        </Grid>
          
          <Grid item xs={12} md={4}>
             <div id='contact'>
            <Box sx={{ ...lastBoxStyle, maxWidth: '40rem' }}>
              <div style={{ maxHeight: '100%', overflow: 'auto' }}>
                <Typography variant="h5">CONTACT US</Typography>
                <Typography variant="body1">
                  Contact information goes here...
                </Typography>
              </div>
            </Box>
            </div>
          </Grid>
        
            
        </Grid>

        <Box sx={footerStyle}>
          <Transition in={true} timeout={duration}>
            {(state) => (
              <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
                <div style={iconContainerStyle}>
                  <Icon
                    icon={instagram}
                    size={32}
                    style={{
                      marginRight: '4rem',
                      color: activeItem === 3 ? 'blue' : 'inherit',
                      cursor: 'pointer',
                    }}
                    onClick={handleInstagramClick}
                  />
                  <Icon
                    icon={linkedin}
                    size={32}
                    style={{
                      marginRight: '4rem',
                      color: activeItem === 3 ? 'blue' : 'inherit',
                      cursor: 'pointer',
                    }}
                    onClick={handleLinkedinClick}
                  />
                  <Icon
                    icon={github}
                    size={32}
                    style={{
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                    onClick={() => window.open('https://github.com/', '_blank')}
                  />
                </div>
              </div>
            )}
          </Transition>
          <Typography variant="body1" sx={textStyle}>
            Developed by Sivaneshwaran R N. 😊
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default FixedContainer;
