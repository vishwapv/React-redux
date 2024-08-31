import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  //   const myState = useSelector(state = () => {
  // why can't we write like this
  // })

  // i am pushing this code from my original account
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment and decrement of the count using Redux</h1>
      <div>
        <button onClick={() => dispatch(decNumber())}>-</button>
        <input type="text" value={myState} style={{ width: "20px" }} />
        <button onClick={() => dispatch(incNumber())}>+</button>
      </div>
    </div>
  );
}

export default App;
