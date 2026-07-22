import type { Theme, ThemeProviderState } from "@/types/theme";
import { createContext, useContext, useEffect, useState } from "react";

// Clé sous laquelle la préférence sera sauvegardée dans le navigateur
const STORAGE_KEY = "portfolio-theme";

// Valeur initiale par défaut du contexte
const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
  resolvedTheme: "dark",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: Readonly<ThemeProviderProps>) {
  // 1. Initialisation de l'état du thème depuis localStorage ou utiliser le thème par défaut
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem(STORAGE_KEY) as Theme) || defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = window.document.documentElement;

    // Suppression des anciennes classes de thème
    root.classList.remove("light", "dark");

    // Détermination de l'application du dark mode
    let effectiveTheme: "dark" | "light";

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      effectiveTheme = systemTheme;
    } else {
      effectiveTheme = theme;
    }

    // Application la classe 'dark' ou 'light' sur la balise <html>
    root.classList.add(effectiveTheme);
    setResolvedTheme(effectiveTheme);
  }, [theme]);

  // Fonction pour changer le thème et persister le choix
  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(STORAGE_KEY, newTheme);
      setTheme(newTheme);
    },
    resolvedTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom Hook pour consommer le thème facilement dans n'importe quel composant
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme doit être utilisé à l'intérieur d'un ThemeProvider");
  }
  return context;
};
