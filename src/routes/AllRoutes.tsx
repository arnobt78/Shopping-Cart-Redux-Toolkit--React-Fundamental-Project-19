import { Route, Routes } from "react-router-dom";
import { Cart, Home } from "../pages";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
