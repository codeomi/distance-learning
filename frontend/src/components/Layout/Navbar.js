import React, { useState } from "react";
import "./navbar.scss";
import { Link, useLocation, useParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SimpliDistLogo from "../../assets/simpli-dist-logo.png";
import { Drawer, List, ListItem, Menu, MenuItem, Popover } from "@mui/material";

const Navbar = () => {
  const location = useLocation();

  const isActiveLink = (link) => {
    const { pathname } = location;
    return pathname === link ? "active" : "";
  };


  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  console.log(location);
  return (
    <>
      <div className="navbar">
        <Link to="/" className="conatiner-1">
          <img
            src={SimpliDistLogo}
            sizes="(max-width: 349px) 100vw, 349px"
            alt=""
          />
        </Link>
        <div className="conatiner-2">
          <Link to="/" className={`navbar-text ${isActiveLink("/")}`}>
            Home
          </Link>
          <Link to="/about" className={`navbar-text ${isActiveLink("/about")}`}>
            About
          </Link>
          <Link to="/blogs" className={`navbar-text ${isActiveLink("/blogs")}`}>
            Blogs
          </Link>
          <Link
            to="/contact"
            className={`navbar-text ${isActiveLink("/contact")}`}
          >
            Contact
          </Link>
        </div>
        <div className="mobile-display-menu">
        
        <MenuIcon id="menu-btn" onClick={toggleDrawer(true)} />
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List>
              <ListItem>Omkar</ListItem>
            </List>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
