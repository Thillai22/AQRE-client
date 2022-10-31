import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function View(props) {
  // const navigate = useNavigate();
  // let cuser;
  // useEffect(()=>{
  //     cuser = localStorage.getItem('cuser');
  //     navigate('/', {replace: true});
  //   })
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();

    // const res = await axios.get("http://localhost:8000/getProduct");
    // setData(res.data);
    // console.log(res.data);
  });
  const fetchData = () => {
    let lemail = localStorage.getItem("lemail");
    fetch("https://aqre-server-production.up.railway.app/getViewProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lemail,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        console.log(val.data);
        setData(val.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Delete = (item) => {
    fetch("https://aqre-server-production.up.railway.app/deleteProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        console.log(val.data);
        navigate("/admin/view", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Update = (item) => {
    localStorage.setItem("itemid", item._id);
    navigate("/admin/update", { replace: true });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <h5 className="header-title pb-3 mt-0">Products</h5>
                <div className="table-responsive" style={{overflowY:"scroll",height:"550px"}}>
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr className="align-self-center">
                        <th>Product Name</th>
                        <th>Product image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr>
                          <td>{item.productName}</td>
                          <td>
                            <img
                              src={
                                "http://localhost:8000/" + item.photo.substr(13)
                              }
                              alt=""
                              style={{ height: "100px", width: "100px" }}
                            />
                          </td>

                          <td>{item.productDescription}</td>
                          <td>{item.price}</td>
                          <td>{item.discount}</td>
                          <td>{item.category} </td>
                          <td>
                            <FontAwesomeIcon
                              icon={faTrash}
                              size="lg"
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                e.preventDefault();
                                Delete(item);
                              }}
                            />
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={faFileEdit}
                              size="lg"
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                e.preventDefault();
                                Update(item);
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* <!--end table-responsive--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
