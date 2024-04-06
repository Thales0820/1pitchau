import styled from "styled-components";

export const Tabela = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  margin: auto;
  margin-top: 15px;
  width: 80%;
`

export const Topico = styled.thead`
  background-color: var(--red);
`

export const Topicos = styled.tr`
  td {
    border: 1px solid;
    padding: 10px;
    text-align: center;
    width: 120px;
    font-weight: bold;
  }
`;


export const Informacoes = styled.tbody`
  padding: 20px;

  tr {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    cursor: pointer;
  }

  td {
    border: 1px solid black;
    padding: 10px;
    text-align: center;
  }
`

export const Detalhes = styled.td`
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  width: 120px;

  button{
    background-color: var(--red);
    color: var(--black);
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5px;
    &:hover{
      color: var(--white);
    }
  }
`;
