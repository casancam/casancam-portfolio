import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../sections/home/Footer";

export const metadata = {
  title: "Casancam Website & Portfolio",
  description:
    "This is a 3D portfolio created using NextJs and ThreeJs to showcase my work experience and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
