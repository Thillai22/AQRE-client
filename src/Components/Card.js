import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Card(props, handleClick) {
  let cemail;

  const navigate = useNavigate();
  const [data, setData] = useState(props);
  const [inc, setInc] = useState(0);

  useEffect(() => {
    cemail = localStorage.getItem("cemail");
  });
  const Inc = () => {
    setInc(inc + 1);
  };
  const Dec = () => {
    if (inc > 0) {
      setInc(inc - 1);
    }
  };

  const Cart = () => {
    console.log(data);

    console.log(data);

    if (cemail == "null") {
      alert("please do customer login");
      navigate("/custlog", { replace: true });
    } else {
      fetch("https://aqre-server-production.up.railway.app/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
          cemail,
          inc,
        }),
      })
        .then((res) => {
          let val = res.json();
          console.log(val);
          // localStorage.setItem('lemail',null);
          alert("product added to cart");
          navigate("/", { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="col-md-4">
        <div className="product py-4 ">
          <div className="text-center">
            <img src={props.photo} alt={props.title} width="50%" height="50%" />
          </div>
          <div className="about text-center">
            <h5 className="text-camelcase">{props.productName}</h5>{" "}
            <span>&#8377;{props.price}</span>
          </div>
          <div className="cart-button mt-3 px-2 text-center">
              <button className="btn btn-primary text-uppercase" onClick={Cart}>
                Add to cart
              </button>

          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
