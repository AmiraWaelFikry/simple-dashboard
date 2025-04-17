import { Link, Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logged");
    navigate("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <nav className="w-64 bg-emerald-800 text-white flex flex-col py-8 px-4">
        <div className="text-3xl font-bold mb-12 text-center">LOGO</div>
        <ul className="space-y-4 flex-1 text-center">
          <li>
            <Link to="general" className="sidebar-link ">
              General
            </Link>
          </li>
          <li>
            <Link to="users" className="sidebar-link ">
              Users
            </Link>
          </li>
          <li>
            <Link to="settings" className="sidebar-link ">
              Settings
            </Link>
          </li>
        </ul>

        <button onClick={handleLogout} className="button">
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-8">
        <div className="bg-white p-6 rounded-xl shadow-md min-h-full flex items-center justify-center text-3xl text-gray-800">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
