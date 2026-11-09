/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "1200px" },
      mq1050: { max: "1050px" },
      mq750: { max: "750px" },
      mq450: { max: "450px" },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
