import { useContext, useEffect, useState } from "react";
import "./Cart.module.css";
import { Counter } from "../../CounterContext";

function Cart() {
  const [Cartdetails, setCartdetails] = useState(null);
  const { GetCard } = useContext(Counter);

  async function getloggedcart() {
    let response = await GetCard();
    if (response?.data?.status === "success") {
      setCartdetails(response.data.data);
      console.log(Cartdetails.totalCartPrice);
    }
  }

  useEffect(() => {
    getloggedcart();
  }, []);

  return (
    <>
      {Cartdetails ? (
        <>
          <div className="bg-main-light p-4 my-4">
            <h3>Shop Cart: </h3>
            <h6 className="text-main">
              Total price is :{Cartdetails.totalCartPrice}
            </h6>
            {Cartdetails.products.map((product) => (
              // eslint-disable-next-line react/jsx-key
              <div className="row py-2 d-flex align-items-center">
                <div className="col-md-1">
                  <img
                    className="w-100"
                    src={product.product.imageCover}
                    alt=""
                  />
                </div>
                <div className="col-md-11 d-flex justify-content-between align-items-center ">
                  <div>
                    <h6>{product.product.title}</h6>
                    <h6 className="text-main">price: {product.price}</h6>
                    <button className="btn m-0 p-0">
                      <i className="fa-regular fa-trash-can"></i> Remove
                    </button>
                  </div>
                  <div>
                    <button className="btn border-main btn-sm">+</button>
                    <span className="mx-2">{product.count}</span>
                    <button className="btn border-main btn-sm">-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}

export default Cart;
