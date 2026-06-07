import { Route, Routes } from "react-router";
import { Layout } from "../Layout";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
