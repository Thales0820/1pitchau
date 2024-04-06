import { FaShoppingCart } from "react-icons/fa"
import { GoSignIn } from "react-icons/go";
import { TextPromo, TitlePreco } from "../../components/Card/styles"
import { Menu } from "../../components/Menu"
import { ButtonC, ButtonV, CardD, Informacoes, Input } from "./styles"
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Link, useParams } from "react-router-dom";

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

  useEffect(() => {
      axios.get(`http://localhost:3000/produtos/${id}`).then((res) => {
        setDatadatadProduto(res.data)
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      })
  }, [id]);

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
                <TitlePreco>R${dataProduto.valor}</TitlePreco>
                <TextPromo>R${dataProduto.promo}</TextPromo>
                <form>
                <Input
                  type="number"
                  name="quantidade"
                  defaultValue={1}
                  min="1"
                  required
                />

                <ButtonC>
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
