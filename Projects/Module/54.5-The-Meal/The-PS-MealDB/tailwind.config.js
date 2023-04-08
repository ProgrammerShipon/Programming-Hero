/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
    theme: {
      extend: {
        colors: {
          secondaryCl: '#222558', 
          primaryCl: '#6063ee'
        },
        backgroundColor: {
          bgP: '#222558',
          bgS: '#6063ee',
        }
      }
    },
	},
  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {	
    themes: false,
  },
};
