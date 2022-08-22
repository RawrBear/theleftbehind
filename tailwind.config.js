module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Cinzel: ["Cinzel", "serif"],
                Martel: ["Martel", "serif"]
            },
            fontSize: {
                xs: ".75rem",
                sm: ".875rem",
                tiny: ".875rem",
                base: "1.1rem",
                lg: "1.25rem", // Standard H5 Size
                xl: "1.563rem", // Standard H4 Size
                "2xl": "1.953rem", // Standard H3 Size
                "3xl": "2.441rem", // Standard H2 Size
                "4xl": "3.052rem", // Standard H1 Size
                "5xl": "3.375rem",
                "6xl": "5.063rem",
                "7xl": "7.594rem"
            },
            backgroundImage: {
                heroBG: "url('/src/components/Hero/cross.jpg')"
            }
        }
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
                    primary: "#8b49db",
                    " primary-content": "#fff",

                    secondary: "#efa00b",

                    accent: "#1FB2A6",

                    neutral: "#191D24",

                    "base-100": "#2A303C",
                    "base-content": "#ebebeb",

                    info: "#3ABFF8",

                    success: "#36D399",

                    warning: "#FBBD23",

                    error: "#D65108"
                }
            }
        ]
    }
}
