import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React  from 'react';

import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import ShowGistsPage from './pages/ShowGists';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/gists' element={<ShowGistsPage />} />
        <Route path='/gist/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
