import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'

import axios from 'axios'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Sidebar from '../components/Sidebar/Sidebar';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../assets/theme/site-theme'


const Item = Paper;

const ItemProperties = {
    borderRadius: 2,
    border: '1px solid lightgrey',

    boxShadow: 5,
    minHeight: {sm: '30px', md: '80px', lg: '80px'},

    paddingTop: '2vw',
    paddingBottom: '2vw',
    paddingLeft: '1.3vw',
    paddingRight: '1.3vw',

    fontSize: {sm: 0, md: 13, lg: 14, xl: 14},

    textarea: {
        color: theme.palette.text.primary,
        background: theme.palette.background.textarea
    },

    button: {
        color: theme.palette.text.primary,
        background: theme.palette.background.buttons
    },

    background: theme.palette.background.primary

}

// Receives the URL arguments.
const queryParameters = new URLSearchParams(window.location.search);
var page = queryParameters.get("page");

var textInput = "";

export const Muscle_checker = () => {
    // State to hold the response from the API.
    const [apiData, setData] = useState({
        hit_muscle_groups: [],
        hit_muscles: [],
        missed_muscle_groups: [],
        suggestions: []
    })

    // Runs getResponse() once when the page loads.
    useEffect(
        () => {

            document.title = 'Muscle Checker';

            // Only GETs the response if the page is the Results Page.
            if (page == 2) {
                getResponse();
            }
        }, []
    )

    
    // Asynchronous method to get the data from the API.
    const getResponse = async () => {

        let base_url = 'http://192.168.1.101:4000/muscle_checker';

        var requestData = {
            "text": textInput
        };

        var headers = {
            'Content-Type': 'application/json'
        }

        // PUT request to update the insert_calendar_text.txt file.
        axios.put(base_url, requestData, {headers: headers}).then((response) => {

            console.log("insert_calendar_text.txt update was successful.");

            if (response.status == 200) {
                // GET request to retrieve the response from the API.
                axios.get(base_url).then((response) => {
                    if (response.status == 200) {
                        setData(response.data.data)
                    }
                });
            }
        })

        .catch((error) => {
            console.log(error)
        })

    };
    
        // Main method run when the form is submitted.
        function returnMuscles() {

            event.preventDefault();  // Stops the page reloading on button click.

            // Grabs the relevant elements.
            var form = document.getElementById("mainForm");
            var inputDiv = document.getElementById("initialDiv");
            var resultsDiv = document.getElementById("resultsDiv");

            // Hides the input div and shows the results div.
            inputDiv.style = "display: none";
            resultsDiv.style = "display: flex; color: red";

            // Updates the state of textInput.
            var text_input = form.text_input.value.toString();

            textInput = text_input;

            getResponse();

        };


        return (

            <ThemeProvider theme={theme}>
            <div className="float-container">
    
                <Sidebar></Sidebar>
    
                <div id="mainDiv">
                    <Grid container spacing={4} sx={{
                        marginLeft: '2vw',
                        maxWidth: '100%',
                        gap: 2,
                        textAlign: 'center',
                    }}>
                        <Grid item xs={12}>
                            <Item sx={{
                                boxShadow: 5,

                                borderRadius: 2,
                                border: '1px solid lightgrey',

                                paddingLeft: '1.3vw',
                                paddingRight: '1.3vw',

                                fontSize: 18,

                                background: theme.palette.background.primary
                            }}>
                                <h1>Muscle Checker</h1>
                            </Item>
                        </Grid>
                    </Grid>

                    <br></br><br></br>

                    <Grid id="initialDiv" container spacing={4} sx={{
                        marginLeft: '2vw',
                        marginRight: '0%',

                        maxWidth: '100%',
                        gap: 2,

                    }}>
                        <Grid item xs={12}>
                            <Item sx={ItemProperties}>
                                <div>
                                    <form id="mainForm">
                                        <textarea id="text_input" name="text_input" rows="14" cols="50" defaultValue="Insert your calendar text here."></textarea>
                                        <br></br><br></br>
                                        <button onClick={() => returnMuscles()}>Submit</button>
                                    </form>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>

                    <Grid id="resultsDiv" container spacing={4} sx={{
                        marginLeft: '2vw',
                        marginRight: '0%',

                        maxWidth: '100%',
                        gap: 2,
                    }}>
                        <Grid item xs={12} lg={5.91}>
                            <Item sx={{
                                padding: '2.5%',
                                paddingLeft: '5%',

                                minHeight: '10vh',
                                maxHeight: '10vh',

                                table: {
                                    width: '100%'
                                }, 

                                td: {
                                    width: '50%'
                                },

                                background: theme.palette.background.primary
                            }}>
                                <br></br>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Hit Muscle Groups:</td>
                                        <td>Hit Muscles:</td>
                                    </tr>
                                    <tr>
                                        <td>{apiData.hit_muscle_groups}</td>
                                        <td>{apiData.hit_muscles}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Item>
                        </Grid>
                        <Grid item xs={12} lg={5.91}>
                            <Item sx={{
                                padding: '2.5%',
                                paddingLeft: '5%',

                                minHeight: '10vh',
                                maxHeight: '10vh',

                                table: {
                                    width: '100%'
                                },

                                td: {
                                    width: '25%'
                                },

                                background: theme.palette.background.primary
                            }}>
                                <br></br>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{}}>Missed Muscle Groups:</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>{apiData.missed_muscle_groups[0]}</td>
                                        <td>{apiData.missed_muscle_groups[1]}</td>
                                        <td>{apiData.missed_muscle_groups[2]}</td>
                                        <td>{apiData.missed_muscle_groups[3]}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item sx={{
                                padding: '2.5%',

                                background: theme.palette.background.primary
                            }}>
                                <p>{apiData.suggestions[0]}</p>
                                <p>{apiData.suggestions[1]}</p>
                                <p>{apiData.suggestions[2]}</p>
                                <p>{apiData.suggestions[3]}</p>
                                <p>{apiData.suggestions[4]}</p>
                                <p>{apiData.suggestions[5]}</p>
                                <p>{apiData.suggestions[6]}</p>
                                <p>{apiData.suggestions[7]}</p>
                                <p>{apiData.suggestions[8]}</p>
                                <p>{apiData.suggestions[9]}</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Item sx={{
                                padding: '2.5%',

                                textAlign: 'center',
                                fontSize: 'large',

                                background: theme.palette.background.buttons,
                                
                                marginBottom: {xs: '5vh', sm: '5vh', md: 0},

                            }}>
                                <Link style={{color: '#444'}} className="link" to="/muscle_checker?v=1" target="" onClick={() => {window.location.href="/muscle_checker"}}><p>Back</p></Link>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </div>
            </ThemeProvider>
        )
}

export default Muscle_checker
