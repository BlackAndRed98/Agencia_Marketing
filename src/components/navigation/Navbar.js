import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react"; // Importa useState
import "../../styles/index.css";
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TextField from "@mui/material/TextField";
import PeopleIcon from "@mui/icons-material/People";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BookIcon from "@mui/icons-material/Book";
import WorkIcon from "@mui/icons-material/Work";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import { hover } from "@testing-library/user-event/dist/hover";
import techLogo from "../../assets/img/tECH.gif";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null); // Estado para manejar el menú

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Navbar">
      <techLogo className="Logo" />
      <nav className="Navbar-nav">
        <div className="Avatar">
          <Button
            variant="text"
            className="custom-button"
            component={NavLink}
            to="/User"
          >
            <Avatar
              className="Avatar"
              alt=""
              sx={{
                width: 50,
                height: 50,
                border: "solid",
                borderColor: "blue",
              }}
            />
          </Button>
        </div>

        <Button
          className="custom-button"
          component={NavLink}
          to="/"
          sx={{
            backgroundColor: "black",
            border: "solid",
            borderColor: "blue",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <HomeIcon
            className="custom-button"
            sx={{
              color: "white",
              fontSize: 30,
            }}
          />
        </Button>
        <Button
          component={NavLink}
          to="/RedSocial"
          variant="outlined"
          className="custom-button"
          sx={{
            ml: "5px",
            mt: "5px",
            mb: "10px",
            color: "azure",
            backgroundColor: "black",
            border: "solid",
            borderColor: "blue",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <PeopleIcon />
          Red Social
        </Button>
        <Button
          component={NavLink}
          to="/Blog"
          variant="outlined"
          className="custom-button"
          sx={{
            ml: "5px",
            mt: "5px",
            mb: "10px",
            color: "azure",
            backgroundColor: "black",
            border: "solid",
            borderColor: "blue",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <BookIcon />
          Blog
        </Button>
        <Button
          component={NavLink}
          to="/Portafolio"
          variant="outlined"
          className="custom-button"
          sx={{
            ml: "5px",
            mt: "5px",
            mb: "10px",
            backgroundColor: "black",
            color: "azure",
            border: "solid",
            borderColor: "blue",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <WorkIcon />
          Portafolio
        </Button>
        <Button
          component={NavLink}
          to="/Noticias"
          variant="outlined"
          className="custom-button"
          sx={{
            ml: "5px",
            mt: "5px",
            mb: "10px",
            backgroundColor: "black",
            color: "azure",
            border: "solid",
            borderColor: "blue",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <NewspaperIcon />
          Noticias
        </Button>
        <Button
          component={NavLink}
          to="/Login"
          variant="outlined"
          className="custom-button"
          sx={{
            ml: "5px",
            mt: "5px",
            mb: "10px",
            backgroundColor: "black",
            color: "azure",
            border: "solid",
            borderColor: "blue",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <PersonIcon />
          Login
        </Button>
        <Button
          variant="outlined"
          className="custom-button"
          onClick={handleMenuOpen}
          sx={{
            ml: "5px",
            mt: "5px",
            mb: "10px",
            backgroundColor: "black",
            color: "azure",

            border: "solid",
            borderColor: "blue",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <ExpandMoreIcon />
          Mas
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/Ajustes">
            Ajustes
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/Soporte">
            Soporte
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={NavLink}
            to="/Privacidad"
          >
            Privacidad
          </MenuItem>
          {/* Agrega más opciones de menú según tus necesidades */}
        </Menu>
        <div className="SerchBar">
          <TextField
            hiddenLabel
            id="standard-size-small"
            size="small"
            variant="standard"
            label="Busqueda"
            sx={{ backgroundColor: "azure" }}
          />
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {}; // Aquí puedes mapear propiedades desde el estado si es necesario
};
export default connect(mapStateToProps, {})(Navbar);
