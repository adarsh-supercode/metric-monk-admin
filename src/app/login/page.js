"use client";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import PrimaryForm from "../components/forms/PrimaryForm";
import { withAuthRedirect } from "../HOC/AuthHoc";

function Login() {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [attributes, setAttributes] = useState([
    {
      type: "email",
      value: "",
      name: "email",
      placeholder: "Your Email Address",
    },
    {
      type: "password",
      value: "",
      name: "password",
      placeholder: "Your Password",
    },
  ]);

  const handleChange = ({ name, value }) => {
    setAttributes((prev) =>
      prev.map((attr) => (attr.name === name ? { ...attr, value } : attr))
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = attributes.find((attr) => attr.name === "email")?.value;
    const password = attributes.find((attr) => attr.name === "password")?.value;

    try {
      setLoading(true);
      await login(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
console.log('first')
  return (
    <PrimaryForm
      type="login"
      onChange={handleChange}
      onSubmit={handleLogin}
      heading={"Sign in"}
      Error={error}
      Success={""}
      attributes={attributes}
      submitLabel={loading ? "Logging In..." : "Log In"}
      disabled={loading}
    />
  );
}

export default withAuthRedirect(Login);
