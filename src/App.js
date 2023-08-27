import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import RedSocial from "containers/pages/RedSocial";
import Blog from "containers/pages/Blog";
import Ajustes from "containers/pages/Ajustes";
import Privacidad from "containers/pages/Privacidad";
import Login from "containers/pages/Login";
import Noticias from "containers/pages/Noticias";
import Portafolio from "containers/pages/Portafolio";
import Soporte from "containers/pages/Soporte";
import User from "containers/pages/User";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* ERROR DISPLAY */}
          <Route path="*" element={<Error404 />} />

          {/* User DISPLAY */}
          <Route path="/User" element={<User />} />

          {/* HOME DISPLAY */}
          <Route path="/" element={<Home />} />

          {/* RedSocial DISPLAY */}
          <Route path="/RedSocial" element={<RedSocial />} />

          {/* Blog DISPLAY */}
          <Route path="/Blog" element={<Blog />} />

          {/* Portafolio DISPLAY */}
          <Route path="/Portafolio" element={<Portafolio />} />

          {/* Noticias DISPLAY */}
          <Route path="/Noticias" element={<Noticias />} />

          {/* Login DISPLAY */}
          <Route path="/Login" element={<Login />} />

          {/* Ajustes DISPLAY */}
          <Route path="/Ajustes" element={<Ajustes />} />

          {/* Soporte DISPLAY */}
          <Route path="/Soporte" element={<Soporte />} />

          {/* Privacidad DISPLAY */}
          <Route path="/Privacidad" element={<Privacidad />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
