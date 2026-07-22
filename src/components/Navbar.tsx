import { Code2, Menu, Terminal, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GithubIcon } from "@/utils/SocialMediaIcons";

const navItems = [
  { path: "/", label: "Accueil" },
  { path: "/about", label: "À propos" },
  { path: "/projects", label: "Projets" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo Brand */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity"
        >
          <div className="p-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
            <Code2 className="w-4 h-4" />
          </div>
          <span>Delfred.portfolio</span>
        </NavLink>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? "text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800/80 font-semibold"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions à droite */}
        <div className="hidden md:flex items-center gap-3">
          {/* <ThemeToggle /> */}
          <a
            href="https://github.com/Delfred237"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
            <Terminal className="w-4 h-4" />
          </div>
        </div>

        {/* Bouton Menu Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          {/* <ThemeToggle /> */}
          <a
            href="https://github.com/Delfred237"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
            <Terminal className="w-4 h-4" />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 font-semibold"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
