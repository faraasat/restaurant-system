import { Link } from "react-router-dom";

import NotFoundSvg from "../static/img/notfound.png";

import "./404.css";

const NotFound = () => {
  return (
    <div className="not-found" style={{ margin: "40px 0 40px 0" }}>
      <h1>Hmmm....?!!?</h1>
      <img
        src={NotFoundSvg}
        alt="Cute not Found"
        style={{
          fontSize: 20,
          width: 400,
          height: 400,
        }}
      />
      <h2>Where Are You Wandering? When We have Exciting Food Here!!</h2>
      <div className="not-found__btn">
        <Link to="/">
          <button>Go to Home Pge</button>
        </Link>
        <Link to="/products">
          <button>Check Out Our Products</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
