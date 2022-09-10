import React, {useEffect, useState} from "react";
import {Card, Chip, CardHeader, CardContent, Button} from '@mui/material';
import {getAllGistURI, getGistContent, getGistForks} from "../config/config"
import "./GistDescription.css"
import {getGistsFork} from "../data/getData";
import {Forks} from "./Forks"
import axios from "axios";

const GistDescription = (data) => {
    const [dataFork, setDataFork] = useState([]);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const files = data.data.files;
    const fileArr = []
    for (let index in files) {
        let language = files[index].language;
        if (fileArr.indexOf(language) === -1) { //see if there are any appearances
          fileArr.push(language);
      }
    }

    const openFork = async (idGist) => {
        if (idGist && idGist !== "") {
            try {
                const response = await axios.get(
                    getGistForks(idGist.trim())
                );
                setDataFork(response.data);
                setShow(true);
                setError(null);
            } catch (err) {
                setError(err.message);
                setDataFork(null);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <Card
                sx={{ width: 3/4 , minWidth: 300}}
            >
                <CardHeader
                title={data.data.description}
                subheader={"No. Files " + Object.keys(files).length}
                />
                <CardContent>
                    { data && !error ? (
                        <Button onClick={() => openFork(data.data.id)}>Show forks</Button>
                    ) : null}

                    {fileArr.map((language, index) => {
                        return (
                            <Chip key={index} label={language}/>
                        );
                    })}

                    <ul className='ul'>
                        {Object.keys(files).map((key) => {
                            return <li key={key}> <a href={getGistContent(data.data.owner.login,data.data.id, files[key].filename)} target="_blank" rel="noopener noreferrer"> {files[key].filename} </a></li>
                        })}
                    </ul>

                    {loading && <div>Loading...</div>}
                    {show && dataFork !== [] ? <Forks forks={dataFork} /> : null}
                </CardContent>
            </Card>
        </div>
    );

};

export {GistDescription}