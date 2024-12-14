import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MyTeam from './pages/MyTeam';
import Leagues from './pages/Leagues';
import Standings from './pages/Standings';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="my-team" element={<MyTeam />} />
          <Route path="leagues" element={<Leagues />} />
          <Route path="standings" element={<Standings />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;