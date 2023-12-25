/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        VeryPaleBlue: "hsl(225, 100%, 98%)",
        DesaturatedBlue: "hsl(224, 23%, 55%)",
        DarkBlue: "hsl(223, 47%, 23%)",
        PaleBlue: "hsl(225, 100%, 94%)",
        BrightBlue: "hsl(245, 75%, 52%)"
      },
      backgroundImage: {
        'mobile-pattern': "url('./images/pattern-background-mobile.svg')",
        'desktop-pattern': "url('./images/pattern-background-desktop.svg')",
      },
      fontFamily:{
        'RedHat': "'Red Hat Display', 'sans-serif'"
      },
      boxShadow:{
        "3bx":"15px 35px 80px -15px hsl(245, 75%, 52%)"
      }
    },
  },
  plugins: [],
}

