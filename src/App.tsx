import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoadingProvider>
              <Suspense>
                <MainContainer />
              </Suspense>
            </LoadingProvider>
          }
        />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
