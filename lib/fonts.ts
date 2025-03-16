import localFont from "next/font/local";

const onest = localFont({
  src: [
    {
      path: "../public/fonts/Onest-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Onest-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Onest-Light.ttf",
      weight: "300",
      style: "normal",
    },

    {
      path: "../public/fonts/Onest-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Onest-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Onest-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Onest-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Onest-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Onest-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-onest", // Custom CSS variable
});

const outfit = localFont({
  src: [
    {
      path: "../public/fonts/Outfit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    },

    {
      path: "../public/fonts/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
});

// Export for usage in your app
export { onest, outfit };
