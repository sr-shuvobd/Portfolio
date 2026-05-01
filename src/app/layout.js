import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MD Shohanur Rahman | MERN Stack Developer",
  description: "Portfolio of MD Shohanur Rahman, a passionate MERN Stack Developer building modern, responsive, and scalable web applications.",
  keywords: ["MERN Stack", "Developer", "Portfolio", "MD Shohanur Rahman", "React", "Next.js", "Node.js"],
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-white antialiased`}>
        <Toaster position="bottom-right" toastOptions={{ 
          style: { 
            background: '#1e293b', 
            color: '#fff',
            border: '1px solid rgba(6,182,212,0.3)',
          } 
        }} />
        {children}
      </body>
    </html>
  );
}
