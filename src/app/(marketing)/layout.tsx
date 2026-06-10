import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/** Shared shell for all marketing pages (no URL segment from the route group). */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
