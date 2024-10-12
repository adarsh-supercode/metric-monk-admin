"use client";
import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// Create the Auth context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    loading: true,
  });
  const router = useRouter();

  // Check if user is already logged in on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setAuth({ user: { ...response.data?.user, token }, loading: false }); // Set loading to false here
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          setAuth({ loading: false }); // Still set loading to false on error
        });
    } else {
      setAuth({ loading: false }); // No token, so just set loading to false
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      const { token, user } = res.data;

      // Store token in localStorage
      localStorage.setItem("token", token);

      setAuth({ user: { ...user, token }, loading: false });
      // router.push("/dashboard"); // Navigate to a protected route
    } catch (error) {
      console.error("Login failed:", error.response?.data || error);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  // Signup function
  const signup = async (email, password, fullName, organization) => {
    try {
      const res = await axios.post("/api/auth/signup", {
        email,
        password,
        fullName,
        organization,
      });
      const { token, user } = res.data;

      setAuth({ user: { ...user, token }, loading: false });
      router.push("/");
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error);
      throw new Error(error.response?.data?.message || "Signup failed");
    }
  };

  // Logout function
  const logout = async () => {
    localStorage.removeItem("token");
    setAuth({ user: null, loading: false });
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
