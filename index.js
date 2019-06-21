module.exports = {    
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint"
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
