import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { rootMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/common/json-ld";
import { organizationJsonLd } from "@/lib/seo/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
