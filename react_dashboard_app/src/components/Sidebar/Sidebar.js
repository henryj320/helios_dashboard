
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
                span: {
                    borderRadius: 2,
                    padding: '8%',
                    display: 'block',
                    marginTop: '10%',
                    border: 'none',
                    background: '#F5F5F5',
                    boxShadow: 3,
                    background: 'linear-gradient(to right bottom, #48A2F1, #1B74E8)',
                    fontSize: '1vw',
                    fontWeight: '200',
                    color: 'white'
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
                        {/* <ul>
                            <li>Dashboard</li>
                            <li>Muscle Checker</li>
                            <li>Gym Calendar</li>
                            <li>GitHUb</li>
                        </ul> */}

                        <span>Dashboard</span>
                        <span>Muscle Checker</span>
                        <span>Gym Calendar</span>
                        <span>GitHub</span>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}
