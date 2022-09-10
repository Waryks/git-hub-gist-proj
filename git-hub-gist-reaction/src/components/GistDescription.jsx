import React from "react";
import { Card, Button, Chip, Box } from '@mui/material';
import { getAllGistURI, getGistContent } from "../config/config"

const GistDescription = (data) => {
    console.log(data.data.files)
    const files = data.data.files;
    const fileArr = []
    for (let index in files) {
        let language = files[index].language;
        if (fileArr.indexOf(language) === -1) { //see if there are any appearances
          fileArr.push(language);
      }
    }

    return (
        <div>
            <Card
                
                title={data.description || "NaN"}
                extra={
                    <Button>
                        Forks
                    </Button>
                }
            >
                <div>
                    {fileArr.map((language, index) => {
                        return (
                            <Chip key={index} label={language}/>
                        );
                    })}
                    {Object.keys(files).map((key) => {

                        return <a href={getGistContent(data.data.owner.login,data.data.id, files[key].filename)} target="_blank" rel="noopener noreferrer"> {files[key].filename}</a>
                    })}
                          
                    <p>No. Files {Object.keys(files).length}</p>
                </div>

            </Card>
            

        </div>
    );

};

export {GistDescription}