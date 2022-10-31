import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Css/NavbarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Images/Logo.png";
import { useNavigate } from "react-router-dom";
import YourOrder from "./yourorder";

function Navbar() {
  const navigate = useNavigate();

  const [luser, setLuser] = useState(null);
  const [cluser, setCuser] = useState(null);
  const [cartInc, setcartInc] = useState(0);
  let user;
  let cuser;
  let cemail;
  useEffect(() => {
    user = localStorage.getItem("lemail");
    cuser = localStorage.getItem("cuser");
    cemail = localStorage.getItem("cemail");
    console.log(luser);
    console.log(cuser);
    setLuser(user);
    setCuser(cuser);
    cemail = localStorage.getItem("cemail");
    fetch("https://aqre-server-production.up.railway.app/getCartProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cemail,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        console.log(val.data.length);

        setcartInc(val.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const Logout = (e) => {
    e.preventDefault();
    localStorage.setItem("lemail", null);
    localStorage.setItem("cuser", null);
    localStorage.setItem("cemail", null);
    navigate("/", { replace: true });
  };
  const CartPage = (e) => {
    e.preventDefault();
    if (cemail === "null") {
      alert("please do customer login");
      navigate("/", { replace: true });
    } else {
      navigate("/cart", { replace: true });
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ margin: "0 auto", backgroundColor: "rgb(24, 192, 214)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            AQRE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <form className="d-flex ms-auto px-5" role="search">
              <input
                className="form-control me-3 col-md-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item px-5 py-2">
                <a
                  href="/"
                  className="nav-link active"
                  style={{ color: "rgb(137, 255, 47);" }}
                  aria-current="home"
                >
                  Home
                </a>
              </li>

              {cuser !== "null" ? (
                <li className="nav-item px-5 py-2">
                  <a
                    href="/yourorder"
                    className="nav-link"
                    style={{ color: "rgb(137, 255, 47);" }}
                    onClick={YourOrder}
                  >
                    YourOrder
                  </a>
                </li>
              ) : null}
              {luser !== "null" || cluser !== "null" ? (
                <li className="nav-item py-2 px-5">
                <a className="nav-link" href="/retail" onClick={Logout}>
                  Logout
                </a>
                </li>
              ) : (
                <li className="nav-item dropdown px-5 py-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/retail">
                        Retail Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/custlog">
                        Customer Login
                      </a>
                    </li>
                  </ul>
                </li>
              )}
              {luser !== "null" ? (
                <li className="nav-item px-5 py-2">
                  <a href="/admin" className="nav-link">Admin</a>
                </li>
              ) : null}
              <li className="nav-item py-2">
                <a href="/cart" className="cart" onClick={CartPage}>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="nav-item"
                    size="lg"
                    style={{ alignItems: "center", marginTop: "10px" }}
                  />
                  
                  <span>{cartInc}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
