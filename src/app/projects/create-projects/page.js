"use client";
import React, { useState, useEffect, useContext } from "react";
import * as styles from "../../projects/Projects.module.css";
import AuthContext from "../../context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import { GlobalContext } from "../../context/GlobalContext"; // Import the global context

function Projects() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  const {
    globalData,
    fetchGoogleAnalyticsConnection,
    connectGoogleAnalytics,
    revokeGoogleAnalytics,
    createProject,
    setGlobalData,
  } = useContext(GlobalContext);
  const [projectName, setProjectName] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Extract global state values
  const { isConnectedToGA, accounts, selectedAccountId } = globalData;

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else {
        fetchGoogleAnalyticsConnection(user); // Fetch connection status on mount
      }
    }
  }, [user, loading]);

  const handleConnectGA = async () => {
    const redirectUrl = await connectGoogleAnalytics(user);
    window.location.href = redirectUrl;
  };

  const handleRevokeConnection = async () => {
    await revokeGoogleAnalytics(user);
    alert("Google Analytics connection revoked.");
  };

  const handleAccountSelect = (accountId) => {
    setGlobalData((prev) => ({
      ...prev,
      selectedAccountId: accountId,
      propertiesForAccount: accounts.find(
        (account) => account.accountId === accountId
      ).properties,
    }));
  };

  const handlePropertySelect = (propertyId) => {
    setSelectedProperty({ source: "Google Analytics", propertyId });
  };

  const handleCreateProject = async () => {
    if (
      !projectName ||
      !selectedAccountId ||
      !selectedProperty ||
      !selectedProperty.propertyId
    ) {
      return;
    }

    const selectedAccount = accounts.find(
      (account) => account.accountId === selectedAccountId
    );
    const accountName = selectedAccount ? selectedAccount.accountName : "";
    const propertyName = selectedProperty
      ? selectedAccount.properties.find(
          (e) => e.propertyId === selectedProperty.propertyId
        ).propertyName
      : "";

    const projectData = {
      projectName,
      accountID: selectedAccountId,
      dataSource: selectedProperty.source,
      accountName,
      propertyName,
      propertyID: selectedProperty.propertyId,
    };

    const res = await createProject(user, projectData);
    if (res) {
      router.push("/projects");
    }
  };
  return (
    <div className="container">
      <h3 className="heading-3">Create a New Project</h3>
      <input
        className={styles.projectInput}
        type="text"
        placeholder="Name of the project"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />

      <h4 className="heading-3">Connect Data Source</h4>
      <div className={styles.buttonContainer}>
        {!isConnectedToGA ? (
          <button className="button-white" onClick={handleConnectGA}>
            Connect Google Analytics
          </button>
        ) : accounts.length > 0 ? (
          <>
            <select onChange={(e) => handleAccountSelect(e.target.value)}>
              <option value="">Select a Google Analytics Account</option>
              {accounts.map(({ accountId, accountName }) => (
                <option key={accountId} value={accountId}>
                  {accountName}
                </option>
              ))}
            </select>

            {selectedAccountId &&
              globalData.propertiesForAccount.length > 0 && (
                <select onChange={(e) => handlePropertySelect(e.target.value)}>
                  <option value="">Select a Property</option>
                  {globalData.propertiesForAccount.map(
                    ({ propertyId, propertyName }) => (
                      <option key={propertyId} value={propertyId}>
                        {propertyName}
                      </option>
                    )
                  )}
                </select>
              )}

            <button className="button-black" onClick={handleRevokeConnection}>
              Revoke Google Analytics Connection
            </button>
          </>
        ) : (
          <p>
            No Google Analytics properties available. Please try reconnecting.
          </p>
        )}
      </div>

      <button
        className="button-black"
        onClick={handleCreateProject}
        disabled={!projectName || !selectedProperty?.propertyId}
      >
        Create Project
      </button>
    </div>
  );
}

export default Projects;