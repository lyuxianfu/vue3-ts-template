module.exports = {
    tabWidth: 2,
    printWidth: 80,
    useTabs: false,
    semi: true,
    singleQuote: true,
    bracketSpacing: true,
    bracketSameLine: false,
    trailingComma: 'es5',
    endOfLine: 'lf',
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 140,
            },
        },
    ],
};
