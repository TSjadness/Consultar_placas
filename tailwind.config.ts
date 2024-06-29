import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(269.06deg, #6bdaff -54.99%, #25ba00 18.05%)",
        "custom-text-color": "linear-gradient(90deg, #6bdaff, #25ba00)",
        "custom-gray": "rgb(55 65 81 / var(--tw-text-opacity))",
      },
    },
  },
  plugins: [],
};
export default config;
