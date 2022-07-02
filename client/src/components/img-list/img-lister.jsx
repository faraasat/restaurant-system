import * as React from "react";
import ImageList from "@mui/material/ImageList";
import Container from "@mui/material/Container";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import Hamburger from "../../static/img/hamburger.jpg";
import Pancakes from "../../static/img/pancakes.jpg";
import Bread from "../../static/img/bread.jpg";
import StrawberryCake from "../../static/img/strawberrycake.jpg";
import Paratha from "../../static/img/paratha.jpg";
import PizzaPlate from "../../static/img/pizza plate.jpg";
import CheesyPizza from "../../static/img/cheesy pizza.jpg";
import Restaurant from "../../static/img/restaurant.jpg";
import BBQ from "../../static/img/bbq.jpg";
import Biryani from "../../static/img/biryani.jpg";
import MatkaBiryani from "../../static/img/matkabiryani.jpg";
import Karahi from "../../static/img/karahi.jpg";
import KebabPlate from "../../static/img/kebab plate.jpg";
import TurkishKebab from "../../static/img/turkish kebab.jpg";
import IraniKebab from "../../static/img/irani kebab.jpg";
import "./img-lister.css";

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
        cols={4}
        gap={5}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem
              className="img-lister__item"
              key={item.img}
              cols={cols}
              rows={rows}
            >
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: Bread,
    title: "Bread",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: Pancakes,
    title: "Pancakes",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: Hamburger,
    title: "Hamburger",
    author: "@helloimnik",
  },
  {
    img: Paratha,
    title: "Paratha",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: PizzaPlate,
    title: "Pizza Plate",
    author: "@tjdragotta",
  },
  {
    img: Restaurant,
    title: "Restaurant",
    author: "@katie_wasserman",
  },
  {
    img: TurkishKebab,
    title: "Turkish Kebab",
    author: "@silverdalex",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: CheesyPizza,
    title: "Cheesy Pizza",
    author: "@peterlaster",
  },
  {
    img: BBQ,
    title: "BBQ",
    author: "@southside_customs",
  },
  {
    img: Biryani,
    title: "Biryani",
    author: "@shelleypauls",
  },
  {
    img: MatkaBiryani,
    title: "Matka Biryani",
    author: "@peterlaster",
    featured: true,
  },
  {
    img: Karahi,
    title: "Karahi",
    author: "@southside_customs",
  },
  {
    img: KebabPlate,
    title: "Kebab Plate",
    author: "@helloimnik",
  },
  {
    img: IraniKebab,
    title: "Irani Kebab",
    author: "@nolanissac",
  },
  {
    img: StrawberryCake,
    title: "Strawberry Cake",
    author: "@helloimnik",
  },
  // {
  //   img: Paratha,
  //   title: "Paratha",
  //   author: "@hjrc33",
  // },
];

export default ImgLister;
