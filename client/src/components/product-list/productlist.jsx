import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

import "./product-list.css";

const ProductList = ({ itemData }) => {
  return (
    <Container className="product-list__container">
      <ImageList sx={{ transform: "translateZ(0)" }} cols={4} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              position="below"
              actionIcon={
                <button className="products-list__add">Add to Cart</button>
              }
            />
            <div className="product-list__overlay">
              <Link to={`/products/product/${item.id}`}>
                <h3>{item.title}</h3>
              </Link>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default ProductList;
