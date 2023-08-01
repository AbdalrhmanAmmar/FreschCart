import axios from "axios";
import "./FeatureProducts.module.css";
import { useEffect, useState } from "react";
function FeatureProducts() {
  const [products, setproducts] = useState([]);
  async function GetProducts() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    setproducts(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-2">
            <div className="product px-2 py-4">
              <img className="w-100" src={product.imageCover} alt="" />
              <span className="categoryname">{product.category.name}</span>
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
              <button className="btn text-white w-100">Add</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeatureProducts;
