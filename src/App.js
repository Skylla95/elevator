import { useState } from "react";
import "./App.css";

function App() {
  const [elevator1, setElevator1] = useState(0);
  const [elevator2, setElevator2] = useState(6);
  const BUILDING_HEIGHT = 6;

  function decrementElevator1() {
    if (elevator1 > 0) setElevator1((elevator1) => elevator1 - 1);
  }
  function incrementElevator1() {
    if (elevator1 < 6) setElevator1((elevator1) => elevator1 + 1);
  }
  function decrementElevator2() {
    if (elevator2 > 0) setElevator2((elevator2) => elevator2 - 1);
  }
  function incrementElevator2() {
    if (elevator2 < 6) setElevator2((elevator2) => elevator2 + 1);
  }

  function callElevator(floor) {
    const distance1 = Math.abs(parseInt(floor) - parseInt(elevator1));
    const distance2 = Math.abs(parseInt(floor) - parseInt(elevator2));
    console.log(parseInt(floor) - parseInt(elevator2));
    if (distance1 < distance2) {
      for (let i = 0; i < distance1; i++) {
        if (parseInt(floor) - parseInt(elevator1) > 0) {
          incrementElevator1();
        } else {
          decrementElevator1();
        }
      }
    } else if (distance1 > distance2) {
      for (let i = 0; i < distance2; i++) {
        if (parseInt(floor) - parseInt(elevator2) > 0) {
          incrementElevator2();
        } else {
          decrementElevator2();
        }
      }
    } else {
      if (elevator1 < elevator2) {
        for (let i = 0; i < distance1; i++) {
          if (parseInt(floor) - parseInt(elevator1) > 0) {
            incrementElevator1();
          } else {
            decrementElevator1();
          }
        }
      } else {
        for (let i = 0; i < distance2; i++) {
          if (parseInt(floor) - parseInt(elevator2) > 0) {
            incrementElevator2();
          } else {
            decrementElevator2();
          }
        }
      }
    }
  }

  return (
    <div className="App" style={{ display: "flex" }}>
      <div className="elevator1">
        <div className="floor">
          elevator at: {elevator1 === 0 ? "P" : elevator1}
        </div>
        <div className="floor">
          elevator at: {elevator1 === 0 ? "P" : elevator1}
        </div>
        <div className="floor">
          elevator at: {elevator1 === 0 ? "P" : elevator1}
        </div>
        <div className="floor">
          elevator at: {elevator1 === 0 ? "P" : elevator1}
        </div>
        <div className="floor">
          elevator at: {elevator1 === 0 ? "P" : elevator1}
        </div>
        <div className="floor">
          elevator at: {elevator1 === 0 ? "P" : elevator1}
        </div>
        <div className="floor">
          elevator at: {elevator1 === 0 ? "P" : elevator1}
        </div>
        <button onClick={decrementElevator1}>-</button>
        <button onClick={incrementElevator1}>+</button>
      </div>

      <div>
        <div className="floor">
          floor 6<button onClick={() => callElevator(6)}>↑↓</button>
        </div>
        <div className="floor">
          floor 5<button onClick={() => callElevator(5)}>↑↓</button>
        </div>
        <div className="floor">
          floor 4<button onClick={() => callElevator(4)}>↑↓</button>
        </div>
        <div className="floor">
          floor 3<button onClick={() => callElevator(3)}>↑↓</button>
        </div>
        <div className="floor">
          floor 2<button onClick={() => callElevator(2)}>↑↓</button>
        </div>
        <div className="floor">
          floor 1<button onClick={() => callElevator(1)}>↑↓</button>
        </div>
        <div className="floor">
          Ground floor
          <button onClick={() => callElevator(0)}>↑↓</button>
        </div>
      </div>

      <div className="elevator2">
        <div className="floor">
          elevator at: {elevator2 === 0 ? "P" : elevator2}
        </div>
        <div className="floor">
          elevator at: {elevator2 === 0 ? "P" : elevator2}
        </div>
        <div className="floor">
          elevator at: {elevator2 === 0 ? "P" : elevator2}
        </div>
        <div className="floor">
          elevator at: {elevator2 === 0 ? "P" : elevator2}
        </div>
        <div className="floor">
          elevator at: {elevator2 === 0 ? "P" : elevator2}
        </div>
        <div className="floor">
          elevator at: {elevator2 === 0 ? "P" : elevator2}
        </div>
        <div className="floor">
          elevator at: {elevator2 === 0 ? "P" : elevator2}
        </div>

        <button onClick={decrementElevator2}>-</button>
        <button onClick={incrementElevator2}>+</button>
      </div>
    </div>
  );
}

export default App;
