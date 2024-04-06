import styled from "styled-components";

export const Detalhe = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export const CardHeader = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 18px;
  border: 1px solid var(--black);
  text-align: center;
  padding: 10px;
  background-color: var(--red);
  margin-bottom: -19px;
`

export const CardBody = styled.div`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid var(--black);
  margin: 18px;
  padding: 10px;
  text-align: center;

  p {
    text-align: left;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  button{
    background-color: var(--red);
    color: var(--black);
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    margin-top: 5px;
    &:hover{
      color: var(--white);
    }
  }
`
