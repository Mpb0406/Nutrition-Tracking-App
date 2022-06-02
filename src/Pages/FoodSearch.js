import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Form,
  Button,
  Container,
  Table,
} from "react-bootstrap";
import { API_KEY } from "../config";
import axios from "axios";

const FoodSearch = () => {
  const [food, setFood] = useState("");

  const onChange = (e) => {
    setFood(e.target.value);
  };

  const API_URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=acc6b47d&app_key=%${API_KEY}&ingr=${food}&nutrition-type=cooking`;

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(API_URL);

    console.log(response.data);
  };

  return (
    <div>
      <h1 className="text-light">Add Food</h1>
      <form onSubmit={onSubmit}>
        <InputGroup className="w-50 mt-5">
          <FormControl type="search" onChange={onChange} />
          <Button type="submit">Search</Button>
        </InputGroup>
      </form>

      {/* Results */}
      <Container className="mt-5">
        <h3 className="text-light fs-6">Results</h3>
        <Table className="mt-3" striped bordered hover variant="dark">
          <tbody>
            <tr>
              <td colSpan={8} className="border-end-0">
                <div className="d-flex align-items-center my-2">
                  <Form.Check className="mx-3" />
                  <p className="ms-2 my-0 fw-bold">Chicken</p>
                </div>
              </td>
              <td colSpan={4} className="border-start-0">
                <div className="d-flex align-items-center justify-content-end">
                  <label className="fs-7 mx-3">Qty: </label>
                  <FormControl className="quantity-input" />
                  <label className="fs-7 mx-3">of</label>
                  <Form.Select className="w-25">
                    <option value=""></option>
                  </Form.Select>
                  <button className="border-0 bg-transparent text-secondary fs-7 mx-4">
                    Details
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot className="border-top-0">
            <tr className="border-0">
              <button className="bg-transparent text-secondary">
                + Add Checked
              </button>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </div>
  );
};

export default FoodSearch;
