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
    "@typescript-eslint/explicit-function-return-type": "off",
    "arrow-parens": "off",
    "comma-dangle": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/no-unresolved": [ 0, { caseSensitive: false } ],
    "no-console": 2,
    "no-plusplus": "off",
    "object-curly-spacing": ["error", "never"],
    "prettier/prettier": "error",
    "quotes": ["error", "single"],
    "react/jsx-curly-spacing": ["error", {
      "attributes": { "when": "never" },
      "children": { "when": "never" },
      "allowMultiline": true
    }],
    "react/destructuring-assignment":"off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-props-no-spreading": "off"
  },
  env: {
    "browser": true,
    "jest": true,
    "node": true
  }
};
