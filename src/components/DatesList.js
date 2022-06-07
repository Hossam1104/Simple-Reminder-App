import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col className="" sm="8">
        <div className="rectangle p-2 mb-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div className="d-flex border-bottom mx-3 my-3" key={item.id}>
                  <img src={item.img} alt="Avatar" className="img-avatar" />
                  <div className="px-3">
                    <p className="d-inline fs-4 fw-bold">{item.name} </p>
                    <p className="fs-6 text-success"> {item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="text-danger text-center mt-5">
              لا يوجد مواعيد اليوم
            </h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
