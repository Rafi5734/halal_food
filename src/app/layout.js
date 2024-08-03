// import { Inter } from 'next/font/google'
import './globals.css'
import Script from "next/script";
import MainNavbar from "@/components/navbar/MainNavbar";
import Footer from "@/components/allSections/footer/Footer";
import Providers from "@/store/providers";
import UpdatedNavbar from "@/components/navbar/updatedNavbar/UpdatedNavbar";
import { NextUIProvider } from "@nextui-org/react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "City Shop BD",
  description: "This is multi-product E-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.tailwindcss.com" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css"
          rel="stylesheet"
        />
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
      <Script src="../path/to/flowbite/dist/flowbite.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js" />
    </html>
  );
}
