import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicPagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import FilterProduct from "./FilterProduct";

const ListProduct = () => {
  const { readProduct, deleteProduct, currentPage } = useProduct();

  const navigate = useNavigate();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <>
      <FilterProduct />
      <div className="list">
        {currentPage().length < 1 ? (
          <h1>Loading...</h1>
        ) : (
          currentPage().map((el, index) => (
            <Card key={index} sx={{ width: 400, height: 435, p: 5 }}>
              <Typography gutterBottom variant="h4" component="div">
                {el.name}
              </Typography>
              <CardMedia
                sx={{
                  height: 220,
                  width: 220,
                  objectFit: "cover",
                  m: "0 auto",
                }}
                image={
                  el.image === "" || !el.image.includes("https")
                    ? "https://cdn3.vectorstock.com/i/1000x1000/50/07/http-404-not-found-error-message-hypertext-vector-20025007.jpg"
                    : el.image
                }
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.price}
                </Typography>
                <Typography
                  sx={{ textAlign: "justify" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {el.descr}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => deleteProduct(el.id)} size="small">
                  DELETE
                </Button>
                <Button onClick={() => navigate(`/edit/${el.id}`)} size="small">
                  EDIT
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </div>
      <BasicPagination />
    </>
  );
};

export default ListProduct;
