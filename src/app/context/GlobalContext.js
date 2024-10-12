// src/app/context/GlobalContext.js
"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    isConnectedToGA: false,
    accounts: [],
    selectedAccountId: "",
    propertiesForAccount: [],
    projectList: [], // Add project list to global state
    statusMessage: null, // Status or error messages
  });

  // Fetch projects from the backend
  const fetchProjects = async (user) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      if(response?.data?.length > 0){

        setGlobalData((prev) => ({
          ...prev,
          projectList: [...response.data],
          statusMessage: response.data.length > 0 ? null : "No projects found",
        }));
      }else{
        setGlobalData((prev) => ({
          ...prev,
          projectList: [],
          statusMessage:  "No projects found",
        }));
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setGlobalData((prev) => ({
        ...prev,
        statusMessage: "Something went wrong while fetching projects",
      }));
    }
  };

  // Create a new project
  const createProject = async (user, projectData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/create-project`,
        projectData,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      // Add the new project to the list
      setGlobalData((prev) => ({
        ...prev,
        projectList: [...prev.projectList, response.data],
      }));

      return response.data;
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  // Delete a project
  const deleteProject = async (user, propertyID) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/delete-project/${propertyID}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      if (res.status === 200) {
        // Remove the project from the list
        setGlobalData((prev) => ({
          ...prev,
          projectList: prev.projectList.filter(
            (project) => project.propertyID !== propertyID
          ),
        }));
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  // Fetch Google Analytics connection
  const fetchGoogleAnalyticsConnection = async (user) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/google/check-connection`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      setGlobalData((prev) => ({
        ...prev,
        isConnectedToGA: response.data.isConnected,
        accounts: response.data.accounts,
      }));
    } catch (error) {
      console.error("Error checking GA connection:", error);
    }
  };

  // Connect Google Analytics
  const connectGoogleAnalytics = async (user) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/google/redirect?userId=${user.id}`,
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    return response.data.redirectUrl;
  };

  // Revoke Google Analytics
  const revokeGoogleAnalytics = async (user) => {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/google/revoke`,
      {},
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    setGlobalData((prev) => ({
      ...prev,
      isConnectedToGA: false,
      accounts: [],
      propertiesForAccount: [],
    }));
  };

  return (
    <GlobalContext.Provider
      value={{
        globalData,
        setGlobalData,
        fetchGoogleAnalyticsConnection,
        connectGoogleAnalytics,
        revokeGoogleAnalytics,
        createProject,
        fetchProjects,
        deleteProject,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
