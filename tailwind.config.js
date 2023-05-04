/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "model-3": "url('assets/model-3.webp')",
        "model-s": "url('assets/model-s.webp')",
        "model-x": "url('assets/model-x.webp')",
        "model-y": "url('assets/model-y.webp')",
        "solar-panels": "url('assets/solar-panels.webp')",
        "solar-roof": "url('assets/solar-roof.webp')",
        accessories: "url('assets/accessories.webp')",
        drive: "url('assets/test-drive.webm')",
      },
    },
  },
  plugins: [],
};
