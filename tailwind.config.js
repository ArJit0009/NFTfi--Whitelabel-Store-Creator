module.exports = {
  purge: {
    // enabled: true,
    content: [],
    css: ["./src/assets/styles/custom.css"],
    options: {
      safelist: [],
      safelistPatterns: [],
      keyframes: true,
      fontFace: true,
    },
    extract: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  important: true,
  theme: {
    screens: {
      // specifying screens is mandatory in every tailwind.config file
      xs: "480px", //min-width 480px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        25: "#EAF0F7",
        50: "#F7F7F7",
        75: "#F7FAFE",
        100: "#FFFFFF",
      },
      yellowwhite: {
        25: "#0000000F",
        50: "#E0E0E0",
        75: "#D0D0D0",
        100: "#959595",
      },
      black: {
        50: "#212F3D",
        100: "#0E1D2C",
      },
      blue: {
        100: "#016DD9",
      },
      sky: {
        100: "#016DD9",
      },
      grey: {
        25: "#9398A2",
        50: "#585858",
        75: "#333333",
      },
      darkGrey: {
        50: "#789CBF",
        100: "#5C758E",
      },
    },

    fontSize: {
      // `[fontSize, { letterSpacing, lineHeight }]`

      ft1: [
        "12px",
        {
          //Poppins Regular
          letterSpacing: "0em",
          lineHeight: "18px",
        },
      ],
      ft2: [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "21px",
        },
      ],
      ft3: [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "19px",
        },
      ],
      ft4: [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "25px",
        },
      ],
      ft5: [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "24px",
        },
      ],
      ft6: [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "27px",
        },
      ],
      ft7: [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "26px",
        },
      ],
      ft8: [
        "22px",
        {
          letterSpacing: "0em",
          lineHeight: "33px",
        },
      ],
      ft9: [
        "29px",
        {
          //H3
          letterSpacing: "0em",
          lineHeight: "33px",
        },
      ],
    },

    fontFamily: {
      PoppinsBold: ["Poppins-Bold", "sans-serif"],
      PoppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
      PoppinsRegular: ["Poppins-Regular", "sans-serif"],
      PoppinsMedium: ["Poppins-Medium", "sans-serif"],
    },

    boxShadow: {
      // none: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
      xs: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
      xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
      DEFAULT:
        "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
      "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 3px 0 rgba(0, 0, 0, 0.5)",
      lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
      md: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
      outline: "0px 0px 0px 3px rgba(0, 0, 0, 0.5)",
    },

    backgroundImage: (theme) => ({
      dummy: "url('')", //tailwind class => bg-dummy
    }),

    extend: {
      //theme options are to be extended with custom variants and not overridden (1 unit = 4px)
      spacing: {
        //common for width, height, padding, margin
        4.5: "18px", //p-4.5 , m-4.5 , w-4.5, h-4.5
        7.75: "31px",
        9.5: "38px",
        11.5: "46px", //divide the required value by 4 to get the key name (46/4 = 11.5)
        13: "52px",
        15: "60px",
        18.5: "74px",
        19.25: "77px",
        20.5: "82px",
        21.25: "85px",
        25.5: "98px",
        29: "116px",
        35: "140px",
        36.5: "146px",
        45: "180px",
        57.5: "230px",
        61: "244px",
        65: "260px",
      },
      borderWidth: {},
      borderRadius: {
        //same as border width
        "5-5xl": "34px",
      },
    },
  },

  variants: {
    //there are few css properties which don't support features/events like responsive, hover etc. by default, so to make them supportive for those css properties, we write them down as below
    width: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"],
    transform: ["responsive", "hover", "focus", "group-hover"],
    scale: ["responsive", "hover", "focus", "group-hover"],
    extend: {
      animation: ["hover", "focus", "group-hover"],
      grayscale: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
  darkMode: "class",
};
