"use client";
import { useState } from "react";
import { ActionLink } from "@/components/ui/action-link";
export function ComponentStates() {
  const [selected, setSelected] = useState("Todos");
  return (
    <div className="ds-state-demo">
      <div className="ds-action-row">
        <ActionLink href="/portfolio/">Explorar projetos ↗</ActionLink>
        <ActionLink variant="text" href="/about/">
          Conhecer trajetória →
        </ActionLink>
      </div>
      <p>
        Variante principal e variante discreta. Os dois links levam a páginas
        reais.
      </p>
      <div
        className="filters"
        role="group"
        aria-label="Exemplo de estado selecionado"
      >
        {["Todos", "Autorais & IA", "42 Rio"].map((label) => (
          <button
            key={label}
            type="button"
            className={selected === label ? "active" : ""}
            aria-pressed={selected === label}
            onClick={() => setSelected(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <p aria-live="polite">
        Estado selecionado nesta demonstração: <strong>{selected}</strong>.
      </p>
      <p className="ds-note">
        Passe o ponteiro nos links para observar o hover. Use Tab para ver o
        contorno de foco. O exemplo de filtro acima demonstra somente o estado;
        o catálogo real filtra projetos.
      </p>
    </div>
  );
}
