import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LiveScore from "./components/LiveScore/LiveScore";
import Layout from "./components/Layout/Layout";
import Leagues from "./components/League/Leagues";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livescore" element={<LiveScore />} />
          <Route path="/leagues" element={<Leagues />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
