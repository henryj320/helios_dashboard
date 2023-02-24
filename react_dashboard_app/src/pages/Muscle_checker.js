import React, { useState } from "react";

import { useEffect } from "react";


import axios from 'axios'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import Sidebar from '../components/Sidebar/Sidebar';

import { Link } from 'react-router-dom'


const config = {
    headers: {
        "content-type": "application/json"
        // "Access-Control-Allow-Origin": "*"
    }
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const ItemProperties = {
    borderRadius: 2,
    boxShadow: 5,
    border: '1px solid lightgrey',
    minHeight: {sm: '30px', md: '80px', lg: '80px'},
    paddingTop: '2vw',
    paddingBottom: '2vw',
    paddingLeft: '1.3vw',
    paddingRight: '1.3vw',
    fontSize: {sm: 0, md: 13, lg: 14, xl: 14},
    // // background:  'linear-gradient(to right bottom, lightgrey, #F5F5F5)',
    // "&:hover": {
    //     // Add what happens on hover
    //     // cursor: 'pointer',
    //     // background: 'linear-gradient(to right bottom, grey, lightgrey)'
    //                     background: 'linear-gradient(to right bottom, #262628, #1A1A1A)',
    // },

}

// Receives the URL arguments
const queryParameters = new URLSearchParams(window.location.search)
var page = queryParameters.get("page")
console.log(page)

var textInput = ""

export const Muscle_checker = () => {

    // const [apiResponse, setResponse] = useState([])

    // State to hold the response from the API
    const [apiData, setData] = useState({
        hit_muscle_groups: [],
        hit_muscles: [],
        missed_muscle_groups: [],
        suggestions: []
    })

    // const [textInput, setText] = useState("initial")

    // Runs getResponse() once when the page loads.s
    useEffect(
        () => {

            document.title = 'Muscle Checker';

            // Only GETs the response if the page is the Results Page
            if (page == 2) {
                getResponse()
            }
            
        }, []
    )

    
    // Asynchronous method to get the data from the API.
    const getResponse = async () => {

        let base_url = 'http://127.0.0.1:4000/muscle_checker'
        base_url = 'http://192.168.1.101:4000/muscle_checker'
        // base_url = 'http://localhost:4000/muscle_checker'



        // React.useEffect(() => {
        //     axios.get(base_url).then((response) => {
        //         console.log(response)
        //     });
        // }, []);

        // input_text = String(input_text)
        // console.log(input_text)

        var requestData = {
            "text": textInput
        };

        var headers = {
            'Content-Type': 'application/json'
        }

        // POST request to update the insert_calendar_text.txt file.
        axios.put(base_url, requestData, {headers: headers}).then((response) => {

            console.log(response)
            console.log("insert_calendar_text.txt update was successful.");

            if (response.status == 200) {

                // GET request to retrieve the response from the API.
                axios.get(base_url).then((response) => {
                    console.log(response);

                    if (response.status == 200) {

                        // setResponse([
                        //     response.data.data.hit_muscle_groups
                        // ])

                        setData(response.data.data)

                    }


                    //setResponse(response)

                    // this.setState({ response })
                });

            }

        })
        .catch((error) => {
            console.log(error)
        })



        

    };

    // function changePage(page) {
    //     if (page == 2) {
    //         page = 1
    //     } else {
    //         page = 2
    //     }
    //     console.log(page)
    // }


    console.log(apiData)
    
    // getResponse()

    // if (page == 2) {
    //     return (
    //         <>
    //             <h1>Muscle Checker</h1>
    //             <p>Response is: {apiData.hit_muscle_groups}</p>
    //             <p>page: {page}</p>
    
    //         </>
    //     )

    // } else {
    
    // function returnMuscles() {
    //     console.log("Entered")
    // }

    

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
            
            // setText(text_input); 

            // setText("Hekl")
            textInput = text_input

            console.log(text_input)
            console.log(textInput)

            getResponse()



            console.log(apiData);

        };

        console.log(page);

        return (
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
                                borderRadius: 2,
                                boxShadow: 5,
                                border: '1px solid lightgrey',
                                paddingLeft: '1.3vw',
                                paddingRight: '1.3vw',
                                fontSize: 18,
                            }}>
                                <h1>Muscle Checker</h1>
                            </Item>
                        </Grid>
                    </Grid>

                    <br></br><br></br>

                    <Grid id="initialDiv" container spacing={4} sx={{
                        marginLeft: '2vw',
                        maxWidth: '100%',
                        marginRight: '0%',
                        gap: 2,
                    }}>
                    
                        <Grid item xs={12}>
                            <Item sx={ItemProperties}>


                                <div>

                                    {/* <p>page: {page}</p> */}

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
                        maxWidth: '100%',
                        marginRight: '0%',
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
                                }
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
                                }
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
                                background: 'rgb(210, 210, 210)',

                                marginBottom: {xs: '5vh', sm: '5vh', md: 0}
                            }}>
                                <Link style={{color: '#444'}} className="link" to="/muscle_checker?v=1" target="" onClick={() => {window.location.href="/muscle_checker"}}><p>Back</p></Link>
                            </Item>
                        </Grid>

                    </Grid>


                </div>
            </div>
        )

    // }
}



export default Muscle_checker
