import { useFormik } from "formik";
import "./Login.module.css";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

let validation = Yup.object({
  
  email: Yup.string().required("email is required").email("email is not valid"),
  password: Yup.string().required("password is required"),
 
});

function Login({ SaveUserData }) {
  const [isLoading, setisLoading] = useState(false);
  const [messageError, setmessageError] = useState("");
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: async function (values) {
      setisLoading(true);
      let { data } = await axios
        .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
        .catch((errr) => {
          setisLoading(false);

          setmessageError(`${errr.response.data.message}`);
        });

      if (data.message === "success") {
        localStorage.setItem("usertocken", data.token);
        SaveUserData()
        setisLoading(false);
        navigate("/");
      }
    },
  });
  return (
    <>
      <div className="w-100 mx-auto py-5">
        <h3>Login</h3>
        {messageError ? (
          <div className="alert alert-dark" role="alert">
            {messageError}
          </div>
        ) : null}

        <form onSubmit={formik.handleSubmit}>
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

          {isLoading ? (
            <button type="button" className="btn bg-main text-white ">
              <i className="fa fa-spinner fa-spin"></i>
            </button>
          ) : (
            <button
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
              className="btn bg-main text-white "
            >
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;
