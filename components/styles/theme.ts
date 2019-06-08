export type AppTheme = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gray: string;
    white: string;
  };
  shadows: {
    soft: string;
  };
};

export type AppThemeColor = keyof AppTheme["colors"];

export const theme: AppTheme = {
  colors: {
    primary: "#DAF2FC",
    secondary: "#009CDE",
    accent: "#104C97",
    gray: "#E8E8E8",
    white: "#fff"
  },
  shadows: {
    soft: "0px 3px 6px rgba(0, 0, 0, 0.15)"
  }
};
