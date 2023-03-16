import React from 'react'
import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import mc_logo from './assets/images/muscle_checker_logo_1.png'
import autogen_logo from './assets/images/no_symbol.png'
import github_logo from './assets/images/github_logo.png'
import ggl_calendar_logo from './assets/images/ggl_calendar_logo.png'
import youtube_logo from './assets/images/youtube_logo.png'
import strava_logo from './assets/images/strava_logo.png'
import health_logo from './assets/images/rpi_health/health_logo.png'

import Rpi_health from './components/Rpi_health/Rpi_health';
import Sidebar from './components/Sidebar/Sidebar';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './assets/theme/site-theme'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const newItemProperties = {

    background: theme.palette.background.primary,

    marginTop: '0.5vw',

    paddingLeft: '1.3vw',
    paddingRight: '1.3vw',
    
    boxShadow: 5,

    borderRadius: 2,
    border: '1px solid lightgrey',

    fontSize: '1vw',

    color: theme.palette.text.primary,

    img: {
        boxShadow: 2,

        width: '6vw',

        border: '1px solid #1B1F23',
        borderRadius: '12px',

        background: theme.img.background,
    },

    table: {
        width: '100%'
    }
}


export const Home = () => {

    document.title = 'React Dashboard';

    return (
        <ThemeProvider theme={theme}>
        <div className="float-container">

            <Sidebar></Sidebar>

            <div id="mainDiv">
                <Grid container spacing={4} sx={{
                    marginLeft: '2vw',
                    marginRight: '0%',

                    maxWidth: '100%',
                    gap: 2,

                    transition: '100ms',
                }}>
                    <Grid item xs={3.7} md={3.7} lg={3.8} className="gridCard">
                        <Link to="/muscle_checker" target="">
                        <Item sx={newItemProperties}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="imageTD">
                                            <img src={mc_logo} alt="Logo"/>
                                        </td>
                                        <td>
                                            <h2>Muscle Checker</h2>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        </Link>
                    </Grid>

                    <Grid item xs={3.7} md={3.7} lg={3.8} className="gridCard">
                        <Link to="https://calendar.google.com/" target="">
                        <Item sx={newItemProperties}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="imageTD">
                                            <img src={ggl_calendar_logo} alt="Logo"/>
                                        </td>
                                        <td>
                                            <h2>Calendar</h2>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        </Link>
                    </Grid>

                    <Grid item xs={3.7} md={3.7} lg={3.8} className="gridCard">
                        <Link to="https://github.com/henryj320" target="_blank">
                        <Item sx={newItemProperties}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="imageTD">
                                            <img src={github_logo} alt="Logo"/>
                                        </td>
                                        <td>
                                            <h2>GitHub</h2>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        </Link>
                    </Grid>

                    <Grid item sm={11.4} md={11.15} lg={11.4} xl={11.4} sx={{
                        marginTop: '1.5vw',
                        marginLeft: {xs: '5.5vw', sm: '4vw', md: '3vw', lg: '2.25vw', xl: '1.7vw'},

                        borderRadius: 2,
                        border: '1px solid lightgrey',

                        boxShadow: 5,
                        
                        minHeight: '18vh',
                        maxHeight: '55vh',

                        paddingTop: {sm: '35%', md: '30%', lg: '23%'},

                        background: theme.palette.background.primary,

                        display: {sm: 'none', md: 'block'},
                    }}>
                        <Item sx={{
                                fontSize: '1.2vw',
                                textAlign: 'center',

                                boxShadow: 0,
                                
                                width: '100%',

                                background: 'none',

                                marginLeft: 'auto',
                                marginRight: 'auto',

                                table: {
                                    // border: '1px solid red',
                                    width: '62vw',
                                    marginLeft: '3vw'
                                },

                                img: {
                                    width: '100%',
                                    // border: '1px solid black',
                                    // borderRadius: '12px',
                                    // background: 'linear-gradient(to right bottom, #48A2F1, #1B74E8)',

                                },

                                color: theme.palette.text.primary,





                            }}>

                            <table id="rpiTitleTable">
                                <tbody>
                                    <tr>
                                        <td id="rpiTitleImgTD">
                                            <img src={health_logo} alt="Logo"/>
                                        </td>
                                        <td id="rpiTitleHeaderTD">
                                            <h2>Server Health</h2>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Rpi_health ></Rpi_health>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
        </ThemeProvider>
    )
}
