import React, { useState } from "react";

import { useEffect, UseState } from "react";


import axios from 'axios'


const config = {
    headers: {
        "content-type": "application/json"
        // "Access-Control-Allow-Origin": "*"
    }
}

export const Muscle_checker = () => {

    // const [apiResponse, setResponse] = useState([])

    const [apiData, setData] = useState({
        hit_muscle_groups: [],
        hit_muscles: [],
        missed_muscle_groups: [],
        suggestions: []
    })

    // Runs getResponse() once when the page loads.s
    useEffect(
        () => {
            getResponse()
        }, []
    )

    const getResponse = async () => {

        let base_url = 'http://127.0.0.1:4000/muscle_checker'
        base_url = 'http://192.168.1.101:4000/muscle_checker'
        base_url = 'http://localhost:4000/muscle_checker'



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


    console.log(apiData)
    
    // getResponse()

    return (
        <>
            <h1>Muscle Checker</h1>
            <p>Response is: {apiData.hit_muscle_groups}</p>

        </>
    )
}


export default Muscle_checker
