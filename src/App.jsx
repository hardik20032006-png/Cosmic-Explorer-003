import { Topbar } from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Facts from "./pages/Facts";
import Achievements from "./pages/Achievements";
import AchievementDetails from "./pages/AchievementDetails";
import Scientists from "./pages/Scientists";
import ScientistDetails from "./pages/ScientistDetails";

function App() {
  return (
    <div className="h-screen overflow-hidden bg-[#161617] text-white">

      <Topbar />

      <div className="flex h-[calc(100vh-4rem)]">

        <Sidebar />

        <main className="flex-1 overflow-y-auto">
          <Routes>

  <Route path="/explore" element={<div>Explore</div>} />

  <Route
    path="/solar-system"
    element={<div>Solar System</div>}
  />

  <Route
    path="/space-missions"
    element={<div>Space Missions</div>}
  />

  <Route
    path="/discoveries"
    element={<div>Discoveries</div>}
  />

  <Route
  path="/achievements"
  element={<Achievements />}
/>
    <Route
    path="/achievements/:title"
    element={<AchievementDetails />}
  />

  <Route
    path="/theories"
    element={<div>Theories</div>}
  />

  <Route
  path="/scientists"
  element={<Scientists />}
/>

<Route
  path="/scientists/:name"
  element={<ScientistDetails />}
/>

  <Route
    path="/quiz"
    element={<div>Quiz</div>}
  />

  <Route
  path="/facts"
  element={<Facts />}
/>

<Route
    path="/Galary"
    element={<div>Galary</div>}
  />

</Routes>
        </main>

      </div>

    </div>
  );
}

export default App;