import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    const pathname = window.location.pathname
    const [value, setValue] = useState(pathname)
    const onChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
            <Box>
                <BottomNavigation className="stickToBottom" value={value} onChange={onChange} showLabels>
                    <BottomNavigationAction component={Link} to={'/'} value={'/'} label='Back'/>
                </BottomNavigation>
            </Box>
    );
};

export {Footer}