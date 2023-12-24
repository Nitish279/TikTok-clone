import React, { useState } from "react";

const InstallPrompt = ({ deferredPrompt }) => {
  const [showInstallButton, setShowInstallButton] = useState(false);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the installation prompt");
        } else {
          console.log("User dismissed the installation prompt");
        }
      });
    }
  };

  const handleBeforeInstallPrompt = (event) => {
    event.preventDefault();
    setShowInstallButton(true);
  };

  React.useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

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
