import React from 'react';
import { useParams } from "react-router-dom";

function ShowGistsPage(){
    let {user} = useParams();

    return(
        
        <div>
            <h1>
                Placeholder for showing gists list for a user {user}
            </h1>
        </div>
    );
}

export default ShowGistsPage;