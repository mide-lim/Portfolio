import Link from "next/link";
import { ArrowText } from "@/components/ui/arrow-text";
export function Footer() {
  return (
    <footer>
      <Link href="/">
        midelim<span>.</span>com
      </Link>
      <span>Michel Marques · Rio de Janeiro</span>
      <Link href="/design-system/">Design System</Link>
      <Link href="/"><ArrowText>{"Voltar ao início ↑"}</ArrowText></Link>
    </footer>
  );
}
