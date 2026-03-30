import { Container } from "@/components/Container";
import { profile } from "@/src/data/profile";

export function Footer() {
  return (
    <footer className="section-light py-10">
      <Container>
        <div className="flex flex-col gap-2 border-t light-line pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Lucy Bailey. All rights reserved.</div>
          <div>Last updated: September 18, 2025</div>
        </div>
      </Container>
    </footer>
  );
}
