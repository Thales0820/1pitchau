import { Div, Textarea } from "./styls"

export const Contato = () => {
  return(
    <>
      <Div className="formulario">
        <input className="nome" type="text" placeholder="Digite seu Nome"/>
        <br />
        <input className="telefone" type="text" placeholder="Digite seu Telefone" />
        <br />
        <input className="email" type="email" placeholder="Digite seu email, exemplo: exemplo@gmail.com"/>
        <br />
        <select className="cidade">
          <option selected>Selecione sua Cidade</option>
          <option value="1">Altônia</option>
          <option value="2">Curitiba</option>
          <option value="3">Douradina</option>
          <option value="4">Guaíra</option>
          <option value="5">Iporã</option>
          <option value="6">Perobal</option>
          <option value="7">Umuarama</option>
        </select>
        <br />
        <button>Enviar</button>
      </Div>
      <Textarea>
        <h1>Quem Somos</h1>
        <p>Fundada no ano de 2007, a Pichau Informática é uma empresa que trabalha com os mais variados produtos, atuando principalmente no setor de informática e equipamentos eletrônicos em geral, área bastante competitiva e em constante crescimento, onde qualidade, variedade, garantia e eficiência são critérios importantíssimos para total satisfação, confiança e preferência de nossos consumidores.</p>
        <p>Além do nosso e-commerce possuímos uma loja física situada em Joinville/SC, onde temos a variedade de nosso site ao gosto dos mais exigentes clientes. Oferecemos não apenas a comodidade da compra online, mas também o tratamento olho no olho que muitos preferem e sempre confiam.</p>
        <p>Procuramos acima de tudo oferecer o que há de melhor, os melhores fornecedores, os mais atualizados produtos, o mais atencioso dos atendimentos, juntamente com os preços mais competitivos e atraentes do mercado para que nosso público encontre não apenas variedade e qualidade, mas também uma empresa que se preocupa com a felicidade e total satisfação de seus clientes e por que não, amigos!</p>
        <p>Além de nosso site, visite também nossa loja estamos a sua espera!</p>
    </Textarea>
    </>
  )
}
