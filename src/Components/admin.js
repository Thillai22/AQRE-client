import React, { useEffect } from "react";
import "../Css/val.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCellsLarge , faHome, faCartShopping, faMoneyBillTransfer, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Outlet } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  let cuser;
  useEffect(() => {
    cuser = localStorage.getItem("cuser");
    if (cuser === null) {
      navigate("/", { replace: true });
    }
  });
  const Logout = () => {
    localStorage.setItem("lemail", null);
    cuser = localStorage.getItem("lemail");
    if (cuser == "null") {
      navigate("/retail", { replace: true });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                {/* <img></img> */}
                <span className="fs-4">Admin Panel</span>
              </a>
              <hr />
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item py-1">
                  <a href="/" className="nav-link align-middle px-0">
                    <FontAwesomeIcon icon={faHome} className="px-3" />
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li className="nav-item py-1">
                  <a href="/admin/orders" className="nav-link px-0 align-middle">
                    <FontAwesomeIcon icon={faGaugeHigh} className="px-3" />
                    <span className="ms-1 d-none d-sm-inline">DashBoard</span>
                  </a>
                </li>
                <li className="nav-item py-1">
                  <a href="/admin/orders" className="nav-link px-0 align-middle">
                    <FontAwesomeIcon icon={faCartShopping} className="px-3" />
                    <span className="ms-1 d-none d-sm-inline">Orders</span>
                  </a>
                </li>

                <li className="nav-item py-1">
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="px-3"
                    />
                    <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu3"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a href="/admin/edit" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-xl-inline">Add Products </span>
                      </a>
                    </li>
                    <li>
                      <a href="/admin/view" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">List Products</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} className="px-3" />
                    <span className="ms-1 d-none d-sm-inline">Payments</span>{" "}
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">User</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" onClick={Logout}>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
