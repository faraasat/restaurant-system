import { useParams, Link } from "react-router-dom";
import ProductList from "../components/product-list/productlist";

import NotFoundSvg from "../static/img/notfound.png";

import "./products-list.css";

const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const ProductsList = () => {
  const { productType } = useParams();
  const proTypes = {
    "all-items": "All Items",
    "fast-food": "Fast Food",
    pizza: "Pizza",
    bbq: "BBQ",
    desserts: "Desserts",
    desi: "Desi",
  };

  console.log(proTypes[`${productType}`]);

  return (
    <div className="products-list">
      {proTypes[`${productType}`] ? (
        <div className="products-list__details">
          <h1 className="products-list__head">{proTypes[`${productType}`]}</h1>
          <ProductList itemData={itemData} />
        </div>
      ) : (
        <div className="products-list__notfound">
          <h1>Hmmm... This Product Category is not available right now!</h1>
          <img
            src={NotFoundSvg}
            alt="Cute not Found"
            style={{
              fontSize: 20,
              width: 400,
              height: 400,
            }}
          />
          <h2>Use Below Buttons to Check Our Products</h2>
          <div className="not-found__btn">
            <Link to="/">
              <button>Go to Home Pge</button>
            </Link>
            <Link to="/products">
              <button>Check Out Our Products</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
