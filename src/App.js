import React, { useState } from 'react';
import NavBar from './components/Navbar';
import Neews from './components/Neews';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = "b197d5fa685a4e6990a15a17b49f75ec";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path="/" element={<Neews setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<Neews setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<Neews setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<Neews setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/health" element={<Neews setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<Neews setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/sports" element={<Neews setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<Neews setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;