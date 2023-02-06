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
    textAlign: 'right',
    width: '50%',
    left: {sm: '1rem', lg: '11rem'},
    top: {sm: '-14.5rem', lg: '5.5rem'},
    border: 0,
    fontSize: 12,
    boxShadow: 0
}

const ItemImageProperties = {
    width: {sm: '4rem', lg: '6rem'},
    height: {sm: '4rem', lg: '6rem'},
    position: 'relative',
    left: {sm: '1rem', lg: '1.5rem'},
    top: {sm: '-14.5rem', lg: '-15.5rem'},
    borderRadius: 2,
    boxShadow: 2,
    border: {xs: '1px solid lightgrey', md: '1px solid red'},
    zIndex: 0,
    background: 'lightblue',
}

const ItemProperties = {
    borderRadius: 2,
    boxShadow: 5,
    border: '1px solid lightgrey',
    minHeight: '100px',
    paddingTop: {sm: '0%', lg: '23%'},
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
}

export const Home = () => {
 
    return (
        <div>
            <div >
                <Grid container spacing={4} sx={{
                    marginLeft: '5%',
                    maxWidth: '90%',
                    gap: 2
                }}>
                    
                    <Grid item xs={4}>
                        <Item sx={ItemHeaderProperties}>
                            <h2>Hey! asd asd</h2>
                        </Item>
                        <Item sx={ItemProperties}>
                            <hr></hr>
                            <p>Helloooo fif dsff fds dsf dsfds fdsf dsf dsf dsf dsf fif dsff fds dsf dsfds fdsf dsf dsf dsf dsf fif dsff fds dsf dsfds fdsf dsf dsf dsf dsf </p>
                        </Item>
                        <Item sx={ItemImageProperties}>
                            <img src={logo} alt="Logo" id="firstImage"/>
                        </Item>
                        
                    </Grid>
                    <Grid item xs={4}>
                        <Item><p>Hello</p></Item>
                    </Grid>
                </Grid>
            </div>
            
            {/* <Sidebar /> */}
        </div>
    )
}