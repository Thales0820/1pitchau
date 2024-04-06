import axios from "axios";
import { useState, useEffect } from "react";
import { SlMagnifier } from "react-icons/sl";
import { Title } from "../../pages/Home/styles";
import { CardBory, TitlePreco, TextPromo, Button, TextButton } from "./styles";
import { Link } from "react-router-dom";

interface IDataProdutos {
  id: number,
  nome: string,
  valor: string,
  promo: string,
  imagemp: string,
  imagemg: string,
  id_categoria: number,
  promoNumber: string,
}

export const Card= () => {
  const [dataProdutos, setDataProdutos] = useState<Array<IDataProdutos>>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/produtos')
    .then((res) => {
      setDataProdutos(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  return (
    <>
      <div style={{
          paddingLeft: '6%',
          paddingRight: '6%'
        }}>
          <h2 style={{
            marginTop: '20px',
            marginBottom: '10px',
            textAlign: 'center'
          }}>Produtos em Destaque:</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
              {
                dataProdutos.map((produto) => {
                  return (
                    <CardBory
                      key={produto.id}>
                      <img style={{
                        width: '100%',
                        height: '300px'
                      }} src={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/' + produto.imagemp} />
                      <Title>{produto.nome}</Title>
                      <br />
                      <TitlePreco>R${produto.valor}</TitlePreco>
                      <TextPromo>R${produto.promo}</TextPromo>
                      <Link to={'http://localhost:3001/produto/' + produto.id}>
                        <Button>
                          <TextButton>
                            <SlMagnifier size={15}></SlMagnifier> Detalhes
                          </TextButton>
                        </Button>
                      </Link>
                    </CardBory>
                  )
                })
              }
          </div>
      </div>
    </>
  )

}
