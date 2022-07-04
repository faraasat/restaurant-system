import {
  Alert,
  Backdrop,
  Card,
  CardContent,
  CircularProgress,
  MenuItem,
  Paper,
  Select,
  Slide,
  Snackbar,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Tooltip,
  Zoom,
} from "@mui/material";
import { useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import {
  addProduct,
  deleteProdcut,
  fetchProduct,
  resetError,
} from "../redux/productSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import InfoIcon from "@mui/icons-material/Info";

import "./admin-panel.css";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("add-product");

  const handleFetch = async () => {
    await dispatch(fetchProduct());
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab value="add-product" label="Admin Panel" />
          <Tab
            value="all-products"
            label="Products Management"
            onClick={handleFetch}
          />
        </Tabs>
        <TabPanel value="add-product">
          <AddProduct />
        </TabPanel>
        <TabPanel value="all-products">
          <ProductsManagement />
        </TabPanel>
      </TabContext>
    </div>
  );
};

const AddProduct = () => {
  const { loading, error, errorStatus } = useSelector((state) => state.prod);
  const [category, setCategory] = useState("fast-food");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [weight, setWeight] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }

  const submitProduct = async (e) => {
    e.preventDefault();
    const resp = await dispatch(
      addProduct({ name, category, price, desc, shortDesc, weight, imgUrl })
    );
    if (resp?.payload && resp?.payload?.data) {
      handleClick();
      document.getElementById("ap-form-reset").reset();
    }
  };

  return (
    <div className="ap">
      <form id="ap-form-reset">
        <Card sx={{ minWidth: 275 }} style={{ padding: "0 20px" }}>
          <CardContent>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="pro-name">Product Name</label>
                  </td>
                  <td>
                    <TextField
                      id="pro-name"
                      type="text"
                      name="pro-name"
                      label="Product Name"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td>
                    <label htmlFor="price">Price</label>
                  </td>
                  <td>
                    <TextField
                      id="price"
                      type="number"
                      name="price"
                      label="Price"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </td>
                </tr>
                <div className="ap-gap"></div>
                <tr>
                  <td>
                    <label htmlFor="desc">Description</label>
                  </td>
                  <td>
                    <TextField
                      id="desc"
                      type="text"
                      name="desc"
                      label="Description"
                      variant="outlined"
                      multiline
                      rows={2}
                      fullWidth
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </td>
                  <td>
                    <label htmlFor="shortDesc">Short Description</label>
                  </td>
                  <td>
                    <TextField
                      id="shortDesc"
                      type="text"
                      name="shortDesc"
                      label="Short Description"
                      variant="outlined"
                      multiline
                      rows={2}
                      fullWidth
                      onChange={(e) => setShortDesc(e.target.value)}
                    />
                  </td>
                </tr>
                <div className="ap-gap"></div>
                <tr>
                  <td>
                    <label htmlFor="weight">Weight</label>
                  </td>
                  <td>
                    <TextField
                      id="weight"
                      type="number"
                      name="weight"
                      label="Weight"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </td>
                  <td>
                    <label htmlFor="category">Category</label>
                  </td>
                  <td>
                    <Select
                      labelId="category"
                      id="category"
                      name="category"
                      value={category}
                      label="Category"
                      onChange={(e) => setCategory(e.target.value)}
                      fullWidth
                    >
                      <MenuItem value="fast-food">Fast Food</MenuItem>
                      <MenuItem value="pizza">Pizza</MenuItem>
                      <MenuItem value="bbq">BBQ</MenuItem>
                      <MenuItem value="desserts">Desserts</MenuItem>
                      <MenuItem value="desi">Desi</MenuItem>
                    </Select>
                  </td>
                </tr>
                <div className="ap-gap"></div>
                <tr>
                  <td>
                    <label htmlFor="imgUrl">Image Url</label>
                  </td>
                  <td colSpan={3}>
                    <TextField
                      fullWidth
                      id="imgUrl"
                      type="text"
                      name="imgUrl"
                      label="Image Url"
                      variant="outlined"
                      onChange={(e) => setImgUrl(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="ap-btn">
              <button onClick={submitProduct}>Add Product</button>
            </div>
          </CardContent>
        </Card>
      </form>
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
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Product Added Successfully!
        </Alert>
      </Snackbar>
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
  );
};

const ProductsManagement = () => {
  const { loading, error, errorStatus, data } = useSelector(
    (state) => state.prod
  );
  const dispatch = useDispatch();

  function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }

  async function handleDelete(id) {
    await dispatch(deleteProdcut({ id: id }));
    await dispatch(fetchProduct());
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Image Url</TableCell>
            <TableCell align="right">Info</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <div className="pm-loading">
            <CircularProgress />
          </div>
        ) : (
          <TableBody>
            {data &&
              data?.map((product) => (
                <TableRow
                  key={product.productId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.productId}
                  </TableCell>
                  <TableCell align="right">{product.name}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.category}</TableCell>
                  <TableCell align="right">{product.weight}</TableCell>
                  <TableCell align="right" width={40}>
                    <a href={product.imgUrl} target="_new">
                      {product.imgUrl}
                    </a>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip TransitionComponent={Zoom} title={product.desc}>
                      <InfoIcon
                        style={{
                          color: "rgb(112, 112, 112)",
                          cursor: "pointer",
                        }}
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell align="right">
                    <button
                      className="pm-btn"
                      onClick={() => handleDelete(product.productId)}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>
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
    </TableContainer>
  );
};

export default AdminPanel;
