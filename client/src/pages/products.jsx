import * as React from "react";
import ImageList from "@mui/material/ImageList";
import Container from "@mui/material/Container";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

import CheesyPizza from "../static/img/cheesy pizza.jpg";
import BBQ from "../static/img/bbq.jpg";
import StrawberryCake from "../static/img/strawberrycake.jpg";
import Karahi from "../static/img/karahi.jpg";
import AllFoods from "../static/img/all-foods.jpg";
import Burger from "../static/img/hamburger.jpg";

import "./products.css";

const Products = () => {
  return (
    <div className="products" style={{ margin: "40px 0 40px 0" }}>
      <h1>Products</h1>
      <ImgLister />
    </div>
  );
};

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImgLister = () => {
  return (
    <Container className="img-lister__container">
      <ImageList
        className="img-lister"
        sx={{ transform: "translateZ(0)" }}
        cols={3}
        gap={5}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem
              className="img-lister__item"
              key={item.title}
              cols={cols}
              rows={rows}
            >
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <Link to={`/products/${item.path}`}>
                    <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
                      <InfoIcon />
                    </IconButton>
                  </Link>
                }
              />
              <div className="products-link">
                <Link to={`/products/${item.path}`}>
                  <button>Check Out {item.title}</button>
                </Link>
              </div>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
};

const itemData = [
  {
    img: AllFoods,
    title: "All Items",
    path: "all-items",
    featured: true,
  },
  {
    img: Burger,
    title: "Fast Food",
    path: "fast-food",
  },
  {
    img: CheesyPizza,
    title: "Pizza",
    path: "pizza",
  },
  {
    img: BBQ,
    title: "BBQ",
    path: "bbq",
  },
  {
    img: StrawberryCake,
    title: "Desserts",
    path: "dessert",
  },
  {
    img: Karahi,
    title: "Desi",
    path: "desi",
  },
];

export default Products;
