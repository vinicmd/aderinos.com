import styles from "@/app/politica-de-privacidade/page.module.css";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Aderir Pacotes Internet",
  description:
    "A sua privacidade é importante para nós. A Aderir Pacotes se compromete a respeitar a sua privacidade em relação a qualquer informação sua que coletamos no...",
};

export default function PolicyPrivacy() {
  const date = `01 de Setembro de 2026`;

  return (
    <Fragment>
      <Header />
      <main className={styles.container}>
        <h1 id="privacy-policy">Politica De Privacidade</h1>
        <div className={styles.policy}>
          <p>
            A sua privacidade é importante para nós. A Aderir Pacotes se
            compromete a respeitar a sua privacidade em relação a qualquer
            informação sua que coletamos no site Aderir Pacotes e em outros
            sites que possuímos e operamos. Solicitamos informações pessoais
            apenas quando realmente precisamos delas para fornecer-lhe um
            serviço.Fazemo-lo por meios justos e legais, com o seu conhecimento
            e consentimento. Também informamos por que estamos coletando e como
            será usado.
          </p>
          <p>
            Retemos as informações coletadas apenas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados,
            protegemo-los dentro de meios comercialmente aceitáveis para evitar
            perdas e roubos, bem como acesso, divulgação, cópia, uso ou
            modificação não autorizados.
          </p>
          <p>
            Nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            as práticas desses sites e não podemos nos responsabilizar por suas
            respectivas políticas de privacidade.{" "}
          </p>
          <p>
            O uso contínuo de nosso site será considerado como aceitação de
            nossas práticas de privacidade e informações pessoais. Usamos
            anúncios para compensar os custos de funcionamento deste site e
            fornecer financiamento para futuros desenvolvimentos. Vários
            parceiros anunciam em nosso nome. Os cookies de rastreamento de
            afiliados nos permitem verificar se nossos clientes acessaram o site
            através de um dos sites de nossos parceiros. Isso nos permite
            creditá-los devidamente e, quando aplicável, permitir que nossos
            parceiros afiliados ofereçam promoções.
          </p>
          <p>
            Compromisso do Usuário O usuário se compromete a fazer uso adequado
            dos conteúdos e da informação que a Aderir Pacotes oferece no site,
            incluindo, mas não se limitando a: A) Não se envolver em atividades
            que sejam ilegais ou contrárias à boa fé e à ordem pública; B) Não
            difundir propaganda ou conteúdo de natureza racista, xenofóbica,
            pixbet ou azar, qualquer tipo de pornografia ilegal, de apologia ao
            terrorismo ou contra os direitos humanos; C) Não causar danos aos
            sistemas físicos (hardwares) e lógicos (softwares) do Aderir
            Pacotes, de seus fornecedores ou terceiros, para introduzir ou
            disseminar vírus informáticos ou quaisquer outros sistemas de
            hardware ou software que sejam capazes de causar danos anteriormente
            mencionados.
          </p>
          <p>
            Mais informações Esperamos que esta política esteja clara. Se você
            tiver dúvidas sobre a necessidade ou não de ativar cookies,
            geralmente é mais seguro deixá-los ativados, caso interaja com um
            dos recursos que você usa em nosso site. Esta política é efetiva a
            partir de {date}.
          </p>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
