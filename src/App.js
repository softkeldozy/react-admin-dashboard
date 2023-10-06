import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import '../src/App.css';
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Home />
        </div>

      </>
    </div>
  );
}

export default App;
