import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./components/common/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import DemoPage from "./pages/DemoPage/DemoPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {

  const user = localStorage.getItem("user")
  return (
    <>
      <Routes>
         <Route path="/app" element={user != null ? <HomePage/> : <LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/demo" element={<DemoPage />} />
               
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
