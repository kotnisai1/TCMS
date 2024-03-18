import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterCustomer from "./pages/RegisterCustomer";
import RadioButtons from "./components/RadioButton";

function App() {
  return (
    <Routes>
      {/** <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<RegisterCustomer />} />
    </Routes>
  );
}

export default App;
