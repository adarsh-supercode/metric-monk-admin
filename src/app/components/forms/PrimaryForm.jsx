"use client";
import React, { useState, useEffect } from "react";
import * as styles from "./primaryForm.module.css";
import Link from "next/link";
export default function PrimaryForm({
  type = "login",
  onSubmit,
  heading,
  Error,
  Success,
  terms,
  termsError,
  attributes,
  onChange,
  submitLabel,
  disabled, // Accept disabled prop
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  if (!attributes) return <></>;

  return (
    <div className={styles.container} data-type={type}>
      <div className={styles.formContainer}>
        <h1 className={`heading-1`}>{heading || "Sign in"}</h1>
        <form onSubmit={(e) => onSubmit(e, isChecked)}>
          {attributes?.map(({ type, value, label, placeholder, name }) => {
            return (
              <div key={name} className={styles?.inputDiv}>
                {label && (
                  <label htmlFor={name} className="input-label">
                    {label}
                  </label>
                )}
                {type == "password" && (
                  <div className={styles?.passwordIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                    >
                      <path
                        d="M13.4234 7.4478V5.3008C13.4234 2.7878 11.3854 0.7498 8.8724 0.7498C6.3594 0.7388 4.3134 2.7668 4.3024 5.2808V5.3008V7.4478"
                        stroke="#5E6366"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.6832 19.2496H5.0422C2.9482 19.2496 1.2502 17.5526 1.2502 15.4576V11.1686C1.2502 9.0736 2.9482 7.3766 5.0422 7.3766H12.6832C14.7772 7.3766 16.4752 9.0736 16.4752 11.1686V15.4576C16.4752 17.5526 14.7772 19.2496 12.6832 19.2496Z"
                        stroke="#5E6366"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.8629 12.2027V14.4237"
                        stroke="#130F26"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <input
                  id={name}
                  data-name={name}
                  className="input-placeholder"
                  type={type || "text"}
                  value={value}
                  onChange={(e) => onChange({ name, value: e.target.value })}
                  onMouseOver={
                    type === "password"
                      ? (e) => {
                          e.target.type = "text";
                        }
                      : () => {}
                  }
                  onMouseLeave={
                    type === "password"
                      ? (e) => {
                          e.target.type = "password";
                        }
                      : () => {}
                  }
                  placeholder={placeholder}
                  required
                  disabled={disabled} // Disable input when loading
                />
              </div>
            );
          })}
          {terms && (
            <div className={styles.termsContainer}>
              <label htmlFor={"terms"}>
                <div className={`terms-text ${styles.termsDiv}`}>
                  <span
                    className={`${styles.checkMark} ${
                      isChecked ? styles.checked : ""
                    } ${
                      termsError && !isChecked ? styles?.uncheckedFilled : ""
                    }`}
                  >
                    <div className={styles.checkMarkSvgDiv}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#B0CAD9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </span>
                  <span
                    style={termsError && !isChecked ? { color: "red" } : {}}
                  >
                    I hereby accept the{" "}
                    <Link className="terms-text color-primary" href={"/terms"}>
                      T&C
                    </Link>{" "}
                    of MetricMonk
                  </span>
                </div>
              </label>
              <input
                type="checkbox"
                id={"terms"}
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={styles.checkbox}
              />
            </div>
          )}
          <div className={styles.buttonContainer}>
            <button type="submit" className="button-text" disabled={disabled}>
              {submitLabel}
            </button>
            <span className="terms-text">
              {type == "login" ? (
                <>
                  Don't have an account?{" "}
                  <Link className="color-primary" href={"/signup"}>
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link className="color-primary" href={"/login"}>
                    Sign in
                  </Link>
                </>
              )}
            </span>
          </div>
        </form>
        {Error && <p className={`${styles.error} terms-text`}>{Error}</p>}
        {Success && <p className={`${styles.success} terms-text`}>{Success}</p>}
      </div>
    </div>
  );
}
