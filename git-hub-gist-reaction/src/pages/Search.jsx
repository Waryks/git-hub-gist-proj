import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Box, TextField} from '@mui/material';
import './Search.css'

function SearchPage(){
    const [user, setUser] = useState('');
    const [credentialError, setCredentialError] = useState('');
    const navigate = useNavigate();

    function handleSearch(event){
        event.preventDefault();
        if(user && user !== ''){
            setCredentialError('')
            navigate(`/gists/${user}`)
        }
        else{
            setCredentialError('ERROR! Invalid user inserted!')
        }
    };

    return(
        <div>
            <form>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    padding={50}
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{minWidth: "65%"}}
                    onChange={event => setUser(event.target.value)}
                >
                    <TextField inputProps={{style: { textAlign: 'center' }}}  className="fieldStyle" id="standard-basic" label="GitHub username" variant="standard" />

                    <button className="button" onClick={handleSearch}>
                        Search
                    </button>
                </Box>
                <p className="p">{credentialError}</p>
            </form>
        </div>
    );
}

export default SearchPage;