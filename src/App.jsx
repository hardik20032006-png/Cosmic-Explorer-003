import { Topbar } from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Facts from "./pages/Facts";
import Achievements from "./pages/Achievements";
import AchievementDetails from "./pages/AchievementDetails";
import Scientists from "./pages/Scientists";
import ScientistDetails from "./pages/ScientistDetails";
import Theories from "./pages/Theories";
import TheoryDetails from "./pages/TheoryDetails";
import SpaceMissions from "./pages/SpaceMissions";
import SpaceMissionDetails from "./pages/SpaceMissionDetails";
import Discoveries from "./pages/Discoveries";
import DiscoveryDetails from "./pages/DiscoveryDetails";

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
  element={<SpaceMissions />}
/>
<Route
  path="/space-missions/:slug"
  element={<SpaceMissionDetails />}
/>

  <Route
  path="/discoveries"
  element={<Discoveries />}
/>

<Route
  path="/discoveries/:slug"
  element={<DiscoveryDetails />}
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
  element={<Theories />}
/>

<Route
  path="/theories/:slug"
  element={<TheoryDetails />}
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