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
    "@typescript-eslint", 
  ],
  "rules": {
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
