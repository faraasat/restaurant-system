import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import "./cart.css";
import { useState } from "react";

const Cart = () => {
  const carts = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(carts);
  let grandTotal = 0;

  const incrementCart = (id) => {
    const newCart = cart.map((c) => {
      if (c.productId === id) {
        c.count += 1;
      }
      return c;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const decrementCart = (id) => {
    let rem = false;
    let newCart = cart.map((c) => {
      if (c.productId === id) {
        if (c.count <= 1) {
          rem = true;
        } else {
          c.count -= 1;
        }
      }
      return c;
    });
    if (rem) {
      newCart = newCart.filter((c) => c.productId !== id);
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart ? (
        <div className="cart-present">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Id</TableCell>
                  <TableCell align="right">Image Url</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Count</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart?.map((product) => {
                  const pTotal = product.count * product.price;
                  grandTotal += pTotal;
                  return (
                    <TableRow
                      key={product.productId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {product.productId}
                      </TableCell>
                      <TableCell align="right">
                        <img
                          width={40}
                          height={40}
                          src={product.imgUrl}
                          alt={product.name}
                        />
                      </TableCell>
                      <TableCell align="right">{product.name}</TableCell>
                      <TableCell align="right">{product.price}</TableCell>
                      <TableCell align="right">{product.category}</TableCell>
                      <TableCell align="right" className="cart-add-sub">
                        <button
                          onClick={() => incrementCart(product.productId)}
                        >
                          <AddIcon />
                        </button>
                        <span>{product.count}</span>
                        <button
                          onClick={() => decrementCart(product.productId)}
                        >
                          <RemoveIcon />
                        </button>
                      </TableCell>
                      <TableCell align="right">{pTotal}</TableCell>
                    </TableRow>
                  );
                })}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontWeight: "bold" }}
                  >
                    Total
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    {grandTotal}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="cart-check-btn">
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <ProductionQuantityLimitsIcon />
        </div>
      )}
    </div>
  );
};

export default Cart;
