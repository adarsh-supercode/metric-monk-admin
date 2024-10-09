// app/page.js
"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "./context/AuthContext";

export default function Page() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext); // Access user and loading from AuthContext

  useEffect(() => {
    // Check if loading is false and user is null
    if (!loading) {
      if (!user) {
        // If user is not logged in, redirect to the login page
        router.push("/login"); // Uncomment to enable redirection to the login page
      } else {
        // If the user is authenticated, redirect to the dashboard
        router.push("/dashboard"); // Redirect to the dashboard page
      }
    }
  }, [user, loading, router]); // Dependency array includes user and loading

  if (loading) return <div>Authenticating...</div>; // Show loading state while authenticating

  // If user is authenticated, return null as redirect will occur
  return null;
}
