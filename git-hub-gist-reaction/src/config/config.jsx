const getAllGistURI = (user) => {
  return `${process.env.REACT_APP_API_URL}/users/${user}/gists`;
};

const getSingleGistURI = (gistId) => {
  return `${process.env.REACT_APP_API_URL}/gists/${gistId}`;
};

export {getAllGistURI, getSingleGistURI};