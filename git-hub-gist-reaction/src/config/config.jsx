const getAllGistURI = (user) => {
  return `${process.env.REACT_APP_API_URL}/users/${user}/gists`;
};

const getGistForks = (gistId) => {
  return `${process.env.REACT_APP_API_URL}/gists/${gistId}/forks`;
};

const getGistContent = (gistUser, gistId, gistName) => {
  return `https://gist.githubusercontent.com/${gistUser}/${gistId}/raw/${gistName}`
};

export {getAllGistURI, getGistForks, getGistContent};