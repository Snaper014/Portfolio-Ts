import type { Metadata } from 'next'
import { Ubuntu } from "next/font/google";
import './globals.css'


export const metadata: Metadata = {
  title: "Portfolio VICO Nelson",
  description: "Portfolio Vico Nelson",
};

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
