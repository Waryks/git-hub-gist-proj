import React from 'react';
import { useParams } from "react-router-dom";

function DetailPage(){

    let {id} = useParams();

    return(
        <div>
            <h1>
                Page for showing details about the gist with ID {id} after clicking on it.
            </h1>
        </div>
    );
}

export default DetailPage;