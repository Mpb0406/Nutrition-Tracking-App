import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

const DetailsModal = ({ show, setShow, details, id }) => {
  const handleClose = () => setShow(false);

  const parsedFoodData = JSON.parse(localStorage.getItem("searchResults"));

  const foodItem = parsedFoodData.filter((item) => item.food.foodId === id)[0];

  if (foodItem)
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>{details}</h3>
        </Modal.Header>
        <Modal.Body>
          <form action="submit" className="d-flex align-items-center">
            <label>Qty: </label>
            <Form.Control className="mx-2" />
            <label>of</label>
            <Form.Control className="mx-2" />
          </form>
          <hr />
          <div>
            <Col className="w-75 mx-auto">
              <h3 className="fw-bold">Nutrition Facts</h3>
              <div>
                <p>
                  <span>Serving Size: </span>1 Whole
                </p>
              </div>
              <p className="fw-bold mb-0" style={{ fontSize: "12px" }}>
                Amount per Serving
                <hr className="m-1" />
              </p>
              <div className="d-flex justify-content-between">
                <p className="my-0">
                  <span className="fw-bold">Calories: </span>
                  {foodItem.food.nutrients.ENERC_KCAL}
                </p>
                <p className="mb-1">
                  Calories From Fat{" "}
                  {Math.round(foodItem.food.nutrients.FAT * 9)}
                </p>
              </div>
              <hr className="m-1" style={{ border: "2px solid #000" }} />
              <p className="text-end mb-1 fw-bold" style={{ fontSize: "12px" }}>
                % Daily Value
              </p>
              <div className="d-flex justify-content-between">
                <p className="mb-0">
                  <span className="fw-bold">Fat: </span>
                  {foodItem.food.nutrients.FAT}g
                </p>
                <p className="fw-bold mb-0">
                  {Math.round((foodItem.food.nutrients.FAT / 78) * 100)}%
                </p>
              </div>
              <hr className="m-1" />
              <div className="d-flex justify-content-between">
                <p className="mb-0">
                  <span className="fw-bold">Total Carbohydrates: </span>
                  {foodItem.food.nutrients.CHOCDF}g
                </p>
                <p className="fw-bold mb-0">
                  {Math.round((foodItem.food.nutrients.CHOCDF / 300) * 100)}%
                </p>
              </div>
              <hr className="m-1" />
              <div className="d-flex justify-content-between">
                <p className="mb-0 ms-4">
                  <span>Dietary Fiber: </span>
                  {foodItem.food.nutrients.FIBTG}g
                </p>
                <p className="fw-bold mb-0">
                  {Math.round((foodItem.food.nutrients.FIBTG / 28) * 100)}%
                </p>
              </div>
              <hr className="m-1" />
              <div className="d-flex justify-content-between">
                <p className="mb-0">
                  <span className="fw-bold">Protein: </span>
                  {foodItem.food.nutrients.PROCNT}g
                </p>
                <p className="fw-bold mb-0">
                  {Math.round((foodItem.food.nutrients.PROCNT / 50) * 100)}%
                </p>
              </div>
              <hr className="m-1" />
            </Col>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="info">
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default DetailsModal;
