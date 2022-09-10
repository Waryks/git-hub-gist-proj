import React from "react";
import {Avatar, Card, CardContent} from '@mui/material';
import "./Forks.css"

const Forks = (data) => {
    return (
        <div className="div">
        <h1>Forks</h1>
            <Card>
                <CardContent>
                {data.forks && data.forks.length !== 0 ? Object.keys(data.forks).slice(0, 3).map((key) =>{
                return <ul key={key} className='ul'>
                            <li>
                                <Avatar alt={null} src={data.forks[key].owner.avatar_url}/>
                                <p>{data.forks[key].owner.login}</p>
                            </li>
                        </ul>
                    }) : <p>Nothing to show</p>}
                </CardContent>
            </Card>
    </div>
    );
};

export {Forks}