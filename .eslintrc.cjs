module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', 'node_modules/', 'build/'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect', // Автоматически определяет версию React
        },
    },
    plugins: ['react', '@typescript-eslint', 'react-refresh', 'storybook'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error', // Включение проверки хуков
        'react-hooks/exhaustive-deps': 'warn', // Проверка зависимости в хуках
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'react-refresh/only-export-components': 'off',
        'prettier/prettier': 'error', // Обеспечение согласованности с Prettier
        'react/display-name': 'off',
        'react/prop-types': 'off',
    },
};
