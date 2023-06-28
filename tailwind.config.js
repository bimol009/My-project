/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        // "banner-bg":"url('https://i.ibb.co/vdq9cyx/pexels-daniel-kux-932320.jpg')"
        // "banner-bg":"url('https://i.ibb.co/P9WCnfx/pexels-irina-iriser-1086585.jpg')"
        // "banner-bg":"url('https://i.ibb.co/vdq9cyx/pexels-daniel-kux-932320.jpg')"
        // "banner-bg": "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/vdq9cyx/pexels-daniel-kux-932320.jpg')"
        "banner-bg": "linear-gradient(to bottom, #0000ff, #0000aa), url('https://i.ibb.co/vdq9cyx/pexels-daniel-kux-932320.jpg')"


        // "banner-bg":"url('https://i.ibb.co/bgPLy6Z/pexels-lumn-311039.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

