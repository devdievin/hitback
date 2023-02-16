export const headerSize = {
  height: "4rem",
};

export const footerSize = {
  height: "2.5rem",
};

const size = {
  //   mobileS: "320px",
  //   mobileM: "375px",
  //   mobileL: "425px",
  mobile: "600px",
  tablet: "999px",
  laptop: "1000px",
  desktop: "1400px",
};

export const device = {
  //   mobileS: `(min-width: ${size.mobileS})`,
  //   mobileM: `(min-width: ${size.mobileM})`,
  //   mobileL: `(min-width: ${size.mobileL})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
