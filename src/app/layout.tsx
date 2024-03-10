import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import MobileNav from "@/components/navigation/mobile-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Abderraouf Filali",
  description:
    "Abderraouf Filali is a software engineer and a full-stack web developer. He is passionate about building web applications and solving problems using technology. He is also a tech enthusiast and a lifelong learner.",
  icons: [
    {
      url: "/favicon.svg",
      href: "/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth selection:bg-primary selection:text-white"
    >
      <body
        className={cn(
          "relative text-muted-foreground overflow-x-hidden",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MobileNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
