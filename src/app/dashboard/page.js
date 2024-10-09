"use client";
import React from "react";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext); // Access user and loading from AuthContext

  useEffect(() => {
    // Check if loading is false and user is null
    if (!loading) {
      if (!user) {
        // If user is not logged in, redirect to the login page
        router.push("/login"); // Uncomment to enable redirection to the login page
      }
    }
  }, [user, loading, router]); // Dependency array includes user and loading
  return (
    <div className="container">
      <h3 className="heading-3">Dashboard</h3>
    </div>
  );
}

export default Dashboard;
