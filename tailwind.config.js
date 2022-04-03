module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        "./public/index.html",
        "./src/**/*.{html,js}"
    ],
    purge: [
        "./public/index.html",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
