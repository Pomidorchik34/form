import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./Components";

function App() {
  const [counted, setCount] = useState(0);
  const [inputCount, setInputCount] = useState([]);
  useEffect(() => {
    let arr = [];
    if (localStorage.getItem("arr")) {
      arr = JSON.parse(localStorage.getItem("arr"));
      if (counted != 0) {
        arr.push(counted);
      }
      localStorage.setItem("arr", JSON.stringify(arr));
    } else {
      if (counted != 0) {
        arr.push(counted);
      }
      localStorage.setItem("arr", JSON.stringify(arr));
    }
    setInputCount(arr);
  }, [counted]);
  return (
    <>
      <div className="conatainer">
        <form className="form">
          {inputCount.map((value) => {
            return <Form key={value} />;
          })}
        </form>
        <button
          onClick={(count) => {
            if (localStorage.getItem("inputs")) {
              count = JSON.parse(localStorage.getItem("inputs"));
              count++;
              localStorage.setItem("inputs", count);
            } else {
              count = 0;
              count++;
              localStorage.setItem("inputs", count);
            }
            setCount(count);
          }}
        >
          Add
        </button>
        <button
          onClick={(count) => {
            if (localStorage.getItem("inputs")) {
              count = JSON.parse(localStorage.getItem("inputs"));
              if (count > 0) {
                count--;
              }
              localStorage.setItem("inputs", count);
            } else {
              count = 0;
              if (count > 0) {
                count--;
              }
              localStorage.setItem("inputs", count);
            }
            let arr = [];
            if (localStorage.getItem("arr")) {
              arr = JSON.parse(localStorage.getItem("arr"));
              arr.pop();
              arr.pop();
              localStorage.setItem("arr", JSON.stringify(arr));
            } else {
              arr.pop();
              arr.pop();
              localStorage.setItem("arr", JSON.stringify(arr));
            }
            setCount(count);
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default App;
