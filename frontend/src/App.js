import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Make sure this import is correct
import FileUpload from "./FileUpload"
import FileList from "./FileList"
import Processing from "./processing";
import './App.css';

function App() {
  return (
    <Router>
      {/*wrap the app with router to enable to routing */ }
      <Routes>
        {/* Define the routes*/}
        <Route path="/" element={<FileUpload/>}/>
        <Route path="/processing" element={<Processing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
