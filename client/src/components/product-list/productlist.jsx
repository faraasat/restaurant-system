import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

import "./product-list.css";

const addToCart = (prod) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    let flag = false;
    const newCart = cart.map((c) => {
      if (c.productId === prod.productId) {
        c.count += 1;
        flag = true;
      }
      return c;
    });
    if (!flag) {
      newCart.push({count: 1, ...prod});
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    localStorage.setItem("cart", JSON.stringify([{ count: 1, ...prod }]));
  }
};

const ProductList = ({ itemData }) => {
  return (
    <Container className="product-list__container">
      <ImageList sx={{ transform: "translateZ(0)" }} cols={3} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.productId}>
            <img
              src={`${item.imgUrl}`}
              srcSet={`${item.imgUrl}`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              position="below"
              actionIcon={
                <button
                  className="products-list__add"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              }
            />
            <div className="product-list__overlay">
              <Link to={`/products`}>
                <h3>{item.name}</h3>
              </Link>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default ProductList;
