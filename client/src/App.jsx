import CustomRoutes from "./routes";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData());
  });

  return (
    <>
      <Navbar />
      <CustomRoutes />
      <Footer />
    </>
  );
}

export default App;
