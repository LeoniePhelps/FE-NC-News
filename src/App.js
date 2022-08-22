import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { AllArticles } from "./components/AllArticles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AllArticles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
