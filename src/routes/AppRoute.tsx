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

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/categoryId" element={<QuizzesPage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};
