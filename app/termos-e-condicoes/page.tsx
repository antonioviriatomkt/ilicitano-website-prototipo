import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Termos e condições",
  description:
    "Condições de utilização do sítio da ILICITANO: âmbito, obrigações do utilizador, responsabilidade, lei aplicável e resolução de litígios.",
};

export default function TermosECondicoesPage() {
  return (
    <LegalPage
      eyebrow="Informação legal"
      title={
        <>
          Termos <em>e condições.</em>
        </>
      }
      lead="As condições em que este sítio é disponibilizado e utilizado, e o que acontece se houver um diferendo."
    >
      <p className="small muted">Última atualização: [data]</p>

      <h2>1. Âmbito e aceitação</h2>
      <p>
        [A redigir por assessoria jurídica: o que estes termos abrangem, a quem se aplicam, e como e
        em que momento o utilizador os aceita. Deve indicar a relação com o Aviso legal, com a
        Política de privacidade e com a Gestão de cookies.]
      </p>

      <h2>2. Utilização do site</h2>
      <p>
        [A redigir por assessoria jurídica: utilizações permitidas do sítio e dos seus serviços,
        nomeadamente os formulários de contacto, de pedido de orçamento e de marcação de visita;
        requisitos de acesso; e condições de suspensão ou de descontinuação de funcionalidades.]
      </p>

      <h2>3. Obrigações do utilizador</h2>
      <p>
        [A redigir por assessoria jurídica: deveres do utilizador, nomeadamente a veracidade dos
        dados que submete nos formulários, e as condutas expressamente proibidas.]
      </p>

      <h2>4. Conteúdos e propriedade intelectual</h2>
      <p>
        [A redigir por assessoria jurídica: titularidade dos conteúdos do sítio, licença de
        utilização concedida ao utilizador, e regime de eventuais conteúdos submetidos por
        terceiros. Articular com a secção correspondente do Aviso legal para não haver duas redações
        diferentes da mesma regra.]
      </p>

      <h2>5. Responsabilidade</h2>
      <p>
        [A redigir por assessoria jurídica: repartição de responsabilidade entre a ILICITANO e o
        utilizador, limites aplicáveis, e ressalva expressa dos direitos que a lei reconhece aos
        consumidores.]
      </p>

      <h2>6. Alterações aos termos</h2>
      <p>
        [A redigir por assessoria jurídica: como estes termos são alterados, como e com que
        antecedência as alterações são comunicadas, e a partir de quando produzem efeitos.]
      </p>

      <h2>7. Lei aplicável e foro</h2>
      <p>
        [A redigir por assessoria jurídica: lei aplicável e foro competente, com ressalva expressa
        das regras imperativas aplicáveis a contratos com consumidores.]
      </p>

      <h2>8. Resolução de litígios</h2>
      <p>
        [A redigir por assessoria jurídica: meios de resolução alternativa de litígios aplicáveis à
        atividade da ILICITANO, entidades competentes, respetivos contactos e âmbito de
        intervenção.]
      </p>
      <p>
        O Livro de Reclamações eletrónico está disponível em{" "}
        <a href="https://www.livroreclamacoes.pt/inicio">livroreclamacoes.pt</a>.
      </p>
    </LegalPage>
  );
}
