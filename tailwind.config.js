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
        themes: [
            {
                mytheme: {
                    primary: "#7851A9",

                    secondary: "#efa00b",

                    accent: "#1FB2A6",

                    neutral: "#191D24",

                    "base-100": "#2A303C",

                    info: "#3ABFF8",

                    success: "#36D399",

                    warning: "#FBBD23",

                    error: "#D65108",
                },
            },
        ],
    },
};
