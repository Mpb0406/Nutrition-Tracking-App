import React, { useState } from "react";
import nextIcon from "../img/nextIcon.png";
import prevIcon from "../img/prevIcon.png";
import { Tabs, Tab } from "react-bootstrap";
import MyFoodTable from "../Components/MyFoodTable";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  const changeDate = (e) => {
    if (e.target.getAttribute("toggle") === "prev") {
      setDate(new Date(date.setUTCDate(date.getUTCDate() - 1)));
    } else {
      setDate(new Date(date.setUTCDate(date.getUTCDate() + 1)));
    }
  };

  return (
    <div>
      <h1 className="text-light">Macro Tracking</h1>
      <div className="carousel">
        <img
          className="date-toggle"
          toggle="prev"
          src={prevIcon}
          onClick={changeDate}
        />
        <h3 className="text-light">{date.toISOString().split("T")[0]}</h3>
        <img
          className="date-toggle"
          toggle="next"
          src={nextIcon}
          onClick={changeDate}
        />
      </div>

      {/* Progress Rings */}
      <div className="box">
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle
              cx="70"
              cy="70"
              r="70"
              style={{
                strokeDashoffset: `calc(440 - (440 * 87) / 100)`,
                transition: "all 1.5s ease",
              }}></circle>
          </svg>
          <div className="number">
            <p className="text-light">Calories</p>
            <h2 className="text-light">1250/2100</h2>
          </div>
        </div>
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle
              cx="70"
              cy="70"
              r="70"
              style={{
                strokeDashoffset: `calc(440 - (440 * 87) / 100)`,
                transition: "all 1.5s ease",
              }}></circle>
          </svg>
          <div className="number">
            <p className="text-light">Fat</p>
            <h2 className="text-light">38g/72g</h2>
          </div>
        </div>
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle
              cx="70"
              cy="70"
              r="70"
              style={{
                strokeDashoffset: `calc(440 - (440 * 87) / 100)`,
                transition: "all 1.5s ease",
              }}></circle>
          </svg>
          <div className="number">
            <p className="text-light">Carbs</p>
            <h2 className="text-light">123g/225g</h2>
          </div>
        </div>
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle
              cx="70"
              cy="70"
              r="70"
              style={{
                strokeDashoffset: `calc(440 - (440 * 87) / 100)`,
                transition: "all 1.5s ease",
              }}></circle>
          </svg>
          <div className="number">
            <p className="text-light">Protein</p>
            <h2 className="text-light">143g/185g</h2>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        defaultActiveKey="Breakfast"
        id="uncontrolled-tab-example"
        className="tabs-container mb-4">
        <Tab className="text-light" eventKey="Breakfast" title="Breakfast">
          <MyFoodTable />
        </Tab>
        <Tab className="text-light" eventKey="Lunch" title="Lunch">
          <MyFoodTable />
        </Tab>
        <Tab className="text-light" eventKey="Dinner" title="Dinner">
          <MyFoodTable />
        </Tab>
        <Tab className="text-light" eventKey="Snack" title="Snack">
          <MyFoodTable />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
