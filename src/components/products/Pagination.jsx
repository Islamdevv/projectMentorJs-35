import React from "react";
import Pagination from "@mui/material/Pagination";
import { useProduct } from "../../context/ProductContext";

export default function BasicPagination() {
  const { count, setPage } = useProduct();

  function handlerPage(p, n) {
    setPage(n);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px 0 20px 0",
      }}
    >
      <Pagination onChange={handlerPage} count={count} color="primary" />
    </div>
  );
}
