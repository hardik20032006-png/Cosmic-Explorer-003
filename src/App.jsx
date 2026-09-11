import { Topbar } from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen overflow-hidden bg-[#161617] text-white">

      <Topbar />

      <div className="flex h-[calc(100vh-4rem)]">

        <Sidebar />

        <main className="flex-1 overflow-y-auto">
          <Routes>

            {/* Explore */}
            <Route path="/" element={<div>Explore</div>} />

            {/* Solar System */}
            <Route
              path="/solar-system"
              element={<div>Solar System</div>}
            />

            {/* Space Missions */}
            <Route
              path="/space-missions"
              element={<div>Space Missions</div>}
            />

            {/* Discoveries */}
            <Route
              path="/discoveries"
              element={<div>Discoveries</div>}
            />

            {/* Achievements */}
            <Route
              path="/achievements"
              element={<div>Achievements</div>}
            />

            {/* Theories */}
            <Route
              path="/theories"
              element={<div>Theories</div>}
            />

            {/* Scientists */}
            <Route
              path="/scientists"
              element={<div>Scientists</div>}
            />

            {/* Quiz */}
            <Route
              path="/quiz"
              element={<div>Quiz</div>}
            />

          </Routes>
        </main>

      </div>

    </div>
  );
}

export default App;