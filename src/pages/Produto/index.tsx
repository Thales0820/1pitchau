import { FaShoppingCart } from "react-icons/fa"
import { GoSignIn } from "react-icons/go";
import { TextPromo, TitlePreco } from "../../components/Card/styles"
import { Menu } from "../../components/Menu"
import { ButtonC, ButtonV, CardD, Informacoes } from "./styles"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

interface IDataDetalhes {
  id: number,
  nome: string,
  valor: string,
  promo: string,
  imagemp: string,
  imagemg: string,
  id_categoria: number,
  promoNumber: string,
}

export const Produto = () => {

  const params = useParams()
  console.log(params)

  const [dataProduto, setDataProduto] = useState<Array<IDataDetalhes>>([]);

  useEffect(() => {
      axios.get('http://localhost:3000/produtos/id').then((res) => {
        setDataProduto(res.data)
      })
  })

  return(
    <>
    <Menu />
      <h1
        style={{
          textAlign: 'center',
          marginTop: '10px'
        }}
      >Detalhes do Produto</h1>
      {
        dataProduto.map((produto) => {
          return (
            <CardD
              key={produto.id}
            >
              <img
              style={{ width: '100%' }}
              src={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/' + produto.imagemg} alt="Produto" />
              <Informacoes>
                <h3>{produto.nome}</h3>
                <TitlePreco>{produto.valor}</TitlePreco>
                <TextPromo>{produto.promo}</TextPromo>
                <Link to={'/Carrinho'}>
                  <ButtonC>
                    <FaShoppingCart
                      size={15}/>
                      Comprar
                  </ButtonC>
                </Link>
                <Link to={'/'}>
                  <ButtonV >
                    <GoSignIn
                      size={15}/>
                      Voltar
                  </ButtonV>
                </Link>
              </Informacoes>
            </CardD>
          )
        })
     }
    </>
  )
}
