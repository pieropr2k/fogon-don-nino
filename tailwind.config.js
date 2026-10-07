export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#14100D",
        humo: "#2A211B",
        brasa: "#B8321F",
        fuego: "#E8731A",
        ascua: "#F2A03D",
        madera: "#6B4226",
        maderaclaro: "#A87444",
        crema: "#F6EBDD",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["Rokkitt", "Georgia", "serif"],
        chip: ["Oswald", "Impact", "sans-serif"],
        body: ["Nunito Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        calido: "0 8px 24px rgba(184, 50, 31, 0.18)",
      },
    },
  },
  plugins: [],
};
