export interface IThemeValues {
  background: string;
  backgroundSecondary: string;
  color: string;
  borderColor: string;
  name: string;
  colors: any;
}

export interface ISelectedTheme extends IThemeValues {
  contrast: IThemeValues;
}

export interface ITheme {
  light: ISelectedTheme;
  dark: ISelectedTheme;
}
