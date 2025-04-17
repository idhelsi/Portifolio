import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Douglas Peltier",
//   description: "Portifólio de Douglas",
//   icons: {
//     icon: '/ico.png',
//   },
//   openGraph: {
//     images: "/images/landm.png"
//   }
// };

// Metadata padrão para o site
export const metadata: Metadata = {
  title: "Douglas Peltier",
  description: "Portifólio de Douglas",
  icons: {
    icon: "/imagens/favico.png",
  },
  openGraph: {
    title: "Douglas Peltier",
    description: "Portifólio de Douglas",
    url: "https://douglas.eco.br", 
    siteName: "Douglas Peltier",
    images: [
      {
        url: "/imagens/land.jpg", // Substitua com a URL da sua imagem
        width: 1200,
        height: 630,
        alt: "Imagem de compartilhamento do portfólio de Douglas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Peltier",
    description: "Portifólio de Douglas",
    images: ["https://douglas.eco.br/imagens/land.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
