import { ITheme, IThemeValues } from "../interfaces/ITheme";
import { colors } from "./colors";

const light: IThemeValues = {
  background: colors.white,
  backgroundSecondary: colors.softWhite,
  color: colors.darkTwo,
  borderColor: colors.softGray,
  name: "light",
  colors: colors,
};

const dark: IThemeValues = {
  background: colors.darkTwo,
  backgroundSecondary: colors.darkThree,
  color: colors.white,
  borderColor: colors.darkOne,
  name: "dark",
  colors: colors,
};

export const theme: ITheme = {
  light: {
    ...light,
    contrast: dark,
  },
  dark: {
    ...dark,
    contrast: light,
  },
};
