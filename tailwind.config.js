const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: 'jit',
    purge: {
        content: ["./*.html"],
    },
    darkMode: false,
    theme: {

        extend: {

        }
    },
    variants: {
        extend: {}
    },
    plugins: [require("@tailwindcss/typography"), require(
            "@tailwindcss/forms"), require(
        "@tailwindcss/aspect-ratio"), ]
};
