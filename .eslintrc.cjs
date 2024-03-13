module.exports = {
    // Устанавливаем параметр root в true, чтобы ESLint не выдавал предупреждение о том, что текущий каталог не является корневым для конфигурации
    root: true,

    // Устанавливаем параметр env с объектом, где указываем что используем браузер и ES2020
    env: { browser: true, es2020: true },

    // Устанавливаем параметр extends с массивом строк, которые представляют собой идентификаторы (или пути) к конфигурациям, которые нам хотим использовать
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
    ],

    // Устанавливаем параметр ignorePatterns с массивом строк, которые представляют собой шаблоны файловых путей, которые мы хотим игнорировать при проверке кода
    ignorePatterns: ['dist', '.eslintrc.cjs'],

    // Устанавливаем параметр parser со строкой, которая указывает на модуль парсера, который будет использоваться для анализа кода
    parser: '@typescript-eslint/parser',

    // Устанавливаем параметр plugins с массивом строк, которые представляют собой идентификаторы плагинов ESLint, которые мы хотим использовать
    plugins: ['react-refresh'],

    // Устанавливаем параметр rules с объектом, где указываем настройки правил
    rules: {
        // Устанавливаем правило 'react-refresh/only-export-components' с массивом значений, где указываем уровень предупреждения и объект с настройками правила
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    ignorePatterns: ['node_modules/', 'build/', 'dist/'],
};
