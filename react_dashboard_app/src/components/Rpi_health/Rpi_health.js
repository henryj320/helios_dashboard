
import * as React from 'react';

export default function Rpi_health() {
    return (
            // <table>
            //     <tr>
            //         <th>Uptime</th>
            //         <th class="hiddenTd"></th>
            //         <th>System Load</th>
            //         <th class="hiddenTd"></th>
            //         <th>Memory Load</th>
            //         <th class="hiddenTd"></th>
            //         <th>CPU Temperature</th>
            //         <th class="hiddenTd"></th>
            //         <th>IP Address</th>
            //     </tr>
            //     <tr>
            //         <td>1 day 2 hrs 13 mins</td>
            //         <td class="hiddenTd"></td>
            //         <td>20%</td>
            //         <td class="hiddenTd"></td>
            //         <td>112 out of 733 MB</td>
            //         <td class="hiddenTd"></td>
            //         <td>25°c</td>
            //         <td class="hiddenTd">test</td>
            //         <td id="ip">192.168.1.109</td>
            //     </tr>
            // </table>
            <ul>
                <li>Uptime:<br></br>1 day 2 hrs 13 mins</li>
                <li>System Load:<br></br>20%</li>
                <li>Memory Load:<br></br>112 out of 733 MB</li>
                <li>IP Address:<br></br>192.169.1.109</li>
            </ul>
    )
}
