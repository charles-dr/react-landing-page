/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pink-envited": "#E87BF8",
        "purple-1": "#CCB6FF",
        "purple-2": "#EDE5FF",
        "purple-3": "#F6F2FF",
        "purple-dark": "#240D57",
        "purple-light": "#501FC1",
        "purple-envited": "#8456EC",
        "red-secondary-1": "#FFD7E0",
        "red-secondary-2": "#E61445",
        "green-secondary-1": "#D3FFE2",
        "green-secondary-1": "#00805E",
        "gray-1": "#4F4F4F",
        "gray-2": "#828282",
        "gray-3": "#BDBDBD",
        "gray-4": "#E0E0E0",
        "gray-5": "#F2F2F2",
        "gray-6": "#FBFAFF",
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
      },
    },
  },
  plugins: [],
}
