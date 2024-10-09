"use client";
import React from "react";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

export default function Page() {
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    if (logout && localStorage.getItem("token")) {
      logout();
    }
  }, [logout]);
  return null;
}
