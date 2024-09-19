import { Routes, Route } from "react-router-dom";
import { Home, Card, } from "../pages";

export const Allroutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home title="Home"/>}></Route>
            <Route path="Card" element={<Card title="Cart" />}></Route>
        </Routes>
    </>
  )
}
