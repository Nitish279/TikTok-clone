// InstallPrompt.js
import React, { useState } from "react";

const InstallPrompt = ({ deferredPrompt }) => {
  const [showInstallButton, setShowInstallButton] = useState(false);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Show the installation prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the installation prompt");
        } else {
          console.log("User dismissed the installation prompt");
        }

        // Reset deferredPrompt
        deferredPrompt = null;

        // Hide the install button
        setShowInstallButton(false);
      });
    }
  };

  const handleBeforeInstallPrompt = (event) => {
    // Prevent the default prompt
    event.preventDefault();

    // Store the event for later use
    const deferredPrompt = event;

    // Show the install button
    setShowInstallButton(true);
  };

  // Attach the event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return (
    <div>
      {showInstallButton && (
        <button onClick={handleInstallClick} className="install-button">
          Install App
        </button>
      )}
    </div>
  );
};

export default InstallPrompt;
