// Le thème peut être 'dark' (sombre), 'light' (clair) ou 'system' (suit l'OS de l'utilisateur)
export type Theme = "dark" | "light" | "system";

// Interface définissant les valeurs fournies par le Context React
export interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light"; // Le thème réellement appliqué ('dark' ou 'light')
}
