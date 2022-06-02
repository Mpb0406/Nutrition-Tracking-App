import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyFoodTable = () => {
  return (
    <Table
      className="food-table border-dark"
      striped
      bordered
      hover
      variant="dark">
      <thead>
        <tr>
          <th className="bg-primary border-0">Food</th>
          <th className="bg-primary border-0">Calories</th>
          <th className="bg-primary border-0">Fat (g)</th>
          <th className="bg-primary border-0">Carbs (g)</th>
          <th className="bg-primary border-0">Protein (g)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4 oz. Chicken Breast</td>
          <td>105</td>
          <td>2</td>
          <td>0</td>
          <td>23</td>
        </tr>
        <tr>
          <td>1 c. Jasmine Rice</td>
          <td>205</td>
          <td>0</td>
          <td>45</td>
          <td>4</td>
        </tr>
      </tbody>
      <tfoot className="border-dark">
        <tr>
          <td className="bg-dark border-0">
            <Link
              to="/search"
              className="bg-transparent border-0 text-secondary fw-bold text-decoration-none">
              + Add Food
            </Link>
          </td>
          <td className="bg-dark border-0 fw-bold">310</td>
          <td className="bg-dark border-0 fw-bold">2</td>
          <td className="bg-dark border-0 fw-bold">45</td>
          <td className="bg-dark border-0 fw-bold">27</td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default MyFoodTable;
