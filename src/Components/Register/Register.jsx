import { useFormik } from "formik";
import "./Register.module.css";

function Register() {
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: () => {
      console.log("hello");
    },
  });
  return (
    <>
      <div className="w-100 mx-auto py-5">
        <h3>Register</h3>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="email">Email</label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">password</label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            name="password"
            id="password"
          />
          <label htmlFor="rePassword">rePassword</label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            type="password"
            name="rePassword"
            id="rePassword"
          />
          <label htmlFor="phone">phone</label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            value={formik.values.phone}
            type="tell"
            name="phone"
            id="phone"
          />
        </form>
      </div>
    </>
  );
}

export default Register;
