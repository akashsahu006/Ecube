/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      'primary': "#1A98FF",
      'offwhite': "#E3E3E3",
      'active': "#DCEFFF",
      'inactive': "#D8D8D8",
      'liteBlack': "#575757",
      'footer': "#F4F7FA",
      'cardLine': "#ABABAB",
      'button': "#1A98FF",
      'galleryMask': "#353535",
      },
      height: {
        '68': '68px',
      },
      padding: {
        '96': '96px',
      },
      borderWidth: {
        '1': '1px', 
      },
      spacing: {
        '20px' : '20px',
        '48px' : '48px',
        '125px': '125px',
        '1248px': '1248px',
        '22': '5.5rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '66': '16.25rem',
        '100': '28rem',
        '140': '35rem',
        '150': '37.5rem',
        '150rem': '150rem',
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      backgroundImage: {
        'TeamBackground': "url(/src/assets/Person.png)",
      },
      fontSize: {
        'h1': ['3rem', {
          lineHeight: '3.5rem',
          fontWeight: '400',
          
        }],
        'h2': ['40px', {
          lineHeight: '48px',
          fontWeight: '400',
        }],
        'h3': ['30px', {
          lineHeight: '38px',
          fontWeight: '400',
        }],
        'h4': ['28px', {
          lineHeight: '36px',
          fontWeight: '400',
          fontFamily: 'inter',
        }],
        'h5': ['24px', {
          lineHeight: '32px',
          fontWeight: '400',
        }],
        'H1': ['3rem', {
          lineHeight: '3.5rem',
          fontWeight: '700',
        }],
        'H2': ['40px', {
          lineHeight: '48px',
          fontWeight: '700',
        }],
        'H3': ['30px', {
          lineHeight: '38px',
          fontWeight: '700',
        }],
        'H4': ['1.75rem', {
          lineHeight: '2.25rem',
          fontWeight: '700',
          fontFamily: 'inter',
        }],
        'H5': ['24px', {
          lineHeight: '32px',
          fontWeight: '700',
        }],
        'h5-1': ['24px', {
          lineHeight: '32px',
          fontWeight: '600',
        }],
        'H6': ['20px', {
          lineHeight: '28px',
          fontWeight: '700',
        }],
        'b1': ['20px', {
          lineHeight: '28px',
          fontWeight: '400',
        }],
        'b1-1': ['20px', {
          lineHeight: '28px',
          fontWeight: '500',
        }],
        'b2': ['18px', {
          lineHeight: '26px',
          fontWeight: '400',
        }],
        'b3': ['16px', {
          lineHeight: '24px',
          fontWeight: '400',
        }],
        'b3-1': ['16px', {
          lineHeight: '24px',
          fontWeight: '600',
        }],
        'b4': ['14px', {
          lineHeight: '20px',
          fontWeight: '400',
        }],
        'B1': ['20px', {
          lineHeight: '28px',
          fontWeight: '700',
        }],
        'B2': ['18px', {
          lineHeight: '26px',
          fontWeight: '700',
        }],
        'B3': ['16px', {
          lineHeight: '24px',
          fontWeight: '700',
        }],
        
      },
    },
  },
  plugins: [],
}
