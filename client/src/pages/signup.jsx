import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";

import "./signup.css";

const Signup = () => {
  return (
    <div className="signup" style={{ margin: "40px 0 40px 0" }}>
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
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="signup-check">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me."
              />
            </div>
            <div className="signup-btn">
              <button>Sign Up</button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default Signup;
