import { useParams } from "react-router-dom";
import "./ProductDetails.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
  const [isloading, setisloading] = useState(false);
  const [ProductDetails, setProductDetails] = useState([]);
  let params = useParams();

  async function GetProduct(id) {
    setisloading(true);

    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setProductDetails(data.data);
    setisloading(false);
  }
  useEffect(() => {
    GetProduct(params.id);
  }, []);

  return (
    <>
      {isloading ? (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <h2>{ProductDetails.title}</h2>
        </>
      )}
    </>
  );
}

export default ProductDetails;
