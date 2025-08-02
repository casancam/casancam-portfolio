import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../sections/home/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Casancam Website & Portfolio",
  description:
    "This is a 3D portfolio created using NextJs and ThreeJs to showcase my work experience and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SpeedInsights />
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
