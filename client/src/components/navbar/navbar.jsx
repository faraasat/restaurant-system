import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { Alert, Divider, Slide, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsync, resetError } from "../../redux/userSlice";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, signedIn, error, errorStatus } = useSelector(
    (state) => state.user
  );
  const pages = [
    ["Home", "/"],
    ["Gallery", "/gallery"],
    ["About", "/about"],
    ["Products", "/products"],
    signedIn && ["cart", "/cart"],
  ];

  function handleAdminPanel() {
    navigate("admin-panel");
  }

  function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }

  const handleLogout = () => {
    dispatch(logoutAsync({ email: data.email }));
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#ffdc2a" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{ textDecoration: "none" }} to={`/`}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".1rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              <FastfoodIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />{" "}
              FoodSpace
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                style={{
                  fontFamily: "Lemon",
                  color: "#fff",
                  textDecoration: "none",
                }}
                key={page[0]}
                onClick={handleCloseNavMenu}
                to={`${page[1]}`}
              >
                <Button style={{ fontFamily: "Lemon", color: "#fff" }}>
                  {page[0]}
                </Button>
              </Link>
            ))}
          </Box>

          {/* <FastfoodIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FoodSpace
          </Typography> */}

          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                  <Link to={`${page[1]}`}>{page[0]}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          <Box sx={{ flexGrow: 0 }}>
            {signedIn
              ? [
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt={data?.name?.toUpperCase().toString()}
                        src={AccountCircleIcon}
                      />
                    </IconButton>
                  </Tooltip>,
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        onClick={() => navigate("/profile")}
                        textAlign="center"
                      >
                        Profile
                      </Typography>
                    </MenuItem>
                    <Divider />
                    {data.role === "admin" && [
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography
                          onClick={handleAdminPanel}
                          textAlign="center"
                        >
                          Admin Panel
                        </Typography>
                      </MenuItem>,
                      <Divider />,
                    ]}
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography onClick={handleLogout} textAlign="center">
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>,
                ]
              : [
                  <Link
                    style={{
                      fontFamily: "Lemon",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                    to={`/auth/login`}
                  >
                    <Button style={{ fontFamily: "Lemon", color: "#fff" }}>
                      LogIn
                    </Button>
                  </Link>,
                  <Link
                    style={{
                      fontFamily: "Lemon",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                    to={`/auth/signup`}
                  >
                    <Button style={{ fontFamily: "Lemon", color: "#fff" }}>
                      SignUp
                    </Button>
                  </Link>,
                ]}
          </Box>
        </Toolbar>
      </Container>
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
    </AppBar>
  );
};
export default Navbar;
