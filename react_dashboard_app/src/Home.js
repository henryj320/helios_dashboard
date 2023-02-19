import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import logo from './assets/images/flask_favicon.png'
import { fontSize } from '@mui/system';

import Rpi_health from './components/Rpi_health/Rpi_health';

import { Link } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';




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
    width: '16.2vw',
    left: {sm: '1vw', md: '2vw', lg: '3vw', xl: '3vw'},
    top: {sm: '8vw', md: '7.4vw', lg: '6vw', xl: '6vw'},
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
    width: {lg: '4vw', xl: '5vw'},
    height: {lg: '4vw', xl: '5vw'},
    position: 'relative',
    left: {lg: '1.8vw', xl: '1.3vw'},
    top: {lg: '-12vw', xl: '-12vw'},
    borderRadius: 2,
    boxShadow: 2,
    border: {xs: '1px solid lightgrey', sm: '1px solid red', md: '1px solid green', lg: '1px solid blue', xl: '1px solid purple', xxl: '1px solid yellow'},
    zIndex: 0,
    background: 'linear-gradient(to right bottom, #48A2F1, #1B74E8)',
}

const ItemProperties = {
    borderRadius: 2,
    boxShadow: 5,
    border: '1px solid lightgrey',
    minHeight: {sm: '30px', md: '80px', lg: '80px'},
    paddingTop: {sm: '7vw', md: '6.2vw', lg: '5.2vw'},
    paddingLeft: '1.3vw',
    paddingRight: '1.3vw',
    fontSize: {sm: 0, md: 13, lg: 14, xl: 14},
    // background:  'linear-gradient(to right bottom, lightgrey, #F5F5F5)',
    "&:hover": {
        // Add what happens on hover
        // cursor: 'pointer',
        // background: 'linear-gradient(to right bottom, grey, lightgrey)'
                        background: 'linear-gradient(to right bottom, #262628, #1A1A1A)',
    },
}

export const Home = () => {
 
    return (
        <div class="float-container">

            <Sidebar></Sidebar>

            <div id="mainDiv">
                <Grid container spacing={4} sx={{
                    marginLeft: '2vw',
                    maxWidth: '100%',
                    marginRight: '0%',
                    gap: 2,
                }}>

                    <Grid item xs={3.7} md={3.7} lg={3.8}>
                        <Link to="/muscle_checker" target="">
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
                        </Link>
                    </Grid>

                    <Grid item xs={3.7} md={3.7} lg={3.8}>
                        <Link to="/gym_calendar" target="_blank">
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
                        </Link>
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

                    <Grid item sm={11.4} md={11.15} lg={11.4} xl={11.4} sx={{
                        marginLeft: {sm: '2.0%', md: '3vw', lg: '2.25vw', xl: '1.7vw'},
                        borderRadius: 2,
                        boxShadow: 5,
                        border: '1px solid lightgrey',
                        minHeight: {sm: '28vw', md: '22vw', lg: '21vw', xl: '17vw'},
                        maxHeight: {sm: '28vw', md: '22vw', lg: '21vw', xl: '17vw'},
                        paddingTop: {sm: '35%', md: '30%', lg: '23%'},
                        
                        fontSize: {sm: 0, md: 13, lg: 14, xl: 14},
                        background: 'white',
                        position: 'relative',
                        top: {sm: '2vw', md: '1.5vw', lg: '-4vw', xl: '-5vw'},
                    }}>
                        <Item sx={{
                            fontSize: {sm: 10, md: 12, lg: 13, xl: 18},
                            position: 'relative',
                            top: '-2rem',
                            boxShadow: 0,
                        }}>
                            <h2>Raspberry Pi Health</h2>

                        </Item>
                        <Item sx={{
                            position: 'relative',
                            width: '95%',
                            top: '-3.5vw',
                            boxShadow: 0,
                        }}>

                            <hr></hr>
                        </Item>
                        <Item sx={{
                                // borderCollapse: 'collapse',
                                // border: '1px solid black',
                                // borderRadius: '5px',
                                boxShadow: 0,
                                textAlign: 'center',
                                width: '100%',
                                // left: '-1.5%',
                                top: '-3vw',
                                position: 'relative',
                                background: 'none',

                                // table: {
                                //     color: 'red',
                                //     'width': '100%',
                                //     borderCollapse: 'collapse',
                                // },
                                // th: {
                                //     border: '1px solid black',
                                //     borderBottom: 0,
                                // },
                                // td: {
                                //     border: '1px solid black',
                                //     borderTop: 0,
                                // }

                                ul: {
                                    listStyleType: 'none',
                                    width: '100%',
                                },

                                li: {
                                    display: 'block',
                                    float: 'left',
                                    width: {md: '6vw', lg: '7.5vw'},
                                    marginLeft: '3vw',
                                    marginRight: '3vw',
                                    border: '1px solid lightgrey',
                                    padding: '1%',
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    background: '#F5F5F5',
                                    // minHeight: '7vw',
                                }

                            }}>
                                
                            <Rpi_health ></Rpi_health>
                        </Item>
                    </Grid>

                </Grid>
            </div>
            
            {/* <Sidebar /> */}
        </div>
    )
}