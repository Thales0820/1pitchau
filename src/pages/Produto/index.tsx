import { FaShoppingCart } from "react-icons/fa"
import { GoSignIn } from "react-icons/go";
import { TextPromo, TitlePreco } from "../../components/Card/styles"
import { Menu } from "../../components/Menu"
import { ButtonC, ButtonV, CardD, Informacoes, Input } from "./styles"
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ICarrinho } from "../../@types/interfaces";
import { formataValorBR } from "../../service/format";

interface IDataDetalhes {
  id: string,
  nome: string,
  valor: string,
  promo: string,
  imagemp: string,
  imagemg: string,
  id_categoria: number,
  promoNumber: string,
}

export const Produto = () => {

  const [dataProduto, setDatadatadProduto] = useState<IDataDetalhes | null>(null);
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate()

//useEffect é o primeiro a ser executavél quando o usuario chega na pagina
//
  useEffect(() => {
      axios.get(`http://localhost:3000/produtos/${id}`).then((res) => {
        setDatadatadProduto(res.data)
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      })
  }, [id]);
//usecallback impede o valor de ser atualizado
  const onSubmit = useCallback ((e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      quantidade: { value: number }
    }

    if (dataProduto) {
      let qtd = target.quantidade.value

      if (qtd > 0) {
        let objProduto = {
          //expres opereitor está servindo para trazer todo a Interface
          ...dataProduto,
          quantidade: qtd,
          total: Number(dataProduto.promo) * qtd
        }
        //localStorage é uma memoria do navegador
        //localStorage não trabalha com arrray
        let lsCarrinho = localStorage.getItem('@1pitchau:carrinho')

        let carrinho: Array<ICarrinho> = []

        if (typeof lsCarrinho === 'string') {
          carrinho = JSON.parse(lsCarrinho)
          //tranforma o json em obj ou array
        }
        //verificanto se já existe produto
        if (carrinho.length > 0) {
          let igual = false

          carrinho.forEach((produto) => {
            if (produto.id == objProduto.id) {
              igual = true

              let qtd = Number(produto.quantidade) + Number(objProduto.quantidade)
              produto.quantidade = qtd
              produto.total = Number(produto.promo) * qtd
            }
          })

          if (!igual) {
          //adicionando um carrinho dentro do Array
          carrinho.push(objProduto)
          }

          localStorage.setItem(
            '@1pitchau:carrinho',
            JSON.stringify(carrinho)
          )
        } else { //se não existe vamos criar
          localStorage.setItem(
            '@1pitchau:carrinho',
            JSON.stringify([objProduto])
          )
          //stringify tranforma uma string em json
        }

        navigate('/carrinho')

      }
    }
  }, [dataProduto])

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
        dataProduto && (
            <CardD
              key={dataProduto.id}
              id={dataProduto.id}
            >
              <img
              style={{
                  width: '100%'
              }}
              src={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/' + dataProduto.imagemg} alt="datadProduto" />
              <Informacoes>
                <h3>{dataProduto.nome}</h3>
                <TitlePreco>{formataValorBR(dataProduto.valor)}</TitlePreco>
                <TextPromo>{formataValorBR(dataProduto.promo)}</TextPromo>
                <form onSubmit={onSubmit}>
                <Input
                  type="number"
                  name="quantidade"
                  defaultValue={1}
                  min="1"
                  required
                />

                <ButtonC type="submit">
                    Adicionar ao Carrinho
                    <FaShoppingCart
                      size={15}
                    />
                </ButtonC>
              </form>
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
        }
    </>
  )
}
