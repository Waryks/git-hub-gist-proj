import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SearchPage(){
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    function handleSearch(event){
        navigate(`/gists/${user}`)
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
            </form>
        </div>
    );
}

export default SearchPage;