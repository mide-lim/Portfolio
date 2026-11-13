import type { Metadata } from "next";
import { ComponentWorkshop } from "@/components/design-system/component-workshop";
import "./guide.css";
export const metadata: Metadata = {
  title: "Design system · componentes",
  description: "Revisão de componentes, cores e comunicação do portfólio.",
  robots: { index: false, follow: false },
};
export default function DesignSystemPage() {
  return <ComponentWorkshop />;
}
