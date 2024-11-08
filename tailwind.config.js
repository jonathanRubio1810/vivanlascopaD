/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins": ['Poppins']
      },
      colors: {
        "dark-charcoal" : "hsl(195, 22%, 4%)",
        "blue-primary" : "hsl(212, 94%, 21%)",
        "sky-blue": "hsl(223, 100%, 70%)",
        "medium-turquoise": "hsl(155, 78%, 64%)",
        "gray-body": "hsl(228, 15%, 94%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "vary-light-gray": "hsl(0, 0%, 98%)"
      },
      boxShadow: {
        'custom': '0 4px 10px -1px hsl(155, 78%, 64%), 0 2px 4px -1px rgba(255, 0, 0, 0.1)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
   
  ]
};
