import { ActionLink } from "@/components/ui/action-link";
export default function NotFound() {
  return (
    <div className="page-hero">
      <span className="eyebrow">404</span>
      <h1>
        Página
        <br />
        <em>não encontrada.</em>
      </h1>
      <ActionLink href="/">Voltar para Home →</ActionLink>
    </div>
  );
}
