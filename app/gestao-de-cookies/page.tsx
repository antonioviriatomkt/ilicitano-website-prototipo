import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Gestão de cookies",
  description:
    "O que são cookies, que categorias este sítio utiliza, com que finalidade e duração, e como geri-las no navegador.",
};

export default function GestaoDeCookiesPage() {
  return (
    <LegalPage
      eyebrow="Informação legal"
      title={
        <>
          Gestão de <em>cookies.</em>
        </>
      }
      lead="Que cookies este sítio utiliza, para que servem, quanto tempo duram e como pode controlá-las."
    >
      <p className="small muted">Última atualização: [data]</p>

      <h2>1. O que são cookies</h2>
      <p>
        [A redigir por assessoria jurídica: o que são cookies e tecnologias equivalentes, o que
        guardam no equipamento do utilizador e que distinção é feita entre cookies próprias e de
        terceiros, e entre cookies de sessão e persistentes.]
      </p>

      <h2>2. Categorias utilizadas neste site</h2>
      <p>
        [A preencher a partir de uma auditoria ao sítio publicado: confirmar quais destas categorias
        são efetivamente utilizadas e eliminar as que não forem. Para cada cookie, indicar nome,
        entidade responsável, finalidade e duração.]
      </p>

      <h3>Estritamente necessárias</h3>
      <p>
        [Finalidade e duração a preencher: cookies sem as quais o sítio não funciona — segurança,
        submissão de formulários, preferências técnicas de sessão.]
      </p>

      <h3>Funcionais</h3>
      <p>
        [Finalidade e duração a preencher: cookies que guardam escolhas do utilizador, como o
        idioma. Confirmar se são utilizadas — o seletor de idioma do protótipo é decorativo.]
      </p>

      <h3>Analíticas</h3>
      <p>
        [Finalidade e duração a preencher: cookies de medição de audiências, com a identificação da
        ferramenta utilizada e da entidade que a fornece. Confirmar se existe alguma.]
      </p>

      <h3>Marketing</h3>
      <p>
        [Finalidade e duração a preencher: cookies de publicidade e de acompanhamento de campanhas,
        com a identificação de cada terceiro envolvido. Confirmar se existe alguma.]
      </p>

      <h2>3. Como gerir cookies no navegador</h2>
      <p>
        [A redigir: como bloquear, apagar e limitar cookies nas definições do navegador, com ligação
        à documentação de cada um dos navegadores mais utilizados, e nota sobre o efeito que essas
        escolhas têm no funcionamento do sítio.]
      </p>

      <h2>4. Definições de consentimento</h2>
      <p>
        [Por construir: este protótipo não tem mecanismo de recolha de consentimento. Quando
        existir, esta secção passa a incluir a ligação que reabre as definições de consentimento e
        explica como retirar um consentimento já dado.]
      </p>

      <h2>5. Alterações a esta informação</h2>
      <p>
        [A redigir por assessoria jurídica: com que periodicidade a lista de cookies é revista e
        como as alterações são comunicadas.]
      </p>
    </LegalPage>
  );
}
