import React, { useState } from "react";
import "../Css/cust.css";

import { useNavigate, Outlet } from "react-router-dom";

let user;
export default function Custlog() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const HandleInputs = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const Login = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    fetch("https://aqre-server-production.up.railway.app/custlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        console.log(val.data.name);
        localStorage.setItem("cuser", val.data.name);
        user = localStorage.getItem("cuser");
        console.log(user);
        localStorage.setItem("cemail", val.data.email);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        alert("invalid credentials");
        navigate("/custlog", { replace: true });
      });
  };
  return (
    <>
      {/* <Navbar /> */}

      <div className="login">
        <div className="login_box">
          <div className="col1">
            <br />

            <div className="contact">
              <h3>SIGN IN</h3>
              <input
                type="text"
                placeholder="EMAIL"
                name="email"
                value={data.email}
                onChange={HandleInputs}
              />
              <input
                type="text"
                placeholder="PASSWORD"
                name="password"
                value={data.password}
                onChange={HandleInputs}
              />
              <p>
                <br />
                <br />
                Don't have an account? <a href="/custreg">Register</a>
              </p>
              <button className="submit" onClick={Login}>
                Log in
              </button>
            </div>
          </div>
          <div className="col2">
            <div className="right-text">
              <h3>Sign In to avail the exclusive offers</h3>
            </div>
            <div className="right-inductor"></div>
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
}
