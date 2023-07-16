import Banner from './Banner';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Factures from "./Factures";
import TVA from "./AnalyseTVA";
import Perms from "./Perms";
import Archives from "./Archives";
import Logout from "./Logout";

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