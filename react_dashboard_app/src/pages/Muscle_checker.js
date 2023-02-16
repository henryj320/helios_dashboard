import React, { useState } from "react";

import { useEffect, UseState } from "react";


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

export const Muscle_checker = () => {

    // const [apiResponse, setResponse] = useState([])

    // State to hold the response from the API
    const [apiData, setData] = useState({
        hit_muscle_groups: [],
        hit_muscles: [],
        missed_muscle_groups: [],
        suggestions: []
    })

    const [textInput, setText] = useState("")

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

    };

    function changePage(page) {
        if (page == 2) {
            page = 1
        } else {
            page = 2
        }
        console.log(page)
    }


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

    

        // Main method run when the form is submitted
        function returnMuscles() {

            event.preventDefault();  // Stops the page reloading on button click.

            var form = document.getElementById("main_form");

            var text_input = form.text_input.value.toString();

            setText(text_input); 



            console.log(text_input);

            console.log('this is:' + this);

        };

        console.log(page);

        return (
            <>
                <h1>Muscle Checker</h1>
                <p>page: {page}</p>

                <form id="main_form">
                    <textarea id="text_input" name="text_input" rows="4" cols="50">Insert your calendar text here.</textarea>
                    <button onClick={() => returnMuscles()}>Submit</button>
                </form>
    
            </>
        )

    // }
}



export default Muscle_checker
