import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "AI Automation Specialist | Portfolio",
  description:
    "AI automation portfolio showcasing smart workflows, tooling, and measurable results.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "AI Automation Specialist | Portfolio",
    description:
      "Automation projects, tooling stack, and ways to connect for discovery calls.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Specialist | Portfolio",
    description:
      "Automation projects, tooling stack, and ways to connect for discovery calls.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} dark`}
    >
      <body>{children}</body>
    </html>
  );
}
