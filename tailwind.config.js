module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Cinzel: ["Cinzel", "serif"],
                Martel: ["Martel", "serif"],
            },
        },
    },
    plugins: [require("daisyui")],
};
