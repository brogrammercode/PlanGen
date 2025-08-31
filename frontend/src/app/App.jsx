import { Route, Routes } from "react-router-dom";
import AuthPage from "../ui/pages/AuthPage";
import DashboardPage from "../ui/pages/DashboardPage";

function App() {
  return (
    <>
      <main className="text-sm">
        <Routes>
          <Route path="/" />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
