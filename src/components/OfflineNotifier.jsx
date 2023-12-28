import React, { useState, useEffect } from "react";

const OfflineNotifier = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      {!isOnline && (
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            textAlign: "center",
          }}
        >
          You are currently offline. Please check your internet connection.
        </div>
      )}
    </div>
  );
};

export default OfflineNotifier;
