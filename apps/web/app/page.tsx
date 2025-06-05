import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-neue-haas">
      <Container>
        <div className="flex w-full flex-col items-start gap-8">
          <h1 className="text-display-100 max-w-[9ch] sm:max-w-[14ch]" data-animation='fadeInUp'>
            Get on the right path to&nbsp;PMF and&nbsp;further
          </h1>
          <h2 className="text-headline-200 max-w-[24ch]" data-animation='fadeInUp'>
            RedWolf Labs is a strategic design partner for early-stage startups
          </h2>
          <Button asChild variant={"accent"} data-animation='fadeInUp'>
            <Link href={"/"}>Get in Touch</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
