"use client";
import React, { useState, useEffect, useContext } from "react";
import styles from "./Projects.module.css";
import AuthContext from "../context/AuthContext";
import { useRouter } from "next/navigation";

function Projects() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext); // Access user and loading from AuthContext
  const [projectName, setProjectName] = useState("");
  const [dataSource, setDataSource] = useState("");

  useEffect(() => {
    // Check if loading is false and user is null
    if (!loading) {
      if (!user) {
        // If user is not logged in, redirect to the login page
        router.push("/login"); // Uncomment to enable redirection to the login page
      }
    }
  }, [user, loading, router]); // Dependency array includes user and loading

  const handleCreateProject = () => {
    if (projectName && dataSource) {
      console.log(
        `Creating project: ${projectName} with data source: ${dataSource}`
      );
      alert(`Project "${projectName}" created with data source: ${dataSource}`);
      setProjectName("");
      setDataSource("");
    } else {
      alert("Please fill in the project name and select a data source.");
    }
  };

  return (
    <div className="container">
      <h3 className="heading-3">Create a New Project</h3>
      <input
        className={styles.projectInput}
        type="text"
        name="project"
        id="project"
        placeholder="Name of the project"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <h4 className="heading-3">Connect Data Source</h4>
      <div className={styles.buttonContainer}>
        <button
          className={`button-white ${
            dataSource === "Google Analytics" ? "active" : ""
          }`}
          onClick={() => setDataSource("Google Analytics")}
        >
          Google Analytics
        </button>
        <button
          className={`button-white ${dataSource === "Hotjar" ? "active" : ""}`}
          onClick={() => setDataSource("Hotjar")}
        >
          Hotjar
        </button>
        <button
          className={`button-white ${
            dataSource === "Google Search Console" ? "active" : ""
          }`}
          onClick={() => setDataSource("Google Search Console")}
        >
          Google Search Console
        </button>
      </div>
      <button
        className="button-black"
        onClick={handleCreateProject}
        disabled={!projectName || !dataSource}
      >
        Create Project
      </button>
    </div>
  );
}

export default Projects;
