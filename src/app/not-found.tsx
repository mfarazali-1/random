import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center py-24">
      <Container className="text-center">
        <Logo className="text-2xl" />
        <p className="text-gold-500 mt-8 font-serif text-6xl">404</p>
        <h1 className="text-ink-900 mt-4 text-2xl">Page not found</h1>
        <p className="text-ink-500 mx-auto mt-3 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </main>
  );
}
