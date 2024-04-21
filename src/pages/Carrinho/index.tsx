import { Menu } from "../../components/Menu";
import { Button, TBTr, THTh, THtr, Table, Td, TextButton } from "./styles";
import { FaTrash } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { ICarrinho } from "../../@types/interfaces";
import { formataValorBR } from "../../service/format";

export const Carrinho = () => {

  const [dataCarrinho, setDataCarrinho] = useState<Array<ICarrinho>>([])

  const [valorTotal, setValorTotal] = useState<number>(0)

  const atualizarValorTotal = useCallback(
    (carrinho: Array<ICarrinho>) => {
      let total = 0
      carrinho.forEach((produto) => {
        total = produto.total + total
      })

      setValorTotal(total)
    }, [])

  useEffect(() => {
    let lsCarrinho = localStorage.getItem('@1pitchau:carrinho')

    let carrinho: Array<ICarrinho> =[]

    if (typeof lsCarrinho === 'string') {
      carrinho = JSON.parse(lsCarrinho)
    }

    if (carrinho.length > 0) {
      setDataCarrinho(carrinho)
      atualizarValorTotal(carrinho)
    }

  const removerProdutoCarrinho = useCallback((id: number) => {
    let carrinho = dataCarrinho.filter((produto) => {
      return produto.id != id
    })

    localStorage.setItem('@1pitchau:carrinho', JSON.stringify(carrinho))

    setDataCarrinho(carrinho)
    atualizarValorTotal(carrinho)
  }, [dataCarrinho])

})
  return (
    <>
      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
          marginTop: 20,
          marginBottom: 40
        }}
      >
        <h2 style={{textAlign: 'center'}}>Carrinho de compras:</h2>
        <br />
        <Table>
          <thead>
            <THtr>
              <THTh>Produto</THTh>
              <THTh
                style={{
                  minWidth: 300
                }}
              >Nome do produto</THTh>
              <THTh>Quantidade</THTh>
              <THTh>Vlr. Unit.</THTh>
              <THTh>Vlr. Total.</THTh>
              <THTh>Ações</THTh>
            </THtr>
          </thead>
          <tbody>
            {
              dataCarrinho.map((produto) => {
                return(
                  <TBTr key={produto.id}>
                    <Td><img src={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/' + produto.imagemp} /></Td>
                    <Td width={300}>{produto.nome}</Td>
                    <Td>{produto.quantidade}</Td>
                    <Td>{formataValorBR(produto.promo)}</Td>
                    <Td>{formataValorBR(produto.total)}</Td>
                    <Td>
                      <Button type="button">
                        <TextButton>
                          <FaTrash />
                        </TextButton>
                      </Button>
                    </Td>
                  </TBTr>
                )
              })
            }
          </tbody>
          <tfoot>
            <TBTr>
              <Td width={300}>Valor Total:</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>{formataValorBR(valorTotal)}</Td>
              <Td></Td>
            </TBTr>
          </tfoot>
        </Table>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Button
            type="button"
          >
            <TextButton>Limpar Carrinho</TextButton>
          </Button>
          <Button
            type="button"
            bgColor="green"
          >
            <TextButton>Finalizar Pedido</TextButton>
          </Button>
        </div>
      </div>
    </>
  )
}
