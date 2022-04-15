import "./App.css";
import { Footer, Header, Main, Sidebar } from "./frontend/layouts";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
