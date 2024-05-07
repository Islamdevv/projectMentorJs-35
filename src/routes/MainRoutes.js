import React from "react";
import AddProduct from "../components/products/AddProduct";
import HomePage from "../pages/HomePage";
import ListProduct from "../components/products/ListProduct";
import { Route, Routes } from "react-router-dom";
import EditProduct from "../components/products/EditProduct";
import NotFoundPage from "../components/products/NotFoundPage";

const MainRoutes = () => {
  const MY_ROUTES = [
    {
      link: "/add",
      element: <AddProduct />,
      id: 1,
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: 2,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 4,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 5,
    },
  ];

  return (
    <Routes>
      {MY_ROUTES.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
