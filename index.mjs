/* eslint-disable check-file/no-index */
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import checkFile from "eslint-plugin-check-file";
import formatjs from "eslint-plugin-formatjs";
import functional from "eslint-plugin-functional";
import importPlugin from "eslint-plugin-import";
import jest from "eslint-plugin-jest";
import jsdoc from "eslint-plugin-jsdoc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export const config = [
  ...tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    eslintPluginPrettierRecommended,
    react.configs.flat.all,
    eslintConfigPrettier,
    jest.configs["flat/recommended"],
    jsdoc.configs["flat/recommended"],
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      ...jest.configs["flat/recommended"],
    },
    {
      extends: [
        functional.configs.externalTypeScriptRecommended,
        functional.configs.recommended,
        functional.configs.stylistic,
      ],
      plugins: {
        formatjs,
        react,
        "check-file": checkFile,
        "simple-import-sort": simpleImportSort,
        jest,
        jsdoc,
      },
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          projectService: true,
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: {
          ...globals.browser,
        },
      },
      "settings": {
        "propWrapperFunctions": ["forbidExtraProps"],
        "react": {
          "version": "detect",
        },
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"],
          },
        },
      },
      rules: {
        // ------------------------------------------------
        // typescript
        // ------------------------------------------------
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        // ------------------------------------------------
        // ------------------------------------------------
        // ------------------------------------------------

        "line-comment-position": "off",
        "no-inline-comments": "off",

        // ------------------------------------------------
        // react-intl
        // ------------------------------------------------
        "formatjs/no-offset": "error",
        "formatjs/enforce-default-message": "error",
        "formatjs/enforce-description": "off",
        "formatjs/enforce-placeholders": "error",
        "formatjs/no-multiple-whitespaces": "error",
        "formatjs/enforce-id": [
          "error",
          {
            "idInterpolationPattern": "[sha512:contenthash:base64:6]",
          },
        ],
        "formatjs/no-emoji": "off",
        "formatjs/no-literal-string-in-jsx": "error",
        "formatjs/no-multiple-plurals": "error",
        "formatjs/no-complex-selectors": [
          "error",
          {
            "limit": 3,
          },
        ],
        // ------------------------------------------------
        // ------------------------------------------------
        // ------------------------------------------------

        // ------------------------------------------------
        // functional
        // ------------------------------------------------
        "functional/functional-parameters": [
          "error",
          {
            allowRestParameter: true,
            enforceParameterCount: false,
          },
        ],
        "functional/no-promise-reject": "error",
        "functional/no-throw-statements": "off",
        "functional/no-try-statements": "off",
        "functional/immutable-data": [
          "error",
          {
            ignoreIdentifierPattern: ["^module.exports$"],
            ignoreAccessorPattern: ["^module.exports$"],
          },
        ],
        "functional/no-expression-statements": "off",
        "functional/prefer-immutable-types": ["off"],
        "functional/prefer-readonly-type": "error",
        "functional/type-declaration-immutability": "off",
        "functional/no-mixed-types": "off",
        "functional/no-return-void": "off",
        "functional/prefer-property-signatures": "error",
        "functional/prefer-tacit": "off",
        "functional/readonly-type": ["error", "keyword"],
        // ------------------------------------------------
        // ------------------------------------------------
        // ------------------------------------------------

        // ------------------------------------------------
        // check-file
        // ------------------------------------------------
        "check-file/no-index": "error",
        // ------------------------------------------------
        // ------------------------------------------------
        // ------------------------------------------------

        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "import/no-default-export": "error",
        "import/no-unresolved": "off",
        "prettier/prettier": "error",
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "arrow-body-style": ["error", "as-needed"],
        "block-scoped-var": "error",
        "callback-return": "error",
        "camelcase": "off",
        "capitalized-comments": [
          "error",
          "never",
          { "ignorePattern": "TODO", "ignoreConsecutiveComments": true },
        ],
        "class-methods-use-this": "off",
        "curly": "error",
        "complexity": "off",
        "consistent-return": "error",
        "consistent-this": "error",
        "default-case": "off",
        "dot-notation": "off",
        "eqeqeq": "error",
        "for-direction": "error",
        "func-name-matching": "error",
        "func-names": "error",
        "func-style": "off",
        "getter-return": "error",
        "global-require": "off",
        "guard-for-in": "error",
        "handle-callback-err": "off",
        "id-blacklist": "error",
        "id-length": [
          "error",
          {
            "exceptions": [
              "_",
              "__",
              "___",
              "____",
              "_____",
              "a",
              "b",
              "x",
              "y",
              "z",
            ],
          },
        ],
        "id-match": "error",
        "init-declarations": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-hooks": "off",
        "jest/no-identical-title": "error",
        "jest/no-test-prefixes": "error",
        "jest/no-test-callback": "off",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-expect-assertions": "off",
        "jest/valid-expect": "error",
        "jest/valid-expect-in-promise": "error",
        "linebreak-style": ["error", "unix"],
        "lines-around-directive": "error",
        "max-depth": "warn",
        "max-lines": "off",
        "max-nested-callbacks": "error",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "error",
        "new-cap": "off",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "no-alert": "off",
        "no-array-constructor": "error",
        "no-await-in-loop": "off",
        "no-bitwise": "off",
        "no-buffer-constructor": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-console": ["error", { allow: ["warn", "error", "debug"] }],
        "no-continue": "error",
        "no-div-regex": "error",
        "no-duplicate-imports": "off",
        "no-else-return": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-mixed-requires": "error",
        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-native-reassign": "error",
        "no-negated-condition": "off",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "off",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-path-concat": "error",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-sync": "off",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-use-before-define": "off",
        "no-useless-call": "error",
        "no-useless-catch": "off",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "off",
        "no-useless-rename": "error",
        "no-useless-return": "off",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-with": "error",
        "object-shorthand": "error",
        "one-var": "off",
        "operator-assignment": "error",
        "padding-line-between-statements": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "radix": "off",
        "react/react-in-jsx-scope": "off",
        "react/display-name": "off",
        "react/forbid-component-props": "off",
        "react/forbid-foreign-prop-types": "off",
        "react/jsx-boolean-value": "off",
        "react/jsx-curly-newline": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-max-depth": "off",
        "react/require-default-props": "off",
        "react/jsx-wrap-multilines": "off",
        "react/jsx-no-constructed-context-values": "off",
        "react/no-unstable-nested-components": "off",
        "react/jsx-max-props-per-line": [
          "error",
          {
            "when": "multiline",
          },
        ],
        "react/jsx-no-bind": [
          "error",
          {
            "ignoreRefs": false,
            "allowArrowFunctions": true,
            "allowFunctions": false,
            "allowBind": false,
          },
        ],
        "react/function-component-definition": [
          "error",
          {
            "namedComponents": "arrow-function",
            "unnamedComponents": "arrow-function",
          },
        ],
        "react/jsx-no-literals": "off",
        "react/jsx-no-useless-fragment": [
          "error",
          {
            allowExpressions: true,
          },
        ],
        "react/jsx-props-no-spreading": "off",
        "react/no-access-state-in-setstate": "off",
        "react/no-children-prop": "error",
        "react/no-set-state": "off",
        "react/no-typos": "off",
        "react/no-multi-comp": "off",
        "react/no-unescaped-entities": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-closing-bracket-location": "off",
        "react/jsx-closing-tag-location": "off",
        "react/jsx-tag-spacing": [
          "error",
          {
            "closingSlash": "never",
            "beforeSelfClosing": "always",
            "afterOpening": "never",
          },
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/require-optimization": "off",
        "react/sort-comp": [
          1,
          {
            "order": [
              "type-annotations",
              "static-methods",
              "lifecycle",
              "everything-else",
              "render",
            ],
          },
        ],
        "react/jsx-handler-names": "off",
        "react/style-prop-object": "off",
        "require-await": "off",
        "require-jsdoc": "off",
        "sort-imports": "off",
        "import/order": "off",
        "sort-keys": "off",
        "sort-vars": "error",
        "spaced-comment": ["error", "always"],
        "strict": "error",
        "symbol-description": "error",
        "jsdoc/valid-types": "error",
        "vars-on-top": "error",
        "yoda": ["error", "never"],
      },
    },
    {
      files: [
        "eslint.config.mjs",
        "prettier.config.mjs",
        "eslint.config.js",
        "prettier.config.js",
        "webpack.config.ts",
        "webpack.config.js",
        "jest.config.ts",
        "jest.config.js",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      "files": ["**/*.stories.ts", "**/*.stories.tsx"],
      "rules": {
        "no-console": "off",
        "formatjs/no-literal-string-in-jsx": "off",
        "functional/immutable-data": "off",
        "import/no-default-export": "off",
        "react/prop-types": "off",
        "react/destructuring-assignment": "off",
      },
    },
    {
      "files": ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts"],
      "rules": {
        "formatjs/no-literal-string-in-jsx": "off",
        "functional/immutable-data": "off",
      },
    },
  ),
];
