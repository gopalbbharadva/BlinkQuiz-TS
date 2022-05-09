import "./App.css";
import { NavBar, Loader } from "./components/compExport";
import { useAuth } from "./contexts/AuthContext";
import { AppRoute } from "./routes/AppRoute";

function App() {
  const { showLoader } = useAuth();
  return (
    <div className="App">
      {showLoader && <Loader />}
      <NavBar />
      <AppRoute />
    </div>
  );
}

export default App;
