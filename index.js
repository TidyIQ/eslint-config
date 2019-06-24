module.exports = {    
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/react",
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
    "@typescript-eslint", 
    "import",
    "jest", 
    "jsx-ally",
    "react",
    "prettier"
  ],
  "rules": {
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
