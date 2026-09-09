import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a ILICITANO trata os dados pessoais recolhidos através deste sítio, para que fins, durante quanto tempo, e que direitos assistem ao titular.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage
      eyebrow="Informação legal"
      title={
        <>
          Política de <em>privacidade.</em>
        </>
      }
      lead="Que dados pessoais são recolhidos neste sítio, para que servem, quem lhes acede e como exercer os seus direitos."
    >
      <p className="small muted">Última atualização: [data]</p>

      <h2>1. Responsável pelo tratamento</h2>
      <p>
        <strong>{company.legalName}</strong>
        <br />
        {company.addressLine1}, {company.addressLine2}
        <br />
        {company.nif}
        <br />
        <a href={company.emailHref}>{company.email}</a> ·{" "}
        <a href={company.phoneHref}>{company.phone}</a>
      </p>
      <p>
        [A completar pela ILICITANO: se está designado encarregado de proteção de dados, indicar o
        respetivo contacto; se não está, indicar o canal de contacto para assuntos de proteção de
        dados. Não inventar nome nem endereço.]
      </p>

      <h2>2. Dados recolhidos</h2>
      <p>
        [A redigir a partir de um levantamento técnico do sítio: que categorias de dados são
        efetivamente recolhidas em cada formulário — contacto, pedido de orçamento, marcação de
        visita — e que dados são recolhidos automaticamente na navegação, incluindo os obtidos por
        cookies e por ferramentas de terceiros.]
      </p>

      <h2>3. Finalidades e fundamento de licitude</h2>
      <p>
        [A redigir por assessoria jurídica: para cada finalidade de tratamento, o respetivo
        fundamento de licitude, e se algum dado é necessário para a prestação do serviço. Nenhum
        fundamento deve ser assumido sem análise — não copiar de outro sítio.]
      </p>

      <h2>4. Prazos de conservação</h2>
      <p>
        [A definir pela ILICITANO com validação jurídica: prazo de conservação por categoria de
        dados e por finalidade, e o critério que determina cada prazo. Não indicar prazos por
        defeito.]
      </p>

      <h2>5. Destinatários e subcontratantes</h2>
      <p>
        [A redigir a partir do inventário real de fornecedores: alojamento, correio eletrónico,
        formulários, analítica, gestão comercial e quaisquer outros que acedam a dados pessoais, com
        a indicação do papel de cada um.]
      </p>

      <h2>6. Transferências internacionais</h2>
      <p>
        [A confirmar caso a caso: se algum destinatário trata dados fora do Espaço Económico
        Europeu, indicar quais, para onde, e as garantias aplicáveis. Se não houver transferências,
        dizê-lo expressamente.]
      </p>

      <h2>7. Direitos do titular e como os exercer</h2>
      <p>
        [A redigir por assessoria jurídica: enumeração dos direitos que assistem ao titular dos
        dados, e o procedimento concreto para os exercer — canal, elementos de identificação
        exigidos e prazo de resposta.]
      </p>

      <h2>8. Reclamação à autoridade de controlo</h2>
      <p>
        [A redigir por assessoria jurídica: direito de apresentar reclamação junto da autoridade de
        controlo competente (CNPD), com os respetivos contactos atualizados à data da publicação.]
      </p>

      <h2>9. Alterações a esta política</h2>
      <p>
        [A redigir por assessoria jurídica: como esta política é revista, como as alterações são
        comunicadas e a partir de quando produzem efeitos.]
      </p>
    </LegalPage>
  );
}
