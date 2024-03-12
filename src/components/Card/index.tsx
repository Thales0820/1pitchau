import axios from "axios";
import React, { useState, useEffect } from "react";
import { Title } from "../../pages/Home/styles";
import { CardBory, TitlePreco, TextPromo, Button, TextButton } from "./styles";

interface IDataProdutos {
  id: number,
  produto: string,
  preco: string,
  promocao: string,
  imagem: string
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
            justifyContent: 'center'
          }}>
              {
                dataProdutos.map((produto) => {
                  return (
                    <CardBory
                      key={produto.id}>
                      <img src={produto.imagem}/>
                      <Title>{produto.produto}</Title>
                      <TitlePreco>{produto.preco}</TitlePreco>
                      <TextPromo>{produto.promocao}</TextPromo>
                      <Button>
                        <TextButton>Detalhes</TextButton>
                      </Button>
                    </CardBory>
                  )
                })
              }
          </div>
      </div>
    </>
  )

}
