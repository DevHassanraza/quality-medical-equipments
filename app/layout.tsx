import type { Metadata } from "next";
import "./globals.css";

import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/layout/AOSProvider";

export const metadata: Metadata = {
  title: "Quality Medical Supplier",
  description:
    "Quality Medical Supplier provides reliable medical equipment and healthcare solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSProvider />

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}