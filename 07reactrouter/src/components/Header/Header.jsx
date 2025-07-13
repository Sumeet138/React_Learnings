import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      {/* Glassmorphism container with backdrop blur and gradient */}
      <nav className="bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-md border border-white/10 px-4 lg:px-6 py-2.5 shadow-lg shadow-blue-500/20 rounded-2xl">
        {/* Blue glow effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-blue-400/10 to-blue-600/5 pointer-events-none rounded-2xl"></div>

        <div className="relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo section */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-12 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                alt="Logo"
              />
              {/* Subtle glow behind logo on hover */}
              <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </Link>

          {/* Action buttons */}
          <div className="flex items-center lg:order-2 space-x-2">
            <Link
              to="#"
              className="relative text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 focus:ring-4 focus:ring-blue-500/30 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <span className="relative z-10">Log in</span>
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Link>

            <Link
              to="#"
              className="relative text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 focus:ring-4 focus:ring-blue-500/50 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 group border border-blue-500/30"
            >
              <span className="relative z-10">Get started</span>
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-300/30 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm"></div>
            </Link>
          </div>

          {/* Navigation menu */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `relative block py-2 pr-4 pl-3 duration-300 border-b border-transparent lg:border-0 lg:p-0 transition-all group ${
                      isActive
                        ? "text-orange-400 lg:bg-transparent"
                        : "text-white/80 hover:text-orange hover:bg-white/10  "
                    }`
                  }
                >
                  <span className="relative z-10">Home</span>
                  {/* Animated underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `relative block py-2 pr-4 pl-3 duration-300 border-b border-transparent lg:border-0 lg:p-0 transition-all group ${
                      isActive
                        ? "text-orange-400 lg:bg-transparent"
                        : "text-white/80 hover:text-orange hover:bg-white/10 "
                    }`
                  }
                >
                  <span className="relative z-10">About</span>
                  {/* Animated underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
