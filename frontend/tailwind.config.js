module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}", 
    ],
    theme: {
      extend: {
        colors: {
          textPrimary: '#1F8141', 
          textSecondary: '#00561E', 
          gradientColor: '#43B143', 
        },
        fontFamily: {
          title: ['Syne', 'sans-serif'],   
        },
        fontWeight: {
          bodyWeight: '400', 
          h2Weight: '600',
        },
        fontSize: {
          body: '18px', 
          heading2: '48px',
        }, 
        
        animation: {
          spinBlob: "spinBlob 8s linear infinite",
        },
        keyframes: {
          spinBlob: {
            "0%": { transform: "rotate(0deg) scale(2)" },
            "100%": { transform: "rotate(360deg) scale(2)" },
          },
        },
      },
    },
    plugins: [],
  }