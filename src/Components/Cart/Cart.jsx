import { useContext, useEffect, useState } from "react";
import "./Cart.module.css";
import { Counter } from "../../CounterContext";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Cart() {
  const [isLoading, setisLoading] = useState(false);
  const [Cartdetails, setCartdetails] = useState(null);
  const { GetCard, removeCart, UpdateCartQuantity } = useContext(Counter);

  async function getloggedcart() {
    setisLoading(true);
    let response = await GetCard();
    if (response?.data?.status === "success") {
      setisLoading(false);
      setCartdetails(response.data.data);
      console.log(Cartdetails.totalCartPrice);
    }
  }

  useEffect(() => {
    getloggedcart();
  }, []);

  async function deleteProduct(productId) {
    let response = await removeCart(productId);
    toast.success("Product was removed successfully", { duration: 1500 });
    setCartdetails(response.data.data);

    console.log(response);
  }
  async function updateCart(productId, count) {
    let response = await UpdateCartQuantity(productId, count);
    if (count < 0 || count === 0) {
      toast.error("Cart quantity equal to zero");
    }
    setCartdetails(response.data.data);

    console.log(response);
  }

  return (
    <>
      <Helmet>
        <title>Cart Details</title>
      </Helmet>
      {isLoading ? (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <span className="loader"></span>
        </div>
      ) : (
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
                  <div
                    key={product.product._id}
                    className="row py-2 d-flex align-items-center"
                  >
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
                        <button
                          onClick={() => deleteProduct(product.product._id)}
                          className="btn m-0 p-0"
                        >
                          <i className="fa-regular fa-trash-can"></i> Remove
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            updateCart(product.product._id, product.count + 1)
                          }
                          className="btn border-main btn-sm bg-info"
                        >
                          +
                        </button>
                        <span className="mx-2">{product.count}</span>
                        <button
                          onClick={() =>
                            updateCart(product.product._id, product.count - 1)
                          }
                          className="btn border-main btn-sm bg-info"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="btn bg-main  text-white ">
                  <Link to="/chekout">chekout</Link>
                </button>
              </div>
            </>
          ) : null}
        </>
      )}
    </>
  );
}

export default Cart;
