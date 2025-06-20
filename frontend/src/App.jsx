import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FetchGrid from "../components/FetchConfig";
import UpdateRemark from "../components/UpdateRemark";
import Navbar from "../components/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen px-6 py-8 font-sans">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">Configuration Dashboard</h1>
          <p className="text-gray-400 text-sm">Rajan Verma (rajanverma0879@gmail.com)</p>
        </header>

        {/* Navbar */}
        <Navbar/>

          {/* Page Content  */}
        <main className="max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<FetchGrid />} />
            <Route path="/update" element={<UpdateRemark />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
