import {
  BrowserRouter as Router,
  Routes,// 5.x : Swtich , 6.x : Routes
  Route
} from "react-router-dom";
import Menu from "./routes/Menu";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (<Router>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/movies" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
    </Router>);
}

export default App;
