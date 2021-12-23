import React from "react";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <nav
      className="navbar"
      role="navigation"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        position: "relative",
        padding: "2rem",
        backgroundColor: "#51A6A1",
        boxShadow: "2px 2px 2px black",
      }}
    >
      <div className="navbar-brand">
        <a href="" className="navbar-item">
          <img src="" alt="" />
        </a>
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        {linkItems.map((item, i) => (
          <li key={i} className="navbar-item">
            <Link to={item.path}>{item.name}</Link>
            {/* <Navbar.Dropdown>
              <Navbar.Item>
                <Link to={""}></Link>
              </Navbar.Item>
              <Navbar.Item>
                <Link to={""}></Link>
              </Navbar.Item>
            </Navbar.Dropdown> */}
          </li>
        ))}
        <li className="navbar-item">
          <Link to="/">
            <MdLogout />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const linkItems = [
  { name: "Home", path: "/" },
  { name: "Connect", path: "login" },
  { name: "Manage series", path: "series" },
];

export default Header;
