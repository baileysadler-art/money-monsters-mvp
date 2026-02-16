import type { Metadata } from "next";
import "./globals.css";
import AppShell from "../components/layout/AppShell";

export const metadata: Metadata = {
  title: "Money Monsters — Learn Money, Level Up!",
  description: "Duolingo-style financial literacy for kids aged 7-16. Daily 5-minute lessons that teach children how money actually works.",
  openGraph: {
    title: "Money Monsters — Learn Money, Level Up!",
    description: "Duolingo-style financial literacy for kids aged 7-16.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-nunito antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
