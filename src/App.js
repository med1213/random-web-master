import Header from "./layouts/header/Header";
import Sidebar from "./layouts/sidebar/Sidebar";
import Routers from "./routes/Routers";
import './App.css'


function App() {
  return (
    <>
      <div className="main bg-light">
        <Header />
        <div className="body">
          <Sidebar />
          <div className="bg-white mt-2 py-2 px-4">
            <Routers />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
