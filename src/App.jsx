import "./App.css";
import { AllRoutes } from "./pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export const url = "http://localhost:8080/employees";
export default App;
