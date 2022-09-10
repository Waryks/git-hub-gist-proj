import React from "react";
import { GistDescription  } from "./GistDescription";

const UserGists = (data, user) => {
  return (
    <>
      {user !== null && data.data.length !== 0 ? (
          <ul>
            {data.data.map((gist) => {
              return <div key={gist.id}><GistDescription data={gist} />
                <br/></div>
            })}
          </ul>
      ) : null}
    </>
  );
};

export {UserGists}