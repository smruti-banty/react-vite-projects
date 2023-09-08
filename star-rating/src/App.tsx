import "./App.css";
import StarRating from "./StarRating";
import { useState } from "react";
function App() {
  const [rate, setRate] = useState(1);
  return (
    <>
      <StarRating totalStar={7} color="cyan" width={100} height={100} />
      <br />
      <StarRating totalStar={5} color="cyan" width={50} height={100} rating={rate} setRating={setRate} />
      <h1>{rate} value</h1>
    </>
  );
}

export default App;
