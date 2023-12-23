import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Login from "./components/Login";
import Upload from "./components/Upload";
import SplashScreen from "./components/SplashScreen";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ErrorBoundary>
      {loading ? (
        <SplashScreen />
      ) : (
        <Router>
          <Suspense fallback={<SplashScreen />}>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>
          </Suspense>
        </Router>
      )}
    </ErrorBoundary>
  );
};

export default App;
