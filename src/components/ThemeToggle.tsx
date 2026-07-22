import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import type { Theme } from "@/types/theme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: "light", label: "Clair", icon: <Sun className="w-4 h-4" /> },
    { value: "dark", label: "Sombre", icon: <Moon className="w-4 h-4" /> },
    {
      value: "system",
      label: "Système",
      icon: <Monitor className="w-4 h-4" />,
    },
  ];

  return (
    <div className="inline-flex items-center p-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
      {options.map((option) => {
        const isActive = theme === option.value;
        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
            } `}
            title={`Passer au mode ${option.label}`}
            aria-label={`Mode ${option.label}`}
          >
            {option.icon}
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
