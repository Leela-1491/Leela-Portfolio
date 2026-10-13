import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leelakumar Kakinada | Software Development Engineer",
  description:
    "Software Development Engineer with 2.5 years of experience in React, Next.js, TypeScript, Node.js, Python, and scalable backend/search architectures.",
  keywords: [
    "Leelakumar Kakinada",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Elasticsearch",
  ],
  authors: [{ name: "Leelakumar Kakinada" }],
  openGraph: {
    title: "Leelakumar Kakinada | Software Development Engineer",
    description:
      "Software Development Engineer with 2.5 years of experience building high-performance web, mobile, and backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
