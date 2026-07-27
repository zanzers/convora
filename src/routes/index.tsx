import { Routes, Route } from "react-router-dom";

import LoginPage from "@/pages/Login";
import DashboardPage from "@/pages/Dashboard";
import ConversationPage from "@/pages/Conversation";
import ProgressPage from "@/pages/Progress";
import ProfilePage from "@/pages/Profile";
import SettingPage from "@/pages/Settings";
import NotFoundPage from "@/pages/NotFound";
import MainLayout from "@/layout/MainLayout";
import ScenarioPage from "@/pages/Scenario/ScenarioPage";
import CoachStage from "@/components/conversation/CoachStage";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/conversation" element={<ConversationPage />} />

      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingPage />} />

      {/* COACH SECTION ROUTE */}
      <Route path="/practice" element={<ScenarioPage />} />
      <Route path="/practice/:scenarioId" element={<CoachStage />} />
    </Route>
    
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
  </Routes>
  );
}

