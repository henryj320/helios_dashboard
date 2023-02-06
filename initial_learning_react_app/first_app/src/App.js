import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { borderRadius } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemProperties = {
  borderRadius: 20,
  boxShadow: 4,
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Box 
          // sx={{
          //   p: 2,
          //   bgcolor: 'background.default',
          //   display: 'grid',
          //   gridTemplateColumns: { md: '1fr 1fr' },
          // }}
          sx={{
            height: '100%'
          }}
        >
          <Grid container spacing={4}
            
          >
            <Grid item xs={8}>
              <Item
                sx={ItemProperties}
              ><h1>Whats up</h1></Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={ItemProperties}><h2>Hey there</h2></Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
              <Item sx={ItemProperties}>xs=8</Item>
            </Grid>
          </Grid>
        </Box>

        <br /><br /><br /><br /><br /><br /><br /><br />

        <Box>
          <Grid container spacing={3}>

              <Grid item xs={4}
                sx={{
                  backgroundColor: 'Red',
                  borderRadius: 5,
                  border: '1px solid blue',
                  paddingBottom: '3%',
                  mt: '3.33%',
                }}
              >

                <Grid container xs={12} spacing={1}
                  sx={{
                    pl: '5%',
                    pr: '5%'
                  }}
                >
                  <Grid item xs={12}>
                    <Item>Hey 1</Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>Hey 2</Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>Hey 3</Item>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={8} sx={{border: '1px solid green'}}>

                <Grid container xs={12} spacing={4}>
                  <Grid item xs={6}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={8}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={3}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={9}>
                    <Item>Hey</Item>
                  </Grid>
                </Grid>

              </Grid>

          </Grid>
        </Box>


        <br /><br /><br /><br /><br /><br /><br /><br />


        <Box id="mainBox">
          <Grid container spacing={3}>

              <Grid item xs={4} sx={{border: '1px solid blue'}}
              >

                <Grid container direction="column" xs={12} spacing={2} alignItems="center"
                >
                      

                        <Grid item xs={3}
                          sx={{
                            width: '80%'
                          }}
                        >
                          <Item>Hey 1</Item>
                        </Grid>
                        <br />
                        <Grid item xs={3}>
                          <Item>Hey 2</Item>
                        </Grid>
                        <br />
                        <Grid item xs={3}>
                          <Item>Hey 3</Item>
                        </Grid>
                        <br />
                      </Grid>
              </Grid>

              <Grid item xs={8} sx={{border: '1px solid green'}}>

                <Grid container xs={12} spacing={4}>
                  <Grid item xs={6}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={8}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={3}>
                    <Item>Hey</Item>
                  </Grid>
                  <Grid item xs={9}>
                    <Item>Hey</Item>
                  </Grid>
                </Grid>

              </Grid>

          </Grid>
        </Box>
      </div>
    );
  }
}

export default App;
