import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Script from "next/script";
import FooterPage from "@/components/shared/footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "SunCart - Summer Essentials Store",
  description: " Summer Essentials Store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      style={{ colorScheme: "light" }}
      className={`${poppins.className} h-full antialiased`}
    >
      <head>
        <Script
          id="force-light-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function () {
              function forceLightTheme() {
                if (document.documentElement.getAttribute('data-theme') !== 'light') {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
                document.documentElement.style.colorScheme = 'light';
              }
              forceLightTheme();
              new MutationObserver(forceLightTheme).observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['data-theme']
              });
            })();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <ToastContainer />
        <FooterPage></FooterPage>
      </body>
    </html>
  );
}
