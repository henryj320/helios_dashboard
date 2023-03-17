import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
    palette: {
        text: {
            primary: '#666666',
            secondary: '#1B1F23'
        },
        background: {
            primary: '#ffffff',  // Used for most Items
            secondary: 'linear-gradient(to right bottom, #262628, #1A1A1A)',  // Used on the Sidebar
            buttons: 'lightgrey',
            textarea: '#f0f0f0'
        }
        
    },
    text: {
        fontFamily: 'system-ui'
    },
    img: {
        background: 'linear-gradient(to right bottom, #48A2F1, #1B74E8)'
    },
    rpi: {
        background: 'none',
        border: 'none'
    },
    border: '1px solid lightgrey'
});
