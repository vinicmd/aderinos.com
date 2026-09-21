import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Fragment } from "react";
import styles from "@/app/sobre-nos/page.module.css";

export default function SobreNos() {
  return (
    <Fragment>
      <Header />
      <section className={styles.container}>
        <div>
          <h1>Sobre a Aderir Pacotes</h1>
          <p>
            A ADERIR PACOTES é um Agente Autorizado de venda de serviços de
            telecomunicações, com foco em oferecer soluções personalizadas para
            as suas necessidades de internet, telefone e TV.
          </p>
          <h2>A nossa missão:</h2>
          <ul>
            <li>
              Fornecer aos nossos clientes a melhor experiência possível em
              telecomunicações. Fazemos isso através de um atendimento
              personalizado, produtos de alta qualidade e preços competitivos.
            </li>
            <li>
              Ser um parceiro de confiança para os nossos clientes. Acreditamos
              que a melhor maneira de construir um negócio duradouro é através
              da confiança e do respeito mútuo.
            </li>
          </ul>
          <h2>Os nossos valores:</h2>
          <ul>
            <li>
              Excelência no atendimento ao cliente: Acreditamos que o cliente é
              o centro do nosso negócio e esforçamo-nos para oferecer um
              atendimento excecional em todos os momentos.
            </li>
            <li>
              Honestidade e transparência: Acreditamos em construir relações de
              confiança com os nossos clientes, sendo honestos e transparentes
              em tudo o que fazemos.
            </li>
            <li>
              Inovação: Estamos sempre buscando novas tecnologias e soluções
              para oferecer aos nossos clientes os melhores produtos e serviços
              do mercado.
            </li>
          </ul>
          <h2>Os nossos serviços:</h2>
          <ul>
            <li>
              Venda de pacotes de internet: Oferecemos uma variedade de pacotes
              de internet para atender às suas necessidades, desde planos
              residenciais até planos empresariais.
            </li>
            <li>
              Venda de linhas telefónicas: Vendemos linhas telefónicas fixas e
              móveis, com planos que se adaptam ao seu perfil de uso.
            </li>
            <li>
              Venda de serviços de TV: Oferecemos serviços de TV por assinatura,
              com uma variedade de canais para você escolher.
            </li>
          </ul>
          <h2>Por que escolher a ADERIR PACOTES?</h2>
          <ul>
            <li>
              Somos um Agente Autorizado de venda de serviços de
              telecomunicações: Isso significa que temos o conhecimento e a
              experiência para ajudá-lo a escolher o melhor plano para suas
              necessidades.
            </li>
            <li>
              Oferecemos um atendimento personalizado: Acreditamos que cada
              cliente é único e por isso oferecemos um atendimento personalizado
              para atender às suas necessidades específicas.
            </li>
            <li>
              Temos preços competitivos: Oferecemos preços competitivos para os
              nossos serviços, para que você possa ter a melhor relação
              custo-benefício.
            </li>
          </ul>
          <p>
            Contacte-nos hoje mesmo e deixe-nos ajudá-lo a encontrar a solução
            ideal em telecomunicações para si!
          </p>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
