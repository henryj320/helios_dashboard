import { createTheme } from "@mui/material/styles";

export const themeDark = createTheme({
    palette: {
        text: {
            primary: '#f0f0f0',
            secondary: '#1B1F23'
        },
        background: {
            primary: '#1B1F23',  // Used for most Items
            secondary: 'linear-gradient(to right bottom, #262628, #1A1A1A)',  // Used on the Sidebar
            buttons: '#404040',
            textarea: 'grey'
        }
    },
    text: {
        fontFamily: 'system-ui'
    },
    img: {
        background: 'linear-gradient(to right bottom, #48A2F1, #1B74E8)'
        // background: 'linear-gradient(to right bottom, #de2c2c, #911313)'
    },
    rpi: {
        background: 'linear-gradient(to right bottom, #48A2F1, #1B74E8)',
        // background: 'linear-gradient(to right bottom, #de2c2c, #911313)',
        border: '1px solid black'
    },
    border: '1px solid black'
});
