import { useFormik } from "formik";
import "./Register.module.css";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let validation = Yup.object({
  name: Yup.string()
    .required("name is required")
    .min(3, "minLength is 3")
    .max(10, "max length is 15"),
  email: Yup.string().required("email is required").email("email is not valid"),
  password: Yup.string().required("password is required"),
  rePassword: Yup.string()
    .required("rePassword is required")
    .oneOf([Yup.ref("password")], "password and repasswod dont match"),
  phone: Yup.string()
    .required("phone is required")
    .matches(/^01[0125][0-9]{8}$/, "phone does not valid"),
});

function Register() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validation,
    onSubmit: async function (values) {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        values
      );
      if (data.message === "success") {
        navigate("/login");
      }
    },
  });
  return (
    <>
      <div className="w-100 mx-auto py-5">
        <h3>Register</h3>
        <form onSubmit={formik.handleSubmit}>
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger" role="alert">
              {formik.errors.name}
            </div>
          ) : null}
          <label htmlFor="name">Name</label>
          <input
            className="form-control mb-2"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            name="name"
            id="name"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger" role="alert">
              {formik.errors.email}
            </div>
          ) : null}
          <label htmlFor="email">Email</label>
          <input
            onBlur={formik.handleBlur}
            className="form-control mb-2"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            name="email"
            id="email"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger" role="alert">
              {formik.errors.password}
            </div>
          ) : null}
          <label htmlFor="password">password</label>
          <input
            onBlur={formik.handleBlur}
            className="form-control mb-2"
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            name="password"
            id="password"
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger" role="alert">
              {formik.errors.rePassword}
            </div>
          ) : null}
          <label htmlFor="rePassword">rePassword</label>
          <input
            onBlur={formik.handleBlur}
            className="form-control mb-2"
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            type="password"
            name="rePassword"
            id="rePassword"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger" role="alert">
              {formik.errors.phone}
            </div>
          ) : null}
          <label htmlFor="phone">phone</label>
          <input
            onBlur={formik.handleBlur}
            className="form-control mb-2"
            onChange={formik.handleChange}
            value={formik.values.phone}
            type="tel"
            name="phone"
            id="phone"
          />
          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className="btn bg-main text-white "
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
