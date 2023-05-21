import "./App.css";
import BasicTextFields  from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTable  from "./components/DataTable";



function App() {
 


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<BasicTextFields/>} />
    <Route path="/table" element={<DataTable/>} />
    
    </Routes>

 
  
  </BrowserRouter>
  );
}

export default App;
