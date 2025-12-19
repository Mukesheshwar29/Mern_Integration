import { Link } from "react-router-dom";

export default function Header({ cartLength, toggleSidebar }) {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/30 border-b border-gray-200 transition-all duration-300 shadow-md">
      <div className="w-full px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-white/50 rounded-lg transition-colors group"
              aria-label="Toggle Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* LEFT: LOGO */}
            <Link to="/" className="group flex flex-col items-center md:items-start transition-all hover:scale-105 duration-200 flex-shrink-0">
              <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">
                🛍️ MERN E-Commerce
              </h1>
              <p className="text-sm font-medium text-gray-500 group-hover:text-indigo-500 transition-colors">
                Premium Shopping Experience
              </p>
            </Link>
          </div>

          {/* RIGHT: NAVIGATION & ACTIONS */}
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* NAVIGATION LINKS (Text Only, Right Aligned) */}
            <nav className="flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-600 hover:text-indigo-600 font-bold transition-all duration-300 hover:scale-105 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                to="/"
                className="text-gray-600 hover:text-indigo-600 font-bold transition-all duration-300 hover:scale-105 relative group"
              >
                Products
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-indigo-600 font-bold transition-all duration-300 hover:scale-105 relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </nav>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-4">
              <Link
                to="/addproduct"
                // Removed blank target for smoother SPA experience, unless explicitly desired
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold !text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Add Product</span>
              </Link>

              {/* CART */}
              <Link
                to="/cart"
                className="relative p-2.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-200 group"
              >
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 transition-transform group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {cartLength > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 
                                     bg-red-500 text-white 
                                     text-[10px] font-bold 
                                     h-5 w-5 rounded-full 
                                     flex items-center justify-center
                                     shadow-sm border-2 border-white">
                      {cartLength}
                    </span>
                  )}
                </div>
              </Link>

              {/* LOGIN / LOGOUT */}
              {localStorage.getItem("user") ? (
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold !text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold !text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
