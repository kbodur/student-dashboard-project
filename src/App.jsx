

import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Aside from "./Components/Aside";
import "./App.css";
import data from "../src/data/data.json";

function App() {
  const [currentData, setCurrentData] = useState([...data]);
  const [currentCohort, setCurrentCohort] = useState(null);

  function filterStudent(classTerm) {
    let filterArray = data;
    if (classTerm) {
      filterArray = data.filter((student) => classTerm === student.cohort.cohortCode);
    }
    setCurrentData(filterArray);
    setCurrentCohort(classTerm);
  }

  return (
    <>
      <Header />
      <div className="main">
        <Nav filterStudent={filterStudent} currentCohort={currentCohort} />
        <Aside data={currentData} currentCohort={currentCohort} />
      </div>
    </>
  );
}

export default App;
