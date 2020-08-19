module.exports = {
    presets: [
        ["@babel/preset-typescript", {
            "isTSX": true,
            "allExtensions": true
        }], '@babel/preset-react', '@babel/preset-env'],
    plugins: [
        ['@babel/plugin-transform-typescript', { allowNamespaces: true }],
        // ... other
    ]
}
