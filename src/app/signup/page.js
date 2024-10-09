"use client";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import PrimaryForm from "../components/forms/PrimaryForm";
import { withAuthRedirect } from "../HOC/AuthHoc";

function Signup() {
  const { signup } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [TermsError, setTermsError] = useState("");
  const [attributes, setAttributes] = useState([
    {
      type: "text",
      value: "",
      name: "fullName",
      placeholder: "Fullname",
    },
    {
      type: "email",
      value: "",
      name: "email",
      placeholder: "Your Email Address ",
    },
    {
      type: "text",
      value: "",
      label: "Organization",
      name: "organization",
      placeholder: "Name of the organization",
    },
    {
      type: "password",
      value: "",
      label: "Choose password",
      name: "password",
      placeholder: "Password",
    },
  ]);

  const handleChange = ({ name, value }) => {
    setAttributes((prev) =>
      prev.map((attr) => (attr.name === name ? { ...attr, value } : attr))
    );
  };

  const handleSignup = async (e, isChecked) => {
    e.preventDefault();
    if (!isChecked) return setTermsError("agree for terms");
    const email = attributes.find((attr) => attr.name === "email")?.value;
    const password = attributes.find((attr) => attr.name === "password")?.value;
    const fullName = attributes.find((attr) => attr.name === "fullName")?.value;
    const organization = attributes.find(
      (attr) => attr.name === "organization"
    )?.value;

    try {
      setLoading(true);
      await signup(email, password, fullName, organization);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PrimaryForm
      type="signup"
      onChange={handleChange}
      onSubmit={handleSignup}
      heading={"Create an Account"}
      Error={error}
      termsError={TermsError}
      terms={true}
      Success={""}
      attributes={attributes}
      submitLabel={loading ? "Creating  Account..." : "Sign Up"}
      disabled={loading}
    />
  );
}

export default withAuthRedirect(Signup);
