import { Route, Routes } from 'react-router-dom';
import React  from 'react';

import ShowGistsPage from './pages/ShowGists';
import SearchPage from './pages/Search';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<SearchPage />} />
      <Route path='/gists/:user' element={<ShowGistsPage />}/>
    </Routes>
  );
}

export default App;
