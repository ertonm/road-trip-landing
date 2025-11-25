import "./styles/App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/media-queries.scss";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
    </div>
  )
}

export default App
