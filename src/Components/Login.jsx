import { useState } from "react";
import validator from "validator";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (!validator.isEmail(loginInput.email)) {
      setErrors((prevErrors) => [
        ...prevErrors,
        { type: "email", message: "The email you entered is invalid" },
      ]);
    }
    if (!validator.isStrongPassword(loginInput.password)) {
      setErrors((prevErrors) => [
        ...prevErrors,
        { type: "password", message: "The password you entered is invalid" },
      ]);
    }
    if (loginInput.password !== loginInput.confirmPassword) {
      setErrors((prevErrors) => [
        ...prevErrors,
        { type: "confirmPassword", message: "The passwords do not match" },
      ]);
    }
  };

  return (
    <section className="container my-5">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={loginInput.email}
            onChange={handleChange}
          />
          <p className="text-danger my-3">
            {errors.some((error) => error.type === "email") &&
              `${errors.find((error) => error.type === "email").message}`}
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={loginInput.password}
            onChange={handleChange}
          />
          <p className="text-danger my-3">
            {errors.some((error) => error.type === "password") &&
              `${errors.find((error) => error.type === "password").message}`}
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="form-control"
            value={loginInput.confirmPassword}
            onChange={handleChange}
          />
          <p className="text-danger my-3">
            {errors.some((error) => error.type === "confirmPassword") &&
              `${
                errors.find((error) => error.type === "confirmPassword").message
              }`}
          </p>
        </div>
        <div className="mb-3">
          <button type="submit" name="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
