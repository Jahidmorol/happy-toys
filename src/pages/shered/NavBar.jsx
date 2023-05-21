import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaRegTimesCircle, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/gallary/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .then((error) => console.error(error));
  };

  return (
    <div className="bg-[#80BD9E]">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-2 lg:max-w-screen-xl lg:px-1">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img className="mb-1 w-12 " src={logo} alt="" />
            <h2 className="text-2xl font-bold text-neutral ">
              <span className="text-white">HAPPY</span> TOYS
            </h2>
          </Link>

          {/* Nav Items Section */}

          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "default-b"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alltoys"
                className={({ isActive }) =>
                  isActive ? "active" : "default-b"
                }
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "active" : "default-b"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink
                  to="/addatoys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default-b"
                  }
                >
                  Add A Toy
                </NavLink>
              )}
            </li>
            <li>
              {user && (
                <NavLink
                  to="/mytoys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default-b"
                  }
                >
                  My Toys
                </NavLink>
              )}
            </li>
            <li className="flex items-center gap-3">
              <div>
                {user && (
                  <div
                    className="tooltip tooltip-bottom tooltip-warning"
                    data-tip={user.displayName}
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.photoURL}
                    />
                  </div>
                )}
              </div>
              {user ? (
                <button onClick={handleLogout} className="btn">
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="w-5 text-xl text-white mt-2" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-neutral border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="flex items-center ">
                        <img className="mb-1 w-10 h-10" src={logo} alt="" />
                        <h2 className="text-xl font-bold text-white ">
                          Happy Toys
                        </h2>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FaRegTimesCircle className="mt-1 text-xl text-white" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default-b">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/alltoys" className="default-b">
                          All Toys
                        </Link>
                      </li>
                      <li>
                        {user && (
                          <Link to="/addatoys" className="default-b">
                            Add A Toy
                          </Link>
                        )}
                      </li>
                      <li>
                        {user && (
                          <Link to="/mytoys" className="default-b">
                            My Toys
                          </Link>
                        )}
                      </li>
                      <li>
                        <Link to="/blogs" className="default-b">
                          Blog
                        </Link>
                      </li>
                      <li className="flex items-center gap-3">
                        <div>
                          {user && (
                            <div
                              className="tooltip tooltip-bottom tooltip-warning"
                              data-tip={user.displayName}
                            >
                              <img
                                className="w-10 h-10 rounded-full"
                                src={user.photoURL}
                              />
                            </div>
                          )}
                        </div>
                        {user ? (
                          <button onClick={handleLogout} className="btn ">
                            Log Out
                          </button>
                        ) : (
                          <Link to="/login">
                            <button className="btn bg-slate-400">Login</button>
                          </Link>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          {/* <button className="btn">Star Applying</button> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
