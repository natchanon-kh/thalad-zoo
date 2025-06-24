import React, { useState } from "react";

// Mock router functions for demo
const Link = ({ to, children, className, onClick }: any) => (
  <a
    href="#"
    className={className}
    onClick={(e) => {
      e.preventDefault();
      onClick?.();
    }}
  >
    {children}
  </a>
);

const useLocation = () => ({ pathname: "/" }); // Mock current path

const NavbarDemo: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/about", label: "เกี่ยวกับสวนสัตว์" },
    { path: "/animals", label: "สารานุกรมสัตว์" },
    { path: "/contact", label: "ติดต่อ" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <div className="bg-gray-50">
      {/* Header with curved green background */}
      <div className="relative">
        <div className="bg-green-700 h-20 w-full"></div>
        {/* <div className="absolute inset-0 bg-green-700">
          <svg
            className="absolute bottom-0 w-full h-8"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
              fill="rgb(245 245 244)"
            />
          </svg>
        </div> */}
      </div>

      {/* Navigation */}
      <nav className="bg-stone-100 py-4 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-green-700 hover:text-green-800 transition-colors"
          >
            THALAD ZOO
          </Link>

          {/* Desktop & Tablet Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-green-700 transition-colors font-medium ${
                  isActivePath(item.path)
                    ? "text-green-700 border-b-2 border-green-700"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button (เฉพาะ mobile จริงๆ) */}
          <button
            className="md:hidden text-gray-700 hover:text-green-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-700 hover:text-green-700 transition-colors font-medium px-4 py-2 rounded ${
                    isActivePath(item.path) ? "text-green-700 bg-green-50" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarDemo;
