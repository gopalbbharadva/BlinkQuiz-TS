import { Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LeaderBoard } from "../pages/LeaderBoard/LeaderBoard";
import {
  HomePage,
  LoginPage,
  QuestionPage,
  QuizzesPage,
  ResultPage,
  RulesPage,
  SignupPage,
} from "../pages/pageExport";
import { ProfilePage } from "../pages/Profile/ProfilePage";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoute = () => {
  const { isLoading } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:categoryId" element={<QuizzesPage />} />
      {!isLoading && (
        <Route
          path="/rules"
          element={
            <PrivateRoute>
              <RulesPage />
            </PrivateRoute>
          }
        />
      )}

      {!isLoading && (
        <Route
          path="/question"
          element={
            <PrivateRoute>
              <QuestionPage />
            </PrivateRoute>
          }
        />
      )}

      {!isLoading && (
        <Route
          path="/result"
          element={
            <PrivateRoute>
              <ResultPage />
            </PrivateRoute>
          }
        />
      )}

      {!isLoading && (
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
      )}
      {!isLoading && (
        <Route
          path="/leaderboard"
          element={
            <PrivateRoute>
              <LeaderBoard />
            </PrivateRoute>
          }
        />
      )}

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};
