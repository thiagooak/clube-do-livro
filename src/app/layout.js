import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clube do Livro do Hub Sorocaba",
  description: "Nosso livreto digital para acompanhar o clube do livro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="mx-auto max-w-7xl min-h-screen px-4 sm:px-6 lg:px-8 mb-4">
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
