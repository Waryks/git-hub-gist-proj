import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getAllGistURI, getGistContent } from "../config/config"

import { getDataUsers } from "../data/getData"

import axios from "axios"
import { UserGists } from '../components/UserGists';

function ShowGistsPage(){
    let {user} = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /*  useEffect(() => {
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
      //<a href={getGistContent(user,id)} target="_blank" rel="noopener noreferrer">html_url</a>
      useEffect(() => {
        setData(getDataUsers());
        setLoading(false)
        setError(null);
      }, []);
      

      return (
        <div>
          <h1>The gists of the user {user}</h1>
          {loading && <div>Loading...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          <ul>
            {data && <UserGists data={data} user={user} />}
          </ul>
        </div>
      );
}

export default ShowGistsPage;