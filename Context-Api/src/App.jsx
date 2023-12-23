import { Route, Routes } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import AppNave from "./component/AppNav.jsx";
import JsonServer from "./contextApi/JsonServer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Conter from "./component/Conter";

const App = () => {
  return (
    <div>
      <AppNave>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/jsondata" element={<JsonServer />} />
          <Route path="/about" element={<About></About>} />
          <Route path="/counter" element={<Conter />} />
        </Routes>
      </AppNave>
    </div>
  );
};

export default App;
