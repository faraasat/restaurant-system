import {
  Alert,
  Backdrop,
  CircularProgress,
  Slide,
  Snackbar,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ProductList from "../components/product-list/productlist";
import { useSelector } from "react-redux";

import { fetchCategory, fetchProduct, resetError } from "../redux/productSlice";
import NotFoundSvg from "../static/img/notfound.png";

import "./products-list.css";
import { useEffect } from "react";

const ProductsList = () => {
  const { loading, error, errorStatus, data } = useSelector(
    (state) => state.prod
  );
  const { productType } = useParams();
  const proTypes = {
    "all-items": "All Items",
    "fast-food": "Fast Food",
    pizza: "Pizza",
    bbq: "BBQ",
    desserts: "Desserts",
    desi: "Desi",
  };

  const dispatch = useDispatch();

  function fetchCat() {
    dispatch(fetchCategory({ category: productType }));
  }

  useEffect(() => {
    if (productType === "all-items") {
      dispatch(fetchProduct());
    } else if (proTypes[`${productType}`]) {
      fetchCat();
    }
  }, []);

  function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }

  return (
    <div className="products-list">
      {proTypes[`${productType}`] ? (
        <div className="products-list__details">
          {!loading && (
            <>
              <h1 className="products-list__head">
                {proTypes[`${productType}`]}
              </h1>
              <ProductList itemData={data} />
            </>
          )}
          {loading && (
            <Backdrop
              className="backdrop"
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
          <Snackbar
            open={errorStatus}
            autoHideDuration={2000}
            onClose={() => dispatch(resetError())}
            TransitionComponent={TransitionRight}
            key={error}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            style={{ transform: "translateY(60px)" }}
          >
            <Alert
              onClose={() => dispatch(resetError())}
              severity="error"
              sx={{ width: "100%" }}
            >
              {error}
            </Alert>
          </Snackbar>
        </div>
      ) : (
        <div className="products-list__notfound">
          <h1 style={{ marginTop: 60 }}>
            Hmmm... This Product Category is not available right now!
          </h1>
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
