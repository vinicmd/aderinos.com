import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Fragment } from "react";
import styles from "@/app/termos-de-uso/page.module.css";

export default function TermsUse() {
  return (
    <Fragment>
      <Header />
      <section className={styles.container}>
        <main>
          <h1 id="terms-use">Termos de Utilização</h1>
          <h3>Regulamento Geral sobre a Proteção de Dados</h3>
        </main>
        <article>
          <h2>Termos</h2>
          <p>
            Ao aceder ao site da Aderir Pacotes, concorda em cumprir estes
            termos de utilização, todas as leis e regulamentos aplicáveis e
            concorda que é responsável pelo cumprimento de todas as leis locais
            aplicáveis. Se não concordar com algum desses termos, está proibido
            de usar ou aceder a este site. Os conteúdos contidos neste site são
            protegidos pelas leis de direitos autorais e marcas comerciais
            aplicáveis.
          </p>

          <h2>Uso de Licença</h2>
          <p>
            É concedida permissão para transferir temporariamente uma cópia dos
            conteúdos (informações ou software) do site da Aderir Pacotes,
            apenas para visualização transitória pessoal e não comercial. Esta é
            a concessão de uma licença, não uma transferência de título e, sob
            esta licença, você não pode:
          </p>
          <ul>
            <li>Modificar ou copiar os conteúdos</li>
            <li>
              Usar os conteúdos para qualquer finalidade comercial ou para
              exibição pública (comercial ou não comercial)
            </li>
            <li>
              Tentar descompilar ou fazer engenharia reversa de qualquer
              software contido no site da Aderir Pacotes
            </li>
            <li>
              Remover quaisquer direitos autorais ou outras notações de
              propriedade dos conteúdos
            </li>
            <li>
              Transferir os conteúdos para outra pessoa ou espelhar os conteúdos
              em qualquer outro servidor
            </li>
          </ul>
          <p>
            Esta licença será automaticamente rescindida se violar alguma dessas
            restrições e poderá ser rescindida pela Aderir Pacotes a qualquer
            momento. Ao encerrar a visualização desses conteúdos ou após o
            término desta licença, deverá apagar todos os conteúdos transferidos
            e em sua posse, seja em formato eletrónico ou impresso.
          </p>

          <h2>Isenção de responsabilidade</h2>
          <ul>
            <li>
              Os conteúdos no site da Aderir Pacotes são fornecidos como estão.
              A Aderir Pacotes não oferece garantias, expressas ou implícitas,
              e, por este meio, isenta e nega todas as outras garantias,
              incluindo, sem limitação, garantias implícitas ou condições de
              comercialização, adequação a um fim específico ou não violação de
              propriedade intelectual ou outra violação de direitos.
            </li>
            <li>
              Além disso, a Aderir Pacotes não garante ou faz qualquer
              representação relativa à precisão, aos resultados prováveis ou à
              confiabilidade do uso dos conteúdos no seu site ou de outra forma
              relacionado a esses conteúdos ou em sites vinculados a este site.
            </li>
          </ul>

          <h2>Limitações</h2>
          <p>
            Em nenhum caso a Aderir Pacotes ou os seus fornecedores serão
            responsáveis por quaisquer danos (incluindo, sem limitação, danos
            por perda de dados ou lucro ou devido a interrupção dos negócios)
            decorrentes do uso ou da incapacidade de usar os materiais da Aderir
            Pacotes, mesmo que a Aderir Pacotes ou um representante autorizado
            da Aderir Pacotes tenha sido notificado oralmente ou por escrito da
            possibilidade de tais danos. Como algumas jurisdições não permitem
            limitações em garantias implícitas, ou limitações de
            responsabilidade por danos conseqüentes ou incidentais, essas
            limitações podem não se aplicar a você.
          </p>

          <h2>Precisão dos conteúdos</h2>
          <p>
            Os conteúdos exibidos no site da Aderir Pacotes podem incluir erros
            técnicos, tipográficos ou fotográficos. A Aderir Pacotes não garante
            que qualquer conteúdo no site seja preciso, completo ou atual. A
            Aderir Pacotes pode fazer alterações nos conteúdos contidos no site
            a qualquer momento, sem aviso prévio. No entanto, a Aderir Pacotes
            não se compromete a atualizar estes conteúdos.
          </p>

          <h2>Links</h2>
          <p>
            A Aderir Pacotes não analisou todos os sites vinculados ao seu site
            e não é responsável pelo conteúdo de nenhum site vinculado. A
            inclusão de qualquer link não implica endosso pela Aderir Pacotes do
            site. O uso de qualquer site vinculado é por conta e risco do
            utilizador.
          </p>

          <h2>Modificações</h2>
          <p>
            A Aderir Pacotes pode revisar estes termos de utilização do site a
            qualquer momento, sem aviso prévio. Ao usar este site, você concorda
            em ficar vinculado à versão atual desses termos de utilização.
          </p>

          <h2>Lei aplicável</h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com
            as leis da Aderir Pacotes e você se submete irrevogavelmente à
            jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </article>
      </section>
      <Footer />
    </Fragment>
  );
}
