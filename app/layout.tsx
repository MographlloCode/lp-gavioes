import type { Metadata } from "next";
import { AppLoadingGate } from "@/components/loading/AppLoadingGate";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Copyright } from "@/components/layout/Copyright";

export const metadata: Metadata = {
  title: "Gaviões da Fiel",
  description: "Gaviões da Fiel | Lealdade, Humildade e Procedimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative flex min-h-screen w-screen flex-col gap-8 overflow-x-hidden bg-black antialiased scroll-smooth"
      >
        <AppLoadingGate durationMs={3000}>
          <Header/>
          {children}
          <div className="w-full h-px bg-zinc-800 mb-10"></div>
          <Footer/>
          <Copyright />
          <ScrollToTopButton />
        </AppLoadingGate>
      </body>
    </html>
  );
}
