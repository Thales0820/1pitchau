import styled from "styled-components";

export const CardD = styled.div`
  margin: 18px;
  border: 2px solid var(--black);
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 60% 40%;
`

export const Informacoes = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
`

export const ButtonV = styled.button`
  border: 0;
  width: 80%;
  padding: 15px;
  border-radius: 100px;
  background-color: var(--red);
  :hover {
    filter: brightness(1.3);
  }
  margin-top: 5px;
  font-size: 15px;
`
export const ButtonC = styled.button`
  border: 0;
  padding: 15px;
  width: 80%;
  border-radius: 100px;
  background-color: var(--green);
  :hover {
    filter: brightness(1.3);
  }
  margin-top: 10px;
  font-size: 15px;
`
