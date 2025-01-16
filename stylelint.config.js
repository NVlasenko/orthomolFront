module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier"
  ],
  rules: {
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "block-no-empty": true,
    "unit-no-unknown": true,
    "max-nesting-depth": [3, { "ignoreAtRules": ["media"] }],
    "indentation": 2
  }
};
