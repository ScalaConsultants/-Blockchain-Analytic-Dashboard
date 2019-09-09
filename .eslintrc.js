module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:react/recommended", // Mark jsx as using something from imports
    "prettier",
    "prettier/react",
    "airbnb",
    "airbnb/hooks",
  ],
  "plugins": ["prettier"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    "no-console": 2,
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "prettier/prettier": "error",
    "comma-dangle": ["error", "never"],
    "react-hooks/exhaustive-deps": 0, // temporary
    "react/jsx-curly-spacing": ["error", {
      "attributes": { "when": "never" },
      "children": { "when": "never" },
      "allowMultiline": true
    }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "quotes": ["error", "single"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-unresolved": [ 0, { caseSensitive: false } ],
    "no-plusplus": "off",
    "no-param-reassign": "off", // temporary
    "react/no-array-index-key": 1, //temporary
    "arrow-parens": "off",
    "object-curly-spacing": ["error", "never"],
    "@typescript-eslint/no-explicit-any": "off", //temporary off

    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment":"off"
  },
  env: {
    "browser": true,
    "node": true,
    "jest": true
  }
};
