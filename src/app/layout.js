// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalProvider } from "./context/GlobalContext";
import { AuthProvider } from "./context/AuthContext";
import PrivateRender from "./PrivateRender";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Build custom pages with metric-monk",
  description: "Build custom pages with metric-monk",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <GlobalProvider>
          <AuthProvider>
            <PrivateRender>
              {children}
            </PrivateRender>
          </AuthProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
