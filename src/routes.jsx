import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicial from "./Pages/Inicial"
import Home from "./Pages/Home"

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicial />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
