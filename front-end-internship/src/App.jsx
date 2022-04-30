import "./App.css";
import EditIntern from "./components/EditIntern/EditIntern";
import { Routes, Route } from "react-router-dom";
import InternList from "./components/InternList/InternList";

function App() {
  return (
    <div className="App">
      <img className="logo" src="/logo.svg" alt="logo" />
      <Routes>
        <Route path="/interns/:id" exact element={<EditIntern />} />{" "}
        <Route path="/" element={<InternList />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
