// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./Components/EmpListing";
import EmpCreate from "./Components/EmpCreate";
import EmpDetail from "./Components/EmpDetail";
import EmpEdit from "./Components/EmpEdit";
import DateOfBirthInput from "./Components/DateOfBirthInput";

function App() {
  return (
    <div className="App">
      <h1>MLab Logging System</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empid" element={<EmpDetail />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
