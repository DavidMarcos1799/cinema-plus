import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinema Plus",
  description: "Seu catálogo de filmes favorito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-primary min-h-screen text-white">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}