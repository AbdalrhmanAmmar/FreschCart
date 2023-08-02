import { useParams } from "react-router-dom";
import "./ProductDetails.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductDetails() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
          <div className="row py-3 align-items-center">
            <div className="col-md-4">
              <Slider {...settings}>
                {/* {ProductDetails?.images.map((imag) => (
                  <img src={imag} />
                ))} */}
                <img src={ProductDetails?.imageCover} />
              </Slider>
            </div>

            <div className="col-md-8">
              <h3>{ProductDetails?.title}</h3>
              <p className="text-muted">{ProductDetails?.description}</p>
              <div className="d-flex justify-content-between">
                <span className="text-muted">{ProductDetails?.price} EGP</span>
                <span>
                  <i className="fas fa-star rating-color"></i>
                  {ProductDetails?.ratingsAverage}
                </span>
              </div>
              <button id="btn">+ Add</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductDetails;
