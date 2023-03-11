import React, { useState } from 'react';
import { useEffect } from "react";

import axios from 'axios'


export default function Rpi_health() {

    var uptime = "";

    useEffect(
        () => {
            getResponse();
        }, []  // Runs repeatedly without "[]"
    )

    // State that contains all the rpi_health data in a dict.
    const [apiData, setData] = useState({
        datetime: [],
        cpu_percent: "",
        temp: "",
        memory_percent: "",
        memory_used: "",
        memory_total: "",
        uptime: []
    })

    const getResponse = async () => {

        let base_url = 'http://192.168.1.101:4000/rpi_health';

        var headers = {
            'Content-Type': 'application/json'
        }

        axios.get(base_url, {}, {headers: headers}).then((response) => {

            if (response.status == 200) {
                setData(response.data.data)
            }
            
        })


        console.log(apiData)





    }

    return (
            <ul onLoad={() => getResponse()}>
                <li>
                    Uptime:
                    <br></br>
                    {apiData.uptime[0]} days, {apiData.uptime[1]} hrs, {apiData.uptime[2]} mins
                </li>
                <li>System Load:<br></br>{apiData.cpu_percent}%</li>
                <li>Memory Load:<br></br>{apiData.memory_percent}%</li>
                <li>IP Address:<br></br>192.169.1.109</li>
            </ul>
    )
}
