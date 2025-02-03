// import { Inter } from 'next/font/google'
import './globals.css'
import Script from "next/script";
import Footer from "@/components/allSections/footer/Footer";
import Providers from "@/store/providers";
import UpdatedNavbar from "@/components/navbar/updatedNavbar/UpdatedNavbar";
import { NextUIProvider } from "@nextui-org/react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeckostyle ",
  description:
    "We are promised to offer your desire products with very reasonable price and authentic quality. We never compromise with quality. pls make us your fashion partner. we are sourcing products from renowned Stores from all over the world. Happy Shipping.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.tailwindcss.com" />
      </head>
      <body>
        <NextUIProvider>
          <Providers>
            <UpdatedNavbar />
            {/* <MainNavbar /> */}
            {children}
            <Footer />
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
