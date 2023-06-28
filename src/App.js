// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./Components/EmpListing";
import EmpCreate from "./Components/EmpCreate";
import EmpDetail from "./Components/EmpDetail";
import EmpEdit from "./Components/EmpEdit";
import Login from "./Components/Login";
import Register from "./Components/Register";

// import Images from "./Components/Images";
// import DateOfBirthInput from "./Components/DateOfBirthInput";

function App() {
  return (
    <div className="App">
      <br/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empid" element={<EmpDetail />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
      {/* <DateOfBirthInput /> */}
      {/* <Images /> */}

     

    </div>
  );
}

export default App;
