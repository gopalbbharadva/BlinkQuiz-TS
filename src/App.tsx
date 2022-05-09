import "./App.css";
import { Loader } from "./components/loader/Loader";
import { NavBar } from "./components/NavBar/NavBar";
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
