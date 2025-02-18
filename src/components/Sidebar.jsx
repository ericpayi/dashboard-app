import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 fixed">
      <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
      <nav>
        <ul className="space-y-3">
          <li>
            <Link to="/" className="block p-2 rounded hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="block p-2 rounded hover:bg-gray-700">
              Analytics
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block p-2 rounded hover:bg-gray-700">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
