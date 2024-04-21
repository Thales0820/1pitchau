import { Link } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Div } from "./styls"
import axios from "axios"
import { useState, useEffect } from "react"
import { CgMenuMotion } from "react-icons/cg"
import { PiArrowSquareInBold } from "react-icons/pi"

interface ICidades {
  id: number,
  nome: string
}

export const Contato = () => {


    const [Cidades, setDataCidade] = useState<Array<ICidades>>([]);
    const [contatos, setContatos] = useState<Array<any>>([]);

    useEffect(() => {
      axios.get('http://localhost:3000/cidades')
        .then((res) => {
          setDataCidade(res.data)
        })
        .catch((err: any) => {
          console.log(err)
        })
    }, [])

    useEffect(() => {
      axios.get('http://localhost:3000/contatos')
        .then((res) => {
          setContatos(res.data)
        })
        .catch((err: any) => {
          console.log(err)
        })
    }, [])

    const [nome, setNome] = useState ("");
    const [telefone, setTelefone] = useState ("");
    const [email, setEmail] = useState ("");
    const [cidade, setCidade] = useState ("");
    const [motivo, setMotivo] = useState ("");

    function criarContato() {
      const novoId = (contatos.length > 0 ? Math.max(...contatos.map(contato => parseInt(contato.id))) + 1 : 1).toString();
      axios.post('http://localhost:3000/contatos', {id: novoId, nome , telefone, email, cidade, motivo})
          .then((res) => console.log(res.data))
          .catch(err => console.error(err))
    }

    function limparCampos() {
      setNome("")
      setTelefone("")
      setEmail("")
      setCidade("")
      setMotivo("")
  }

  return(
    <>
      <Menu />
      <h1
        style={{
          textAlign: 'center',
          marginTop: '5px'
        }}
      >Contato</h1>
      <Div className="formulario" onSubmit={criarContato}>
        <h4>Nome</h4>
        <input name="nome" id="nome" type="text" placeholder="Digite Aqui" value={nome}
        onChange={e => setNome(e.target.value)}/>

        <h4>Telefone</h4>
        <input name="telefone" id="telefone" type="tel" placeholder="Digite Aqui" value={telefone} onChange={e => setTelefone(e.target.value)}/>

        <h4>Email</h4>
        <input name="email" id="email" type="email" placeholder="exemplo: exemplo@gmail.com"
        value={email} onChange={e => setEmail(e.target.value)}/>

        <h4>Selecione sua Cidade</h4>
        <select name="cidade" id="cidade" required value={cidade}
          onChange={e => setCidade(e.target.value)}>
          <option selected>Cidades</option>
          {
            Cidades.map((cidades) => {
              return (
                <option key={cidades.id} value={cidades.nome}>{cidades.nome}</option>
              )
            })
          }
        </select>

        <h4>Motivo de seu Contato</h4>
        <textarea name="motivo" id="motivo" placeholder="Qual o Motivo do Contato" value={motivo}
        onChange={e => setMotivo(e.target.value)}></textarea>
        <br />
        <button type="submit" onSubmit={limparCampos}>
          Enviar <PiArrowSquareInBold size={16}/>
        </button>
        <br />
        <Link to={'http://localhost:3001/ListaContatos'} style={{textDecoration: 'none'}}>
          <button>Lista de Contatos  <CgMenuMotion size={18}/></button>
        </Link>
      </Div>
    </>
  )
}
