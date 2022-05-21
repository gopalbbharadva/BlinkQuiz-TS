import "./App.css";
import { NavBar } from "./components/compExport";
import { AppRoute } from "./routes/AppRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoute />
    </div>
  );
}

export default App;
