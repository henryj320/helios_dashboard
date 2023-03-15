import React, { useState } from 'react';
import { useEffect } from "react";

import axios from 'axios'

import health_logo from '../../assets/images/rpi_health/health_logo.png'
import health_cpu from '../../assets/images/rpi_health/health_cpu.png'
import health_ip from '../../assets/images/rpi_health/health_ip.png'
import health_temperature from '../../assets/images/rpi_health/health_temperature.png'
import health_memory_percentage from '../../assets/images/rpi_health/health_memory_percentage.png'
import health_memory from '../../assets/images/rpi_health/health_memory.png'
import health_uptime from '../../assets/images/rpi_health/health_uptime.png'


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
        <>
            <table id="rpiHealthTable" onLoad={() => getResponse()} sx={{
            }}>
                <tbody>
                    <tr>
                        <td class="rpiHealthTableImg"><img src={health_cpu} alt="Logo"/></td>
                        <td class="rpiHealthTableTxt">{apiData.cpu_percent}%</td>

                        <td class="rpiHealthTableGap"></td>

                        <td class="rpiHealthTableImg"><img src={health_memory} alt="Logo"/></td>
                        <td class="rpiHealthTableTxt">{apiData.memory_used} GB / {apiData.memory_total} GB</td>

                        <td class="rpiHealthTableGap"></td>

                        <td class="rpiHealthTableImg"><img src={health_uptime} alt="Logo"/></td>
                        <td class="rpiHealthTableTxt">{apiData.uptime[0]} days, {apiData.uptime[1]} hrs, {apiData.uptime[2]} mins</td>
                    </tr>
                    <br></br><br></br>
                    <tr>
                        <td class="rpiHealthTableImg"><img src={health_temperature} alt="Logo"/></td>
                        <td class="rpiHealthTableTxt">{apiData.temp}°c</td>

                        <td class="rpiHealthTableGap"></td>

                        <td class="rpiHealthTableImg"><img src={health_memory_percentage} alt="Logo"/></td>
                        <td class="rpiHealthTableTxt">{apiData.memory_percent}%</td>

                        <td class="rpiHealthTableGap"></td>

                        <td class="rpiHealthTableImg"><img src={health_ip} alt="Logo"/></td>
                        <td class="rpiHealthTableTxt">192.169.1.109</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
        </>  
    )
}
