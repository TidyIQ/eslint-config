module.exports = {
  "extends": [
    "airbnb",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "jsx": true,
    "sourceType": "module",
    "useJSXTextNode": true
  },  
  "plugins": [
    "import",
    "jest", 
    "jsx-a11y", 
    "prettier",
    "react", 
    "react-hooks",
    "@typescript-eslint", 
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": ["error", {
      "allowTypedFunctionExpressions": true
    }],
    "@typescript-eslint/explicit-member-accessibility": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
