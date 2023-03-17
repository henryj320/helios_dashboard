import React, { useState } from 'react';
import { useEffect } from "react";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles';
import { themeLight } from '../../assets/theme/site-theme';
import { themeDark } from '../../assets/theme/site-theme-dark';

var theme = themeLight;


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Sidebar(props) {

    // var parentTheme = props.theme;
    // const [theme, setTheme] = useState(props.theme)
    // useEffect(
    //     () => {
    //         setTheme(props.theme);
    //     }, []  // Runs repeatedly without "[]"
    // )
    // console.log(theme)

    return (
        <div id="sidebarDiv">
            <Grid container spacing={0} sx={{
                display: {xs: 'none', sm: 'none', md: 'block'},

                span: {
                    borderRadius: 2,
                    border: 'none',
                    padding: '1.5vw',
                    display: 'block',
                    boxShadow: 3,
                    background: theme.img.background,
                    marginTop: '2.5vh',
                    marginLeft: '6%',
                    marginRight: '6%',
                    fontSize: '1vw',
                    color: theme.palette.text.secondary,
                },
            }}>
                <Grid item lg={12}>
                    <Item sx={{
                        height: '93vh',
                        borderRadius: 2,
                        boxShadow: 5,
                        border: '1px solid grey',
                        background: theme.palette.background.secondary,
                    }}>
                        <Link className="link" to="/" target=""><span>Dashboard</span></Link>
                        <Link className="link" to="/muscle_checker" target=""><span>Muscle Checker</span></Link>
                        <span className="link">Gym Calendar</span>
                        <Link className="link" to="https://github.com/henryj320" target="_blank"><span>GitHub</span></Link>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}
