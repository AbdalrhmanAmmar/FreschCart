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
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            name="name"
            id="name"
          />
        </form>
      </div>
    </>
  );
}

export default Register;
