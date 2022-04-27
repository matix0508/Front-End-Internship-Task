import "./App.css";
import EditIntern from "./components/EditIntern/EditIntern";
import InternList from "./components/InternList/InternList";
import { Routes, Route } from "react-router-dom";

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
