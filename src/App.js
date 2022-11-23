import "./App.css";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/Profile/Profile";
const App=()=> {
  return (
    <div className="app">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
