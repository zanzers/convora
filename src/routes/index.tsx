import { Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/Landing";
import LoginPage from "@/pages/Login";
import DashboardPage from "@/pages/Dashboard";
import ConversationPage from "@/pages/Conversation";
import ProgressPage from "@/pages/Progress";
import ProfilePage from "@/pages/Profile";
import SettingPage from "@/pages/Settings";
import NotFoundPage from "@/pages/NotFound";
import MainLayout from "@/layout/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route path="/" element={<DashboardPage />} />
      <Route path="/conversation" element={<ConversationPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingPage />} />
    </Route>
    
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
  </Routes>
  );
}

