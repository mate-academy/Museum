module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "selector-max-id": null,
    "number-max-precision": 3,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null
  }
};
