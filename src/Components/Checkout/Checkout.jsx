import { useFormik } from "formik";
import "./Checkout.module.css";
function Checkout() {
  function handelsubmit(value) {
    console.log(value);
    console.log("hello");
  }
  let formik = useFormik({
    initialValues: {
      details: "",
      city: "",
      phone: "",
    },
    onSubmit: handelsubmit(),
  });

  return (
    <>
      <div className="w-50 py-5 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="details:">details</label>
          <input
            type="text"
            className="form-control"
            name="details"
            id="details"
            value={formik.values.details}
            onChange={formik.handleChange}
          />
          <label htmlFor="city:">city</label>
          <input
            type="text"
            className="form-control"
            name="city"
            id="city"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          <label htmlFor="phone:">phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </form>
        <button type="submit" className="btn bg-main w-100 my-3 text-white">
          Pay
        </button>
      </div>
    </>
  );
}

export default Checkout;
