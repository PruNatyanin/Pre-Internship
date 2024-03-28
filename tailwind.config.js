/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        maxWidth:{
          '9/10' : '90%'
        },
        width:{
          '1200px' : '1200px',
          '130px' : '130px',
          '200px' : '200px',
          '70px' : '70px',
          '30px' : '30px',
          '39px' : '39px'
        },
        height:{
          '30px' : '30px',
          '100px' : '100px'
        },
        border:{
          '1px' : '1px'
        },
        margin:{
          '10px' : '10px',
          '20px' : '20px'
        },
        padding:{
          '10px' : '10px',
          '5px' : '5px'
        },
        spacing:{
          '8px' : '8px',
          '10px' : '10px',
          '5px' : '5px'
        },
        color:{
          'background' : '#eee',
          'hovercolor' : '#ddd',
          'idcolor' : '#aaa',
          'white' : '#fff' ,
          'Regioncolor' : '#f9f9f9',
          'Generationcolor' : '#333'
        },
        borderRadius:{
          '5px' : '5px'
        }
    }
  },
  plugins: []
};