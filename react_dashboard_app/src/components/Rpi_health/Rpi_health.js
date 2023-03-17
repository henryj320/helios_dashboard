import React, { useState } from 'react';
import { useEffect } from "react";

import axios from 'axios'

import health_cpu from '../../assets/images/rpi_health/health_cpu.png'
import health_ip from '../../assets/images/rpi_health/health_ip.png'
import health_temperature from '../../assets/images/rpi_health/health_temperature.png'
import health_memory_percentage from '../../assets/images/rpi_health/health_memory_percentage.png'
import health_memory from '../../assets/images/rpi_health/health_memory.png'
import health_uptime from '../../assets/images/rpi_health/health_uptime.png'

export default function Rpi_health() {

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

                // Sets progress bar for CPU % usage.
                var progressCpuDiv = document.getElementById("cpuProgressBar");
                // Sets the upper bound of the bar.
                var progressCpuTop = parseFloat(response.data.data["cpu_percent"]) + 5;
                if (parseFloat(progressCpuTop) > 100) {
                    progressCpuTop = 100;
                }
                // Sets the progress bar colour based on the percentage.
                if (parseFloat(response.data.data["cpu_percent"]) > 66) {
                    progressCpuDiv.style = "background: linear-gradient(65deg, red" + response.data.data["cpu_percent"] + "%, white " + progressCpuTop + "%)";
                } else if (parseFloat(response.data.data["cpu_percent"]) > 33) {
                    progressCpuDiv.style = "background: linear-gradient(65deg, rgba(222, 196, 24,1)" + response.data.data["cpu_percent"] + "%, white " + progressCpuTop + "%)";
                } else {
                    progressCpuDiv.style = "background: linear-gradient(65deg, rgba(77, 173, 21,1)" + response.data.data["cpu_percent"] + "%, white " + progressCpuTop + "%)";
                }

                // Sets progress bar for Memory % usage.
                var progressMemoryDiv = document.getElementById("memoryProgressBar");
                // Sets the upper bound of the bar.
                var progressMemoryTop = parseFloat(response.data.data["memory_percent"]) + 5;
                if (parseFloat(progressMemoryTop) > 100) {
                    progressMemoryTop = 100;
                }
                // Sets the progress bar colour based on the percentage.
                if (parseFloat(response.data.data["memory_percent"]) > 66) {
                    progressMemoryDiv.style = "background: linear-gradient(65deg, red" + response.data.data["memory_percent"] + "%, white " + progressMemoryTop + "%)";
                } else if (parseFloat(response.data.data["memory_percent"]) > 33) {
                    progressMemoryDiv.style = "background: linear-gradient(65deg, rgba(222, 196, 24,1)" + response.data.data["memory_percent"] + "%, white " + progressMemoryTop + "%)";
                } else {
                    progressMemoryDiv.style = "background: linear-gradient(65deg, rgba(77, 173, 21,1)" + response.data.data["memory_percent"] + "%, white " + progressMemoryTop + "%)";
                }

                // Sets progress bar for temperature.
                var progressTempDiv = document.getElementById("tempProgressBar");
                // Adjusts it so that 20 degrees is 0% filled bar
                var adjustedTemp = parseFloat(response.data.data["temp"])
                if (adjustedTemp > 20) {
                    adjustedTemp = adjustedTemp - 20;
                } else {
                    adjustedTemp = 0
                }
                // Sets the upper bound of the bar.
                var progressTempTop = parseFloat(adjustedTemp) + 5;
                if (parseFloat(progressTempTop) > 100) {
                    progressTempTop = 100;
                }
                // Sets the progress bar colour based on temperature
                if (parseFloat(response.data.data["temp"]) > 75) {
                    progressTempDiv.style = "background: linear-gradient(65deg, red" + adjustedTemp + "%, white " + progressTempTop + "%)";
                } else if (parseFloat(response.data.data["temp"]) > 50) {
                    progressTempDiv.style = "background: linear-gradient(65deg, rgba(222, 196, 24,1)" + adjustedTemp + "%, white " + progressTempTop + "%)";
                } else {
                    progressTempDiv.style = "background: linear-gradient(65deg, rgba(77, 173, 21,1)" + adjustedTemp + "%, white " + progressTempTop + "%)";
                }
                
            }
        }).catch(function (error) {
            // Entered if the API GET call fails.
            // alert("\nAPI call failed with error: \n" + error.code)
        })

        console.log(apiData);
    }

    return (
        <>
            <table id="rpiHealthTable" onLoad={() => getResponse()}>
                <tbody>
                    <tr>
                        <td class="rpiHealthTableImg"><img src={health_cpu} alt="Logo"/></td>
                        <td class="rpiHealthTableTxt">
                            {apiData.cpu_percent}%
                            <div id="cpuProgressBar" class="healthProgressBars"></div>
                        </td>

                        <td class="rpiHealthTableGap"></td>

                        <td class="rpiHealthTableImg"><img src={health_memory} alt="Logo"/></td>
                        <td class="rpiHealthTableTxt">
                            {apiData.memory_used} GB / {apiData.memory_total} GB
                            <div id="memoryProgressBar" class="healthProgressBars"></div>
                        </td>

                        <td class="rpiHealthTableGap"></td>

                        <td class="rpiHealthTableImg"><img src={health_uptime} alt="Logo"/></td>
                        <td class="rpiHealthTableTxt">{apiData.uptime[0]} days, {apiData.uptime[1]} hours, {apiData.uptime[2]} minutes</td>
                    </tr>
                    <br></br><br></br>
                    <tr>
                        <td class="rpiHealthTableImg"><img src={health_temperature} alt="Logo"/></td>
                        <td class="rpiHealthTableTxt">
                            {apiData.temp}°c
                            <div id="tempProgressBar" class="healthProgressBars"></div>
                        </td>

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
