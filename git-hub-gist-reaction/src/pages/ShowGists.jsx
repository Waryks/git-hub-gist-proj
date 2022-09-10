import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getAllGistURI } from "../config/config"

import axios from "axios"

require('dotenv').config()

function ShowGistsPage(){
    let {user} = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

      useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
                getAllGistURI(user)
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
      }, []);

      return (
        <div className="ShowGists">
          <h1>The gists of the user {user}</h1>
          {loading && <div>Loading...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          <ul>
            {data &&
              data.map(({ id, url }) => (
                <li key={id}>
                  <h3>{url}</h3>
                </li>
              ))}
          </ul>
        </div>
      );
}

export default ShowGistsPage;