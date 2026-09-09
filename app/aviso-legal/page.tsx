import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Identificação da entidade responsável por ilicitano.pt e condições de utilização da informação aqui publicada.",
};

export default function AvisoLegalPage() {
  return (
    <LegalPage
      eyebrow="Informação legal"
      title={
        <>
          Aviso <em>legal.</em>
        </>
      }
      lead="Quem é responsável por este sítio, a que se destina a informação aqui publicada e em que termos pode ser utilizada."
    >
      <p className="small muted">Última atualização: [data]</p>

      <h2>1. Identificação da entidade</h2>
      <p>
        <strong>{company.legalName}</strong>
        <br />
        {company.addressLine1}, {company.addressLine2}
        <br />
        {company.nif} · {company.alvara}
        <br />
        <a href={company.phoneHref}>{company.phone}</a> ·{" "}
        <a href={company.emailHref}>{company.email}</a>
      </p>
      <p>
        [A completar por assessoria jurídica: forma jurídica, capital social, conservatória do
        registo comercial e número de matrícula, CAE, e os restantes elementos de identificação que
        a lei exija a quem presta serviços em linha.]
      </p>

      <h2>2. Objeto do site</h2>
      <p>
        [A redigir por assessoria jurídica, com o contributo da ILICITANO: a que se destina este
        sítio, que informação nele é disponibilizada e com que alcance. Deve dizer expressamente o
        estatuto do conteúdo comercial — imagens, plantas, tipologias, áreas, prazos e preços de
        empreendimentos — e se constitui ou não proposta contratual.]
      </p>

      <h2>3. Propriedade intelectual</h2>
      <p>
        [A redigir por assessoria jurídica: titularidade da marca, do logótipo, dos textos, da
        fotografia, dos projetos e dos desenhos publicados; utilizações permitidas e proibidas; e
        como pedir autorização de utilização.]
      </p>

      <h2>4. Limitação de responsabilidade</h2>
      <p>
        [A redigir por assessoria jurídica: em que termos a ILICITANO responde pela exatidão e pela
        atualização do conteúdo, pela disponibilidade do sítio e por eventuais interrupções, erros
        ou perdas decorrentes da sua utilização.]
      </p>

      <h2>5. Ligações para sítios de terceiros</h2>
      <p>
        [A redigir por assessoria jurídica: tratamento das ligações que conduzem para fora deste
        sítio — nomeadamente as ligações do rodapé — e delimitação da responsabilidade da ILICITANO
        pelo conteúdo e pelas práticas desses sítios.]
      </p>

      <h2>6. Lei aplicável</h2>
      <p>
        [A redigir por assessoria jurídica: lei aplicável a este aviso e à utilização do sítio, e
        articulação com os Termos e condições.]
      </p>
    </LegalPage>
  );
}
