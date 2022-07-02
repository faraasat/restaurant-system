import { Routes, Route } from "react-router-dom";

import App from "./App";
import About from "./pages/about";
import NotFound from "./pages/404";
import Gallery from "./pages/gallery";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
      <Route path="gallery" element={<Gallery />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
