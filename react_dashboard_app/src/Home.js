import React from 'react'
import Sidebar from './components/Sidebar'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import logo from './assets/images/flask_favicon.png'
import { fontSize } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ItemHeaderProperties = {
    position: 'relative',
    textAlign: {sm: 'center', md: 'left', lg: 'right'},
    width: '75%',
    left: {sm: '1rem', md: '1rem', lg: '3rem', xl: '4rem'},
    top: {sm: '5.3rem', md: '4.6rem', lg: '4.9rem', xl: '6.4rem'},
    border: 0,
    fontSize: {sm: 10, md: 12, lg: 13, xl: 18},
    boxShadow: 0,
    "&:hover": {
        // Add what happens on hover
        cursor: 'pointer'
    },
    background: 'none',
}

const ItemImageProperties = {
    display: {sm: 'none', md: 'none', lg: 'block'},
    width: {sm: '1rem', md: '1rem', lg: '4rem', xl: '6rem'},
    height: {sm: '1rem', md: '1rem', lg: '4rem', xl: '6rem'},
    position: 'relative',
    left: {sm: '1rem', lg: '1.5rem'},
    top: {sm: '-14.5rem', md: '-9rem', lg: '-11.5rem', xl: '-13rem'},
    borderRadius: 2,
    boxShadow: 2,
    border: {xs: '1px solid lightgrey', sm: '1px solid red', md: '1px solid green', lg: '1px solid blue', xl: '1px solid purple', xxl: '1px solid yellow'},
    zIndex: 0,
    background: 'lightblue',
}

const ItemProperties = {
    borderRadius: 2,
    boxShadow: 5,
    border: '1px solid lightgrey',
    minHeight: {sm: '30px', md: '80px', lg: '80px'},
    paddingTop: {sm: '35%', md: '30%', lg: '23%'},
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    fontSize: {sm: 0, md: 13, lg: 14, xl: 14},
    background:  'linear-gradient(to right bottom, lightgrey, #F5F5F5)',
    "&:hover": {
        // Add what happens on hover
        cursor: 'pointer',
        background: 'linear-gradient(to right bottom, grey, lightgrey)'
    },
}

export const Home = () => {
 
    return (
        <div>
            <div >
                <Grid container spacing={4} sx={{
                    marginLeft: '5%',
                    maxWidth: '90%',
                    marginRight: '5%',
                    gap: 2
                }}>

                    <Grid item xs={3.7} md={3.7} lg={3.8}>
                        <Item sx={ItemHeaderProperties}>
                            <h2>Muscle Checker</h2>
                        </Item>
                        <Item sx={ItemProperties}>
                            <hr></hr>
                            <p>Check which muscles you missed this week.</p>
                        </Item>
                        <Item sx={ItemImageProperties}>
                            <img src={logo} alt="Logo" id="firstImage"/>
                        </Item>
                    </Grid>

                    <Grid item xs={3.7} md={3.7} lg={3.8}>
                        <Item sx={ItemHeaderProperties}>
                            <h2>Gym Calendar</h2>
                        </Item>
                        <Item sx={ItemProperties}>
                            <hr></hr>
                            <p>Generate this week's workout plan.</p>
                        </Item>
                        <Item sx={ItemImageProperties}>
                            <img src={logo} alt="Logo" id="firstImage"/>
                        </Item>
                    </Grid>

                    <Grid item xs={3.7} md={3.7} lg={3.8}>
                        <Item sx={ItemHeaderProperties}>
                            <h2>GitHub</h2>
                        </Item>
                        <Item sx={ItemProperties}>
                            <hr></hr>
                            <p>A link to my GitHub Repositories.</p>
                        </Item>
                        <Item sx={ItemImageProperties}>
                            <img src={logo} alt="Logo" id="firstImage"/>
                        </Item>
                    </Grid>

                    {/* <Grid item xs={11.9}>
                        <Item sx={ItemHeaderProperties}>
                            <h2>GitHub</h2>
                        </Item>
                        <Item sx={ItemProperties}>
                            <hr></hr>
                            <p>A link to my GitHub Repositories.</p>
                        </Item>
                        <Item sx={ItemImageProperties}>
                            <img src={logo} alt="Logo" id="firstImage"/>
                        </Item>
                    </Grid> */}

                </Grid>
            </div>
            
            {/* <Sidebar /> */}
        </div>
    )
}