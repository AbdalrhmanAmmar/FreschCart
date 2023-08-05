import axios from "axios";
import "./FeatureProducts.module.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Counter } from "../../CounterContext";
import { toast } from "react-hot-toast";

function FeatureProducts() {
  let { Addtocard } = useContext(Counter);

  async function Addproduct(productId) {
    let response = await Addtocard(productId);
    if (response.data.status === "success") {
      toast.success(response.data.message, { duration: 2000 });
    }
    console.log(response);
  }

  const [products, setproducts] = useState([]);
  const [isloading, setisloading] = useState(false);
  async function GetProducts() {
    setisloading(true);

    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    setisloading(false);

    setproducts(data.data);
  }
  useEffect(() => {
    GetProducts();
    console.log(products);
  }, []);

  return (
    <>
      <div className="row ">
        {isloading ? (
          <div className="container d-flex justify-content-center align-items-center vh-100">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            {products.map((product) => (
              <div key={product.id} className="col-md-4 col-lg-2">
                <div className="product px-2 py-4 cursor-pointer">
                  <Link to={`/ProductDetails/${product._id}`}>
                    <img className="w-100" src={product.imageCover} alt="" />
                    <span className="categoryname">
                      {product.category.name}
                    </span>
                    <h3 className="h6 fw-bolder">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </h3>
                    <div className="d-flex justify-content-between">
                      <span className="text-muted">{product.price} EGP</span>
                      <span>
                        <i className="fas fa-star rating-color"></i>
                        {product.ratingsAverage}
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => Addproduct(product._id)}
                    className="btn text-white w-100"
                  >
                    + Add
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default FeatureProducts;
