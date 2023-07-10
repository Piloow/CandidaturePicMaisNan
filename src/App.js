import Banner from './components/Banner';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Factures from "./components/Factures";
import TVA from "./components/AnalyseTVA";
import Perms from "./components/Perms";
import Archives from "./components/Archives";
import Logout from "./components/Logout";

function App() {
  return (
      <div>
        <Router>
          <Banner />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/factures' element={<Factures />} />
            <Route path='/perms' element={<Perms/>} />
            <Route path='/TVA' element={<TVA />} />
            <Route path='/archives' element={<Archives />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;