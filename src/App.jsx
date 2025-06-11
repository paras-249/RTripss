import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl); // This works!


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/s" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;