import React from "react";
import { GistDescription  } from "./GistDescription";

const UserGists = (data, user) => {
  return (
    <>
      {user !== null && data.data.length !== 0 ? (
          <ul>
            {data.data.map((gist, index) => {
              return <GistDescription key={gist.id} data={gist} />;
            })}
          </ul>
      ) : null}
    </>
  );
};

export {UserGists}