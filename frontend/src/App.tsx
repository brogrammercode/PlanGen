import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./components/common/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import DemoPage from "./pages/DemoPage/DemoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                {/* <Route path="/" element={<LandingPage />} /> */}
                <Route path="/" element={<DemoPage />} />
              </Routes>
            </Layout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
