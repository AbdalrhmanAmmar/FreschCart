import "./CategorySlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useEffect, useState } from "react";

function CategorySlider() {
  const [Categories, setCategories] = useState([]);
  async function GetCategories() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/Categories`
    );

    setCategories(data.data);
  }
  useEffect(() => {
    GetCategories();
    console.log(Categories);
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };

  return (
    <>
      <Slider {...settings}>
        {Categories.map((category) => (
          <div className="row col-md-3 col-sm-6" key={category.id}>
            <img height={200} className="w-100" src={category.image} alt="" />
            <h2 className="h6 py-2">{category.name}</h2>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default CategorySlider;
