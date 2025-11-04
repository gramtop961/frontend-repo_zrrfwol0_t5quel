import { Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 text-center">
              <h1 className="text-3xl font-semibold">Page not found</h1>
              <Link to="/" className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition">Back to Home</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
