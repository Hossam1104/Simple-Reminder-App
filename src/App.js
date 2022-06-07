import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { person } from "./components/data.js";
import DatesActions from "./components/DatesActions.js";
import DatesCount from "./components/DatesCount.js";
import DatesList from "./components/DatesList.js";

const App = () => {
  const [personData, setPersonData] = useState(person);

  const onDelete = () => {
    setPersonData([]);
  };

  const showAll = () => {
    setPersonData(person);
  };

  return (
    <div className="container">
      <Container>
        <DatesCount person={personData} />

        <DatesList person={personData} />

        <DatesActions deleteData={onDelete} showData={showAll} />
      </Container>
    </div>
  );
};
export default App;
