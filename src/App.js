import './App.css';
import {Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./page";
import Login from "./page/login";
import Join from "./page/join/join";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/join" element={<Join/>}/>
        </Routes>
    );
}

export default App;
