import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "NextBites · Quick recipes you'll actually cook",
  description: "A tiny recipe app built with Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
