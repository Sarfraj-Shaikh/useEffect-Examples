import { Route, Routes } from "react-router-dom";
import Example1 from "./Components/Ex1";

function App() {

  return (

    <Routes>
      <Route path="/" element={<Example1 />} />
    </Routes>

  );

};

export default App;
