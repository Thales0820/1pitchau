import { Link, useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { CardBody, CardHeader, Detalhe } from "./styls"
import { useEffect, useState } from "react"
import axios from "axios"

interface IDataDetalhesContato {
  id: string,
  nome: string,
  telefone: string,
  email: string,
  cidade: string,
  motivo: string
}

export const DetalhesContato = () => {

  const [dataDetalhesContato, setDataDetalhesContato] = useState<IDataDetalhesContato | null>(null);
  const { id } = useParams<{id: string}>();

  useEffect(() => {
      axios.get(`http://localhost:3000/contatos/${id}`).then((res) => {
        setDataDetalhesContato(res.data)
      })
  }, [id]);

  return (
    <>
      <Menu />
      <br />
      {
        dataDetalhesContato && (
        <Detalhe
          key={dataDetalhesContato.id}
          id={dataDetalhesContato.id}
        >
          <CardHeader>
            <h3>Detalhes do Contato de {dataDetalhesContato.nome}</h3>
          </CardHeader>
          <CardBody>
            <p><strong>Nome: </strong>{dataDetalhesContato.nome}</p>
            <p><strong>Telefone: </strong>{dataDetalhesContato.telefone}</p>
            <p><strong>Email: </strong>{dataDetalhesContato.email}</p>
            <p><strong>Cidade: </strong>{dataDetalhesContato.cidade}</p>
            <p><strong>Motivo: </strong>{dataDetalhesContato.motivo}</p>
            <br />
            <Link to={'http://localhost:3001/ListaContatos'} style={{textDecoration: 'none'}}>
              <button>Voltar</button>
            </Link>
          </CardBody>
        </Detalhe>
        )
      }
    </>
  )
}
