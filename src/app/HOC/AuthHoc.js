"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "../context/AuthContext";

// HOC to protect routes from authenticated users
export const withAuthRedirect = (WrappedComponent) => {
  return function AuthRedirectWrapper(props) {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      // Redirect authenticated users away from login/signup pages
      if (!loading && user) {
        router.push("/"); // Redirect to home if logged in
      }
    }, [user, loading, router]);

    if (loading) {
      return <div>Authenticating...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};
