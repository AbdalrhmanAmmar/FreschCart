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
            <div className="product">
              <h3 className="h6">{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeatureProducts;
