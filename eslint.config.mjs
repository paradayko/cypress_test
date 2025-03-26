import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { 
      sourceType: "module", 
      globals: globals.browser 
    },
    plugins: { js },
    extends: ["js/recommended"] 
  },

  { 
    files: ["**/*.{js,mjs,cjs}"], 
    rules: { 
      "eqeqeq": ["error", "always"],
      "no-unused-vars": ["0", { "argsIgnorePattern": "^_" }],
      "curly": "error",
      "strict": ["error", "never"]
    }
  }
]);
