import "./App.css";
import { AuthProvider } from "./context";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/SignIn";
import Home from "./pages/Home";
import Waitlist from "./pages/Waitlist";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="waitlist" element={<Waitlist />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
