import { Link } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Detalhes, Informacoes, Tabela, Topico, Topicos } from "./styls"
import { useEffect, useState } from "react"
import axios from "axios"

interface IDataContatos {
  id: number,
  nome: string,
  telefone: string,
  email: string,
  cidade: string
}

export const ListaContatos = () => {

  const [dataContatos, setDataContatos] = useState<Array<IDataContatos>>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/contatos').then((res) => {
      setDataContatos(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  return(
  <>
  <Menu />
    <h1
      style={{
        textAlign: 'center',
        marginTop: '5px'
      }}
    >Lista de Contatos</h1>
    <Tabela>
      <Topico>
        <Topicos>
          <td>Id</td>
          <td>Nome</td>
          <td>Telefone</td>
          <td>Email</td>
          <td>Cidade</td>
          <td>#</td>
        </Topicos>
      </Topico>
      {
      dataContatos.map((contato) => {
        return (
        <Informacoes>
          <tr>
            <td>{contato.id}</td>
            <td>{contato.nome}</td>
            <td>{contato.telefone}</td>
            <td>{contato.email}</td>
            <td>{contato.cidade}</td>
            <Detalhes>
            <Link to={'http://localhost:3001/DetalhesContato/' + contato.id}
                  style={{textDecoration: 'none'}}>
              <button>Detalhes</button>
            </Link>
            </Detalhes>
          </tr>
        </Informacoes>
         )
        })
      }
    </Tabela>
  </>
  )
}
