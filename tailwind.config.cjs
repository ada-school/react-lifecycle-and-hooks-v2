/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mBlue: {
          100: "#23d5e2",
        },
        mGrey: {
          100: "#edf2f7",
          200: "#CBD5E0",
          300: "#75818c",
        },
        mYellow: {
          100: "#de9108",
        },
        mPurple: {
          100: "#641bf5",
        },
        mDark: {
          100: "#2D3748",
          200: "#1A202C",
          300: "#171923",
        },
      },
    },
  },
  plugins: [],
}
