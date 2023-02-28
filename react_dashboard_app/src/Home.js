import React from 'react'
import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import mc_logo from './assets/images/muscle_checker_logo_1.png'
import autogen_logo from './assets/images/no_symbol.png'
import github_logo from './assets/images/github_logo.png'

import Rpi_health from './components/Rpi_health/Rpi_health';
import Sidebar from './components/Sidebar/Sidebar';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const newItemProperties = {
    marginTop: '0.5vw',
    borderRadius: 2,
    boxShadow: 5,
    border: '1px solid lightgrey',
    paddingLeft: '1.3vw',
    paddingRight: '1.3vw',
    fontSize: '1vw',

    img: {
        boxShadow: 2,
        width: '6vw',
        border: '1px solid #1B1F23',
        borderRadius: '12px',
        background: 'linear-gradient(to right bottom, #48A2F1, #1B74E8)',
    },

    table: {
        width: '100%'
    }
}


export const Home = () => {

    document.title = 'React Dashboard';

    return (
        <div className="float-container">

            <Sidebar></Sidebar>

            <div id="mainDiv">
                <Grid container spacing={4} sx={{
                    marginLeft: '2vw',
                    maxWidth: '100%',
                    marginRight: '0%',
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
                        <Link to="/gym_calendar" target="">
                        <Item sx={newItemProperties}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="imageTD">
                                            <img src={autogen_logo} alt="Logo"/>
                                        </td>
                                        <td>
                                            <h2>Gym Calendar</h2>
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
                        boxShadow: 5,
                        border: '1px solid lightgrey',
                        minHeight: '18vh',
                        maxHeight: '55vh',
                        paddingTop: {sm: '35%', md: '30%', lg: '23%'},
                        background: 'white',
                        display: {xs: 'none', sm: 'block'}
                    }}>
                        <Item sx={{
                            position: 'relative',
                            top: '-2rem',
                            boxShadow: 0,
                        }}>
                            <h2>Raspberry Pi Health</h2>

                        </Item>
                        <Item sx={{
                            position: 'relative',
                            width: '95%',
                            top: '-2vw',
                            boxShadow: 0,
                        }}>

                            <hr></hr>
                        </Item>
                        <Item sx={{
                                fontSize: '1.2vw',
                                boxShadow: 0,
                                textAlign: 'center',
                                width: '100%',
                                top: '-3vw',
                                position: 'relative',
                                background: 'none',

                                ul: {
                                    listStyleType: 'none',
                                    width: '100%',
                                    marginLeft: '3%'
                                },

                                li: {
                                    display: 'block',
                                    float: 'left',
                                    width: '28%',
                                    marginLeft: '6%',
                                    marginRight: '6%',
                                    border: '1px solid lightgrey',
                                    padding: '1%',
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    background: '#F5F5F5',
                                    marginTop: '20px',
                                    marginBottom: '20px',
                                    height: '55px',
                                    minHeight: '7vh',
                                }

                            }}>
                            <Rpi_health ></Rpi_health>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
