import React, { useState } from "react";

function Sobre() {
  let classe = "page-link-button";

  const [title, setTitle] = useState("Sobre");
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  );

  const handleClickPagamento = () => {
    setTitle("Forma de Pagamento");
    setText(
      "Você pode pagar com seu cartão bancário Visa, MasterCard, American Express Hipercard e Elo ou através do Apple Pay no APP m3, com os mesmos tipos de cartão (crédito ou débito).  A forma de pagamento Elo não é aceita nas compras realizadas via APP. Você poderá parcelar suas compras em até 10 vezes sem juros, com parcela mínima de R$ 40,00. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
  };

  const handleClickEntrega = () => {
    setTitle("Entrega");
    setText(
      "Devido o alto volume de vendas neste periodo, seu pedido poderá demorar um pouco mais para chegar. Fique tranquilo que estamos trabalhando para garantir todas as entregas. ***Devido a pandemia Covid -19 nossas transportadoras estão trabalhando com operação reduzida nas ruas e, por isso, seu pedido poderá demorar um pouco mais do que o previsto para chegar. Lembre-se de que você pode acompanhar seu pedido por aqui. Assim que nosso Centro de Distribuição expedir seu pedido, você receberá um email de confirmação com seu código de rastreamento. A previsão de entrega será de acordo com nossa política de entrega. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
  };

  const handleClickSobre = () => {
    setTitle("Sobre");
    setText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    );
  };
  const handleClickTroca = () => {
    setTitle("Troca e Devolução");
    setText(
      "O produto a ser devolvido deverá estar sem uso em sua embalagem original com todos os manuais e acessórios acompanhados da nota fiscal da compra. Todos os produtos devolvidos passam por uma análise do Controle de Qualidade adidas no momento que chegam ao nosso Centro de Distribuição. O produto desejado para troca e/ou a restituição do valor pago só será liberado após aprovação do nosso Controle de Qualidade. Caso seja identificada qualquer divergência ou violação do produto, não aceitaremos a devolução e entregaremos novamente o produto ao remetente sem comunicação prévia. O processo total de troca/devolução poderá levar até 7 dias úteis.Você pode trocar a cor ou tamanho do mesmo produto ou de outro modelo desde que o valor seja exatamente igual ao valor pago pelo produto original, sujeito à disponibilidade de estoque. A primeira troca é gratuita! Se você deseja trocar o tamanho, verifique a disponibilidade em nosso site, tenha o código do produto e o tamanho que você deseja. Se você comprou o produto com desconto, poderá trocar por outro tamanho sem problemas."
    );
  };
  const handleClickSeguranca = () => {
    setTitle("Segurança e Privacidade");
    setText(
      "Nós, da m3, queremos oferecer a você a melhor experiência de consumo possível. Quando você acessa nosso site, nossas lojas ou quando usa nossos aplicativos, nós coletamos os dados pessoais que você compartilha conosco para tornar nossos produtos e serviços, além da sua experiência, ainda melhores. O objetivo desta Política de Privacidade é fornecer a você uma visão clara de como usamos os dados pessoais que você nos fornece quando visita um de nossos ambientes, sejam eles digitais ou físicos, nossa dedicação em protegê-los, proteger sua privacidade, seus direitos e as opções que você tem para controlar seus dados pessoais e, até mesmo, os terceiros com quem compartilhamos eles."
    );
  };
  const handleClickContato = () => {
    setTitle("Contato");
  };

  return (
    <div>
      <div className="content">
        <div className="page-title">
          <h2>Institucional</h2>
        </div>
        <div className="content-wrapper">
          <div className="page-links">
            <button
              onClick={handleClickSobre}
              className={
                title == "Sobre"
                  ? "page-link-button--active"
                  : "page-link-button"
              }
            >
              Sobre
            </button>
            <button
              onClick={handleClickPagamento}
              className={
                title == "Forma de Pagamento"
                  ? "page-link-button--active"
                  : "page-link-button"
              }
            >
              Forma de Pagamento
            </button>
            <button
              onClick={handleClickEntrega}
              className={
                title == "Entrega"
                  ? "page-link-button--active"
                  : "page-link-button"
              }
            >
              Entrega
            </button>
            <button
              onClick={handleClickTroca}
              className={
                title == "Troca e Devolução"
                  ? "page-link-button--active"
                  : "page-link-button"
              }
            >
              Troca e Devolução
            </button>
            <button
              onClick={handleClickSeguranca}
              className={
                title == "Segurança e Privacidade"
                  ? "page-link-button--active"
                  : "page-link-button"
              }
            >
              Segurança e Privacidade
            </button>
            <button
              onClick={handleClickContato}
              className={
                title == "Contato"
                  ? "page-link-button--active"
                  : "page-link-button"
              }
            >
              Contato
            </button>
          </div>
          <div className="content-section">
            <h3 className="section-title">{title}</h3>
            <p className="section-description">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
