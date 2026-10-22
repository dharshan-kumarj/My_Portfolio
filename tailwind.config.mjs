/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

// Iron-Aura design tokens — sampled from "Iron-Aura Boot Sequence".
export default {
    content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
    theme: {
        extend: {
            colors: {
                void: {
                    DEFAULT: "#0a0a0c", // page background
                    deep: "#050505", // boot screen / input wells
                    panel: "#111114", // cards
                    raised: "#16161a", // card hover / headers
                },
                line: {
                    DEFAULT: "#22232a", // hairline borders
                    strong: "#2e3038",
                },
                ink: {
                    DEFAULT: "#f2f2f2", // primary text
                    muted: "#8c8f96", // body copy
                    dim: "#5d6068", // meta labels
                },
                reactor: {
                    DEFAULT: "#b3121a", // primary action red
                    hot: "#d11a23",
                    deep: "#5a0a0e",
                    core: "#fdf1c9", // arc-reactor core
                },
                gold: {
                    DEFAULT: "#e5b04f",
                    soft: "#cca984",
                    dim: "#7a5f2c",
                },
                arc: {
                    DEFAULT: "#5ee2ff", // HUD cyan
                    soft: "#6cd8ed",
                    dim: "#3a7584",
                    deep: "#12323a",
                },
            },
            fontFamily: {
                display: ['"Orbitron"', ...defaultTheme.fontFamily.sans],
                hud: ['"Rajdhani"', ...defaultTheme.fontFamily.sans],
                body: ['"Inter"', ...defaultTheme.fontFamily.sans],
                sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
            },
            letterSpacing: {
                hud: "0.18em",
                wide2: "0.08em",
            },
            maxWidth: {
                shell: "75rem",
            },
            boxShadow: {
                reactor: "0 0 40px 4px rgb(179 18 26 / 0.45)",
                arc: "0 0 18px rgb(94 226 255 / 0.35)",
                gold: "0 0 18px rgb(229 176 79 / 0.25)",
            },
            backgroundImage: {
                "panel-sheen":
                    "linear-gradient(160deg, rgb(255 255 255 / 0.035), transparent 45%)",
                "grid-arc":
                    "linear-gradient(rgb(94 226 255 / 0.07) 1px, transparent 1px), linear-gradient(90deg, rgb(94 226 255 / 0.07) 1px, transparent 1px)",
                "reactor-glow":
                    "radial-gradient(circle, #fdf1c9 0%, #e5b04f 14%, #b3121a 38%, rgb(90 10 14 / 0.6) 58%, transparent 72%)",
            },
            backgroundSize: {
                grid: "22px 22px",
            },
            keyframes: {
                blink: { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
                spin: { to: { transform: "rotate(360deg)" } },
                pulse: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.35" },
                },
            },
            animation: {
                blink: "blink 1s steps(1) infinite",
                "spin-slow": "spin 40s linear infinite",
                "spin-slower": "spin 70s linear infinite reverse",
                "pulse-dot": "pulse 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
