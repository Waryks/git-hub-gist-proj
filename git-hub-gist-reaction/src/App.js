import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React  from 'react';

import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import ShowGistsPage from './pages/ShowGists';
import SearchPage from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/gists/:user' element={<ShowGistsPage />} />
        <Route path='/gist/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
