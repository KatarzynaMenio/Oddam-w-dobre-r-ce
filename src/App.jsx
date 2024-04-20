import './scss/main.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./view/Home.jsx";
import Form from "./view/Form.jsx";
import LogIn from "./view/LogIn.jsx";
import Register from "./view/Register.jsx";
import LogOut from "./view/LogOut.jsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/oddaj-rzeczy" element={<Form />} />
            <Route path="/logowanie" element={<LogIn />} />
            <Route path="/rejestracja" element={<Register />} />
            <Route path="/wylogowanie" element={<LogOut />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
