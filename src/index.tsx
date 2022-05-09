import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { QuizProvider } from "./contexts/QuizContext";
import { QuestionProvider } from "./contexts/QuestionContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QuizProvider>
          <QuestionProvider>
            <App />
          </QuestionProvider>
        </QuizProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
