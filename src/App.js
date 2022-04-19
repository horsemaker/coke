import "./App.css";
import { Footer, Header, Main, Sidebar } from "./frontend/layouts";
import { ScrollToTop } from "./frontend/components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="app">
      <ScrollToTop>
        <Header />
        <div className="app-content">
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
