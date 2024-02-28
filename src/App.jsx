import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./components/common/Menu"
import PiePagina from "./components/common/PiePagina";
import Inicio from "./components/pages/Inicio"

function App() {
  

  return (
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
     <Route path="/" element={<Inicio></Inicio>}></Route>
     </Routes>
    <PiePagina></PiePagina>
  </BrowserRouter>
  )
}

export default App
