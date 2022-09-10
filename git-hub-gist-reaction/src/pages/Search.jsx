import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
                <input 
                    value={user}
                    placeholder="GitHub username"
                    onChange={event => setUser(event.target.value)}
                />
                <button onClick={handleSearch}> 
                    Search
                </button>
                <p>{credentialError}</p>
            </form>
        </div>
    );
}

export default SearchPage;