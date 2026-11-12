import Link from "next/link";
export function Footer() {
  return (
    <footer>
      <Link href="/">
        midelim<span>.</span>com
      </Link>
      <span>Michel Marques · Rio de Janeiro</span>
      <Link href="/">Voltar ao início ↑</Link>
    </footer>
  );
}
