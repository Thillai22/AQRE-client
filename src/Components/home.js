import React, { useEffect, useState } from "react";
import "../Css/home.css";
import Card from "./Card";
// import list from "./data.js";
import Slide from "./slide.js";
import Footer from "./footer";
import EndCard from "./endcard";
import { Outlet, Path } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  let cemail;
  useEffect(() => {
    fetchData();
    cemail = localStorage.getItem("cemail");

    // const res = await axios.get("http://localhost:8000/getProduct");
    // setData(res.data);
    // console.log(res.data);
  }, []);
  const fetchData = () => {
    fetch("http://localhost:8000/getProduct")
      .then((result) => result.json())
      .then((val) => {
        const ddata = val.data;
        setData(ddata);

        console.log(val.data[0].photo);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [cart, setCart] = useState([]);
  function handleClick(item) {
    // setCart([...cart,item]);
    console.log(item);
  }
  const RadioInput = (e) => {
    setFilter(e.target.value);
  };
  const Filter = () => {
    fetch("http://localhost:8000/filter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        console.log(val.data.name);
        setData(val.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Slide />
      <div className="container-fluid mt-5 mb-5">
        <div className="row g-2">
          <div className="col-md-3">
            <div className="processor p-2">
              <div className="heading d-flex justify-content-between align-items-center">
                <h6 className="text-uppercase">Categories</h6> <span>--</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="All"
                    id="flexCheckDefault"
                    onChange={RadioInput}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    All
                  </label>
                </div>
                {/* <span>3</span> */}
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Fruit"
                    id="flexCheckChecked"
                    onChange={RadioInput}
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Fruits
                  </label>
                </div>
                {/* <span>4</span> */}
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Diary"
                    id="flexCheckChecked"
                    onChange={RadioInput}
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Diary
                  </label>
                </div>
                {/* <span>14</span> */}
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Cleaning"
                    id="flexCheckChecked"
                    onChange={RadioInput}
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Cleaning
                  </label>
                </div>
                {/* <span>8</span> */}
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Beverages"
                    id="flexCheckChecked"
                    onChange={RadioInput}
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Beverages
                  </label>
                </div>
                {/* <span>14</span> */}
              </div>
              <div className="d-flex justify-content-between mt-2">
                <button
                  type="button"
                  className="btn btn-block btn-primary"
                  style={{ width: "100px" }}
                  onClick={Filter}
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row g-2">
              {data.map((item) => (
                <Card
                  productName={item.productName}
                  photo={"http://localhost:8000/" + item.photo.substr(13)}
                  productDescription={item.productDescription}
                  price={item.price}
                  discount={item.discount}
                  category={item.category}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Outlet />
      <br />
      <br />
      <br />
      <br />
      <br />
      <EndCard />
      <Footer />
    </>
  );
}

export default Home;
