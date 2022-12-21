import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Main } from './main/main';
import {Login} from "./pages/login"
import {Navbar} from"./components/navbar";
import { CreatePost } from './create-post/create-post.js';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/createpost" element={<CreatePost/>}></Route>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
