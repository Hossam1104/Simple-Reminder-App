import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesCount = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col className="mt-3 mb-3 fs-4 text-primary" sm="8">
        لديك اليوم {person.length} مواعيد
      </Col>
    </Row>
  );
};

export default DatesCount;
