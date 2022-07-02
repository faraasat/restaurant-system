import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Burger from "../../static/img/burger.png";
import Pizza from "../../static/img/pizza.png";
import BBQ from "../../static/img/bbq.png";
import Dessert from "../../static/img/desserts.png";

import "./carousel-slider.css";

const CarouselSlider = () => {
  var items = [
    {
      name: "Burgers",
      description:
        "Try our Unique and Sausy burgers filled with organic meat and fresh veggies that will make you crave for more!",
      img: Burger,
    },
    {
      name: "Pizza",
      description:
        "Try our Unique and Creamy pizzas topped with tender meat and mozerrella cheese that will make you crave for more!",
      img: Pizza,
    },
    {
      name: "BBQ",
      description:
        "Try our Unique and Juicy BBQ items containing wide range of delicious kebabs and tikkas that will make you crave for more!",
      img: BBQ,
    },
    {
      name: "Dessert",
      description:
        "Try our Unique and Stuffed Desserts items containing wide range of pastries, cakes and sweet items that will make you crave for more!",
      img: Dessert,
    },
  ];

  return (
    <Carousel
      height={"100%"}
      animation="slide"
      className="carousel-slider"
      fullHeightHover={false}
      navButtonsAlwaysVisible={true}
      interval={6000}
      autoPlay={true}
      stopAutoPlayOnHover={true}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
      navButtonsProps={{
        style: {
          backgroundColor: "transparent",
          borderRadius: 0,
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: -24,
          zIndex: 20,
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "rgb(255, 255, 255)",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          color: "rgba(228, 228, 228, 0.5)",
          transform: "translateY(-20px)",
        },
      }}
      IndicatorIcon={
        <CircleIcon
          style={{
            marginLeft: 7,
            marginRight: 7,
            width: 20,
            height: 20,
          }}
        />
      }
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = ({ item }) => {
  return (
    <div className="carousel-item">
      <div className="carousel-item__bg">
        <div className="carousel-item__align">
          <div className="carousel-item__txt">
            <div className="carousel-item__txt--name-bg" />
            <div className="carousel-item__txt--name">
              <h1>{item.name}</h1>
            </div>
            <p className="carousel-item__txt--desc">{item.description}</p>
            <button className="carousel-item__txt--btn">
              Order Now <ArrowRightAltIcon />
            </button>
          </div>
          <div className="carousel-item__img">
            <img src={item.img} alt={item.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
