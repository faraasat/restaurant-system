import {
  Alert,
  Backdrop,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Slide,
  Snackbar,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupAsync, resetError } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

import "./signup.css";

const Signup = () => {
  const { loading, error, errorStatus } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const signupUser = async (e) => {
    e.preventDefault();
    const resp = await dispatch(signupAsync({ email, password, name }));
    console.log(resp);
    if (!resp.error && resp.payload.data) {
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(resp.payload.data.result));
      navigate("/");
    }
  };

  function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="name">Username</label>
                  </td>
                  <td>
                    <TextField
                      id="name"
                      type="text"
                      name="name"
                      label="Username"
                      variant="outlined"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
                <div className="signup-gap"></div>
                <tr>
                  <td>
                    <label htmlFor="email">Email</label>
                  </td>
                  <td>
                    <TextField
                      id="email"
                      type="text"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <div className="signup-gap"></div>
                <tr>
                  <td>
                    <label htmlFor="password">Password</label>
                  </td>
                  <td>
                    <TextField
                      id="password"
                      type="password"
                      name="password"
                      label="Password"
                      variant="outlined"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="signup-check">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I Agree to License and Agreements."
              />
            </div>
            <div className="signup-btn">
              <button onClick={signupUser}>Sign Up</button>
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

export default Signup;
