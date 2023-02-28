import * as React from 'react';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import { Link } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Sidebar() {
    return (
        <div id="sidebarDiv">
            <Grid container spacing={0} sx={{
                display: {xs: 'none', sm: 'none', md: 'block'},

                span: {
                    borderRadius: 2,
                    padding: '1.5vw',
                    display: 'block',
                    marginTop: '2.5vh',
                    border: 'none',
                    background: '#F5F5F5',
                    boxShadow: 3,
                    background: 'linear-gradient(to right bottom, #48A2F1, #1B74E8)',
                    fontSize: '1vw',
                    color: '#1B1F23',
                    marginLeft: '6%',
                    marginRight: '6%',
                },
            }}>
                <Grid item lg={12}>
                    <Item sx={{
                        height: '93vh',
                        borderRadius: 2,
                        boxShadow: 5,
                        border: '1px solid grey',
                        background: 'linear-gradient(to right bottom, #262628, #1A1A1A)',
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
