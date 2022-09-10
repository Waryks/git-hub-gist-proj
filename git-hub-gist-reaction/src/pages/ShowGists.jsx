import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getAllGistURI } from "../config/config"
import { UserGists } from '../components/UserGists';
import {Footer} from "../components/Footer";

import axios from "axios"


function ShowGistsPage(){
    let {user} = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [found, setFound] = useState(false);

      useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
                getAllGistURI(user.trim())
            );
            if(response){
                setData(response.data);
                setError(null);
                setFound(true);
            }
            else{
                setError(true);
                setData(null)
                setFound(false);
            }
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
        <div>
            {found && <h1>The gists of the user {user}</h1>}
          {loading && <div>Loading...</div>}
          {error && error === 'Request failed with status code 404' && (
            <div>{'User not found try another!'}</div>
          )}
          {error && error !== 'Request failed with status code 404' && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          <ul>
            {data && <UserGists data={data} user={user} />}
              <Footer/>
          </ul>
        </div>

      );
}

export default ShowGistsPage;