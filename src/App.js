import { useState } from "react";
import "./App.css";

function App() {
  const BUILDING_HEIGHT = 6;
  const [elevator1, setElevator1] = useState(0);
  const [elevator2, setElevator2] = useState(BUILDING_HEIGHT);
  const [elevator1state, setElevator1state] = useState("idle");
  const [elevator2state, setElevator2state] = useState("idle");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function sendElevator1ToFloor(floor) {
    const distance = Math.abs(parseInt(floor) - parseInt(elevator1));
    for (let i = 0; i < distance; i++) {
      if (parseInt(floor) - parseInt(elevator1) > 0) {
        setElevator1state("ascending");
        setElevator1((elevator1) => elevator1 + 1);
      } else {
        setElevator1state("descending");
        setElevator1((elevator1) => elevator1 - 1);
      }
      await sleep(1000);
    }
    setElevator1state("idle");
  }
  async function sendElevator2ToFloor(floor) {
    const distance = Math.abs(parseInt(floor) - parseInt(elevator2));
    for (let i = 0; i < distance; i++) {
      if (parseInt(floor) - parseInt(elevator2) > 0) {
        setElevator2state("ascending");
        setElevator2((elevator2) => elevator2 + 1);
      } else {
        setElevator2state("descending");
        setElevator2((elevator2) => elevator2 - 1);
      }
      await sleep(1000);
      setElevator2state("idle");
    }
  }

  function callElevator(floor) {
    const distance1 = Math.abs(parseInt(floor) - parseInt(elevator1));
    const distance2 = Math.abs(parseInt(floor) - parseInt(elevator2));
    if (distance1 < distance2) {
      //Elevator 1 is closer
      sendElevator1ToFloor(floor);
    } else if (distance1 > distance2) {
      //Elevator 2 is closer
      sendElevator2ToFloor(floor);
    } else {
      //Both are on the same distance
      if (elevator1 < elevator2) {
        //elevator 1 is below
        sendElevator1ToFloor(floor);
      } else {
        //Both are on the same distance elevator 2 is below
        sendElevator2ToFloor(floor);
      }
    }
  }

  const renderFloorButtons = () => {
    const floorButtons = [];
    for (let i = 0; i <= BUILDING_HEIGHT; i++) {
      floorButtons.push(
        <div className="floor" key={i}>
          {i === 0 ? "Ground floor" : `floor ${i}`}
          <button onClick={() => callElevator(i)}>↑↓</button>
        </div>
      );
    }
    return floorButtons.reverse(); // Reverse the array to render from top to bottom
  };

  const renderElevator1 = () => {
    const elevatorFloors = [];
    for (let i = 0; i <= BUILDING_HEIGHT; i++) {
      elevatorFloors.push(
        <div className="floor" key={i} style={{ display: "flex" }}>
          <span
            style={{ height: "fit-content", background: "blue", width: "100%" }}
          >
            {" "}
            {elevator1 === 0 ? "P" : elevator1}{" "}
          </span>
          <span
            style={{ height: "fit-content", background: "blue", width: "100%" }}
          >
            {" "}
            {elevator1state}
          </span>
        </div>
      );
    }
    return elevatorFloors.reverse();
  };
  const renderElevator2 = () => {
    const elevatorFloors = [];
    for (let i = 0; i <= BUILDING_HEIGHT; i++) {
      elevatorFloors.push(
        <div className="floor" key={i} style={{ display: "flex" }}>
          <span
            style={{ height: "fit-content", background: "blue", width: "100%" }}
          >
            {elevator2 === 0 ? "P" : elevator2}{" "}
          </span>
          <span
            style={{ height: "fit-content", background: "blue", width: "100%" }}
          >
            {elevator2state}
          </span>
        </div>
      );
    }
    return elevatorFloors.reverse();
  };

  const renderCabin1 = () => {
    const cabin = [];
    for (let i = 0; i <= BUILDING_HEIGHT; i++) {
      cabin.push(
        <button
          onClick={() => sendElevator1ToFloor(i)}
          key={i}
          style={{
            width: "16px",
            height: "16px",
            fontSize: "8px",
            borderRadius: "50%",
            background: "#555555",
            color: "white",
          }}
        >
          {i}
        </button>
      );
    }
    return cabin;
  };
  const renderCabin2 = () => {
    const cabin = [];
    for (let i = 0; i <= BUILDING_HEIGHT; i++) {
      cabin.push(
        <button
          onClick={() => sendElevator2ToFloor(i)}
          key={i}
          style={{
            width: "16px",
            height: "16px",
            fontSize: "8px",
            borderRadius: "50%",
            background: "#555555",
            color: "white",
          }}
        >
          {i}
        </button>
      );
    }
    return cabin;
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <div className="elevator">
        {renderElevator1()}
        <div
          className="cabin"
          style={{
            backgroundImage:
              "url(https://peakelevator.com/wp-content/uploads/2019/01/Depositphotos_46733071_m-2015.jpg)",
            backgroundSize: "cover",
            position: "absolute",
            top: "2vh",
            transform:
              "translateY(" + (BUILDING_HEIGHT - elevator1) * 12.2 + "vh)",
            left: "42.4vw",
            height: "10.2vh",
            transition: "1s",
            width: "5vw",
          }}
        >
          {renderCabin1()}
        </div>
      </div>

      <div>{renderFloorButtons()}</div>

      <div className="elevator">
        {renderElevator2()}
        <div
          className="cabin"
          style={{
            backgroundImage:
              "url(https://peakelevator.com/wp-content/uploads/2019/01/Depositphotos_46733071_m-2015.jpg)",
            backgroundSize: "cover",
            position: "absolute",
            top: "2vh",
            transform:
              "translateY(" + (BUILDING_HEIGHT - elevator2) * 12.2 + "vh)",
            left: "52.6vw",
            height: "10.2vh",
            transition: "1s",
            width: "5vw",
          }}
        >
          {renderCabin2()}
        </div>
      </div>
    </div>
  );
}

export default App;
