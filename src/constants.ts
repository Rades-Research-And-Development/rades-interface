import { Theme } from "@mui/material";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const lightTheme = (theme: Theme) => theme.palette.mode === "light";

export const secondarySideBarWidth = 215;
export const secondarySideBarGap = 80;

export const limitArticlesLoaded = 10;
export const limitCommentsLoaded = 15;
export const allowFileUploaed = ['image', 'gif', 'video', 'pdf']

export const imageLayout = [
  [{ cols: 2, rows: 2 }],
  [
    { cols: 1, rows: 2 },
    { cols: 1, rows: 2 },
  ],
  [
    { cols: 3, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 1, rows: 1 },
  ],
  [
    { cols: 2, rows: 2 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 2, rows: 1 },
  ],
  [
    { cols: 2, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
  ],
];