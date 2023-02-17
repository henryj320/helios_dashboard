import React, { useState } from "react";

import { useEffect } from "react";


import axios from 'axios'


const config = {
    headers: {
        "content-type": "application/json"
        // "Access-Control-Allow-Origin": "*"
    }
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
            resultsDiv.style = "display: block";

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
            <>
                <div id="initialDiv">

                    <h1>Muscle Checker</h1>
                    <p>page: {page}</p>

                    <form id="mainForm">
                        <textarea id="text_input" name="text_input" rows="4" cols="50" defaultValue="Insert your calendar text here."></textarea>
                        <button onClick={() => returnMuscles()}>Submit</button>
                    </form>
    
                </div>

                <div id="resultsDiv">
                    <h2>Results</h2>
                    <br></br>
                    <p>Hit Muscle Groups: {apiData.hit_muscle_groups}</p>
                    <p>Missed Muscle Groups: {apiData.missed_muscle_groups}</p>
                    <p>Hit Muscles: {apiData.hit_muscles}</p>
                    <p>Suggestions: {apiData.suggestions}</p>
                    <br></br>
                </div>
            </>
        )

    // }
}



export default Muscle_checker
