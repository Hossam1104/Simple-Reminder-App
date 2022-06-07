import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const DatesActions = ({ deleteData, showData }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col className="d-flex justify-content-between mb-2" sm="8">
        <Button className="btn-style p-2" onClick={deleteData}>
          مسح الكل
        </Button>
        <Button className="btn-style p-2" onClick={showData}>
          عرض الكل
        </Button>
      </Col>
    </Row>
  );
};

export default DatesActions;
