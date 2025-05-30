import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

import Drawer from "./components/Drawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Time Loops API",
  description: 'Discover Time Loops API – a powerful API designed for developers who demand real data. Get started with seamless integration and lots of features!'
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider 
          attribute="data-theme"
          defaultTheme="garden"
          themes={['garden', 'dracula']}
          storageKey="time-loops-api-theme"
        >
          <Drawer>
            {children}
            <Analytics />
          </Drawer>
        </ThemeProvider>
      </body>
    </html>
  );
};
