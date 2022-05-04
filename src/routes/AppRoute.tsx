import { Route, Routes } from "react-router-dom";
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
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/categoryId" element={<QuizzesPage />} />
      <Route
        path="/rules"
        element={
          <PrivateRoute>
            <RulesPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/question"
        element={
          <PrivateRoute>
            <QuestionPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/result"
        element={
          <PrivateRoute>
            <ResultPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};
