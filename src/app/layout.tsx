import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/navigation/header";
import Footer from "@/navigation/footer";

const jakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})
export const metadata: Metadata = {
  title: "Crest Core",
  description: "Consulting and Accounting Firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
