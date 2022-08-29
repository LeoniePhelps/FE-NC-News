import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { AllArticles } from "./components/AllArticles";
import { SingleArticle } from "./components/SingleArticle";
import { UserContext } from "./UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ username: "happyamy2016" }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<AllArticles />} />
            <Route path="/topic/:slug" element={<AllArticles />} />
            <Route path="/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
