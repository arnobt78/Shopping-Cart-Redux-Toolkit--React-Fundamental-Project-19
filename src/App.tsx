import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Shared layout content that appears on all pages. */}
      <Header />
      {/* Route content switches below based on current URL. */}
      <AllRoutes />
    </div>
  );
}

export default App;
