import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import '../src/App.css';

function App() {
  return (
    <div className="App">
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="others">
            others
          </div>
        </div>

      </>
    </div>
  );
}

export default App;
