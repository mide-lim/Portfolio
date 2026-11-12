"use client";
import { useState } from "react";
import { ActionLink } from "@/components/ui/action-link";
import { colorTokens } from "@/content/design-system";

export function TokenExplorer() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  return (
    <div className="ds-explorer">
      <div
        className="ds-demo-controls"
        role="group"
        aria-label="Tema da demonstração de tokens"
      >
        <span>Experimente nesta amostra:</span>
        {(["light", "dark"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={mode === value}
            onClick={() => setMode(value)}
          >
            {value === "light" ? "Claro" : "Escuro"}
          </button>
        ))}
      </div>
      <div className="ds-token-stage" data-design-theme={mode}>
        <div className="ds-token-flow">
          <div>
            <span className="ds-step">01 · VALOR</span>
            <div
              className="ds-color-block"
              style={{ background: "var(--primary)" }}
            />
            <strong>
              {mode === "dark" ? "Electric Blue" : "Burnt Orange"}
            </strong>
            <code>{mode === "dark" ? "#2F6BFF" : "#D9541E"}</code>
          </div>
          <div>
            <span className="ds-step">02 · NOME DA FUNÇÃO</span>
            <div className="ds-token-name">
              <code>primary</code>
            </div>
            <strong>Ação principal</strong>
            <p>O nome continua igual quando o tema muda.</p>
          </div>
          <div>
            <span className="ds-step">03 · USO NA TELA</span>
            <div className="ds-token-action">
              <ActionLink href="/portfolio/">Explorar projetos ↗</ActionLink>
            </div>
            <strong>Um componente real</strong>
            <p>O botão recebe a cor pelo nome da função.</p>
          </div>
        </div>
        <p className="ds-example-caption" aria-live="polite">
          Amostra em modo {mode === "dark" ? "escuro" : "claro"}. A seleção
          altera somente esta demonstração.
        </p>
        <div className="ds-swatches">
          {colorTokens.map((item) => (
            <div className="ds-swatch" key={item.token}>
              <span
                className="ds-swatch-color"
                style={{ background: "var(" + item.token + ")" }}
                aria-hidden="true"
              />
              <div>
                <strong>{item.name}</strong>
                <code>{item.token}</code>
                <span>{item[mode]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
