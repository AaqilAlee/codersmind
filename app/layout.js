

import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/Components/AppLayouts/topbar/Header";
import Footer from "@/Components/AppLayouts/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodersMind23",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}