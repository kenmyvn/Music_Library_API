import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <Navbar className="center">
      <Navbar.Brand href="#home">
        <img
          src="/monbebe_logo_main-1024x223.png"
          height="100px"
          alt="monbebe logo"
        ></img>
        Music
        <small className="text-muted">Library</small>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
