import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
      <Header/>
        <div className="min-h-screen">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
