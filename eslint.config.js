import js from '@eslint/js'
import globals from 'globals'

export default [
    { ignores: ["dist/", "node_modules/"] },
    js.configs.recommended,
    {
        files: ["src/**/*.js", "webpack.config.js", "eslint.config.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                // injected by the RecordM browser environment
                cob: "readonly",
            },
        },
    },
    {
        files: ["tests/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
    },
]
