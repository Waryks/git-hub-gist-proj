import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getAllGistURI, getGistContent } from "../config/config"

import { getDataUsers } from "../data/getData"

import axios from "axios"

function ShowGistsPage(){
    let {user} = useParams();

    /*const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

      useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
                getAllGistURI(user.trim())
            );
            setData(response.data);
            setError(null);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        };
        getData();
      }, []);*/

      const data = getDataUsers();
      const loading = false;
      const error = null;

      return (
        <div className="ShowGists">
          <h1>The gists of the user {user}</h1>
          {loading && <div>Loading...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          <ul>
            {data &&
              data.map(({ id, files, description }) => (
                <div>
                  <li key={id}>
                  <h2>{description}</h2>
                  <button>Forks</button>
                    <h3>Number of files: {Object.keys(files).length}</h3>
                    <a href={getGistContent(user,id)} target="_blank" rel="noopener noreferrer">html_url</a>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      );
}

export default ShowGistsPage;