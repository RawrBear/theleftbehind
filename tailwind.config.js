module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Cinzel: ["Cinzel", "serif"],
                Martel: ["Martel", "serif"],
            },
            backgroundImage: {
                heroBG: "url('/src/components/Hero/cross.jpg')",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
    },
};
