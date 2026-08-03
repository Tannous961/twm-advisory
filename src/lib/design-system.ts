export type ThemeId =
  | "bronze"
  | "gold"
  | "steel"
  | "emerald"
  | "wine"
  | "sand";

export type ThemeTokens = {
  id: ThemeId;
  label: { fr: string; en: string };
  description: { fr: string; en: string };
  swatch: string;
  vars: Record<string, string>;
};

/** Design system — color themes for live A/B testing */
export const themes: ThemeTokens[] = [
  {
    id: "bronze",
    label: { fr: "Bronze", en: "Bronze" },
    description: { fr: "Cuivre actuel — signature TWM", en: "Current copper — TWM signature" },
    swatch: "#B87333",
    vars: {
      "--bg": "#070A11",
      "--fg": "#F2EFEA",
      "--accent": "#B87333",
      "--accent-soft": "#E3AC6C",
      "--accent-rgb": "184, 115, 51",
      "--muted": "#98A1B3",
      "--muted-2": "#778093",
      "--muted-3": "#5D6579",
      "--line": "rgba(255, 255, 255, 0.08)",
      "--panel": "#080C15",
      "--panel-2": "#0C1220",
      "--ink": "#070A11",
      "--glow": "rgba(184, 115, 51, 0.14)",
      "--selection": "rgba(184, 115, 51, 0.35)",
    },
  },
  {
    id: "gold",
    label: { fr: "Or", en: "Gold" },
    description: { fr: "Or champagne — premium clair", en: "Champagne gold — bright premium" },
    swatch: "#C9A227",
    vars: {
      "--bg": "#0A0B0F",
      "--fg": "#F5F1E8",
      "--accent": "#C9A227",
      "--accent-soft": "#E8C96A",
      "--accent-rgb": "201, 162, 39",
      "--muted": "#A0A5B0",
      "--muted-2": "#7A808C",
      "--muted-3": "#5C6270",
      "--line": "rgba(255, 255, 255, 0.08)",
      "--panel": "#101218",
      "--panel-2": "#161A22",
      "--ink": "#0A0B0F",
      "--glow": "rgba(201, 162, 39, 0.14)",
      "--selection": "rgba(201, 162, 39, 0.35)",
    },
  },
  {
    id: "steel",
    label: { fr: "Acier", en: "Steel" },
    description: { fr: "Bleu acier — corporate froid", en: "Steel blue — cool corporate" },
    swatch: "#5B8FA8",
    vars: {
      "--bg": "#06090E",
      "--fg": "#E8EEF2",
      "--accent": "#5B8FA8",
      "--accent-soft": "#8FB8C9",
      "--accent-rgb": "91, 143, 168",
      "--muted": "#8E9AAB",
      "--muted-2": "#6B788A",
      "--muted-3": "#4F5B6A",
      "--line": "rgba(255, 255, 255, 0.08)",
      "--panel": "#0A1018",
      "--panel-2": "#101820",
      "--ink": "#06090E",
      "--glow": "rgba(91, 143, 168, 0.16)",
      "--selection": "rgba(91, 143, 168, 0.35)",
    },
  },
  {
    id: "emerald",
    label: { fr: "Émeraude", en: "Emerald" },
    description: { fr: "Vert confiance — finance / conseil", en: "Trust green — finance / advisory" },
    swatch: "#3D9B7A",
    vars: {
      "--bg": "#060B09",
      "--fg": "#E8F2ED",
      "--accent": "#3D9B7A",
      "--accent-soft": "#6FC4A3",
      "--accent-rgb": "61, 155, 122",
      "--muted": "#8FA89C",
      "--muted-2": "#6B8578",
      "--muted-3": "#4F665C",
      "--line": "rgba(255, 255, 255, 0.08)",
      "--panel": "#0A1410",
      "--panel-2": "#101C16",
      "--ink": "#060B09",
      "--glow": "rgba(61, 155, 122, 0.16)",
      "--selection": "rgba(61, 155, 122, 0.35)",
    },
  },
  {
    id: "wine",
    label: { fr: "Bordeaux", en: "Wine" },
    description: { fr: "Rouge bordeaux — luxe discret", en: "Bordeaux — quiet luxury" },
    swatch: "#A04555",
    vars: {
      "--bg": "#0B080A",
      "--fg": "#F2EBEF",
      "--accent": "#A04555",
      "--accent-soft": "#C97A88",
      "--accent-rgb": "160, 69, 85",
      "--muted": "#A3969C",
      "--muted-2": "#7D7178",
      "--muted-3": "#5C5258",
      "--line": "rgba(255, 255, 255, 0.08)",
      "--panel": "#140C10",
      "--panel-2": "#1C1218",
      "--ink": "#0B080A",
      "--glow": "rgba(160, 69, 85, 0.16)",
      "--selection": "rgba(160, 69, 85, 0.35)",
    },
  },
  {
    id: "sand",
    label: { fr: "Sable", en: "Sand" },
    description: { fr: "Clair sable — contraste jour", en: "Light sand — daytime contrast" },
    swatch: "#8B6914",
    vars: {
      "--bg": "#F3EFE6",
      "--fg": "#1A1712",
      "--accent": "#8B6914",
      "--accent-soft": "#B08A2E",
      "--accent-rgb": "139, 105, 20",
      "--muted": "#5C564A",
      "--muted-2": "#7A7366",
      "--muted-3": "#8F8778",
      "--line": "rgba(26, 23, 18, 0.12)",
      "--panel": "#EAE4D8",
      "--panel-2": "#E0D8C8",
      "--ink": "#F3EFE6",
      "--glow": "rgba(139, 105, 20, 0.12)",
      "--selection": "rgba(139, 105, 20, 0.25)",
    },
  },
];

export const DEFAULT_THEME: ThemeId = "bronze";
export const THEME_STORAGE_KEY = "twm-theme";

export function getTheme(id: ThemeId): ThemeTokens {
  return themes.find((t) => t.id === id) ?? themes[0];
}
