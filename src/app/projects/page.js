"use client";
import React, { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { GlobalContext } from "../context/GlobalContext";
import * as styles from "./Projects.module.css"

function Projects() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  const { globalData, fetchProjects, deleteProject } =
    useContext(GlobalContext);

  const { projectList, statusMessage } = globalData; // Get project list and status message

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else {
        fetchProjects(user); // Fetch projects when user is authenticated
      }
    }
  }, [user, loading]);

  return (
    <div className="container">
      <Link href={"/projects/create-projects"}>Create a New Project</Link>
      <div className={`${styles.projectContainer} mt-50`}>

      {projectList.length > 0 ? (
        projectList.map((project, index) => {
          const {
            dataSource,
            projectName,
            accountName,
            propertyName,
            propertyID,
          } = project;
          return (
            <div
              key={index}
              style={{
                margin: "1rem",
                border: "1px solid black",
                padding: "1rem",
                width: "fit-content",
              }}
            >
              <Link
                href={`/reports/${propertyID}/${localStorage.getItem("token")}`}
                style={{
                  width: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>
                  <strong>Project Name:</strong> {projectName}
                </p>
                <p>
                  <strong>Data Source:</strong> {dataSource}
                </p>
                <p>
                  <strong>Account Name:</strong> {accountName}
                </p>
                <p>
                  <strong>Property Name:</strong> {propertyName}
                </p>
              </Link>
              <button
                onClick={() => deleteProject(user, propertyID)}
                style={{ marginTop: "1rem" }}
              >
                Disconnect
              </button>
            </div>
          );
        })
      ) : (
        <p>{statusMessage || "Loading projects..."}</p>
      )}
    </div>
      </div>
  );
}

export default Projects;
