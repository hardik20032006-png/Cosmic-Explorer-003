import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AppLayout() {
  return (
    <div>
      <Sidebar />
      
      <div>
        <Topbar />

        <main>
          <h1>Welcome to Cosmic World</h1>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;