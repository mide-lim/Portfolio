import Link from "next/link";
export default function NotFound() {
  return (
    <div className="page-hero">
      <span className="eyebrow">404</span>
      <h1>
        Página
        <br />
        <em>não encontrada.</em>
      </h1>
      <Link className="button" href="/">
        Voltar para Home →
      </Link>
    </div>
  );
}
