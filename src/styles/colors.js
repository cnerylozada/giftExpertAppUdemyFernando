const palette = {
  redLight: "red-500",
  redDark: "red-700",
  greenLight: "green-500",
  greenDark: "green-700",
  blueLight: "blue-500",
  blueDark: "blue-700",
  black: "gray-700",
  white: "white",
};

const getTextColor = (color) => `text-${palette[color]}`;
const getBackgroundColor = (color) => `bg-${palette[color]}`;

module.exports = {
  palette,
  getTextColor,
  getBackgroundColor,
};
