import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <h2>Cosmic World</h2>

      <nav>
        <Link to="/planets">Planets</Link>
        <Link to="/solar-system">Solar System</Link>
        <Link to="/stars">Stars</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;