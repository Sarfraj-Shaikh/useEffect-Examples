import { Route, Routes } from "react-router-dom";
import Example1 from "./Components/Ex1";
import Example2 from "./Components/Ex2";
import Example3 from "./Components/Ex3";
import Example4 from "./Components/Ex4";
import Example5 from "./Components/Ex5";

function App() {

  return (

    <Routes>
      <Route path="/" element={<Example1 />} />

      <Route path="/1" element={<Example1 />} />
      <Route path="/2" element={<Example2 />} />
      <Route path="/3" element={<Example3 />} />
      <Route path="/4" element={<Example4 />} />
      <Route path="/5" element={<Example5 />} />

    </Routes>

  );

};

export default App;
