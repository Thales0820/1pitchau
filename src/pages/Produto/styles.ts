import styled from "styled-components";

export const CardD = styled.div`
  margin: 20px;
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

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin-top: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 3px;
  &::placeholder {
    color: #ccc;
  }
  @media (max-width: 700px) {
    width: 30px;
    height: 20px;
  }
`;

export const ButtonC = styled.button`
  border: 0;
  padding: 15px;
  border-radius: 8px;
  background-color: var(--green);
  &:hover {
    filter: brightness(1.15);
    color: var(--white);
  }
  @media (max-width: 700px) {
    margin-bottom: 5px;
    padding: 10px;
    width: 170px;
    height: 50px;
  }
`

export const ButtonV = styled.button`
  border: 0;
  width: 60%;
  padding: 15px;
  border-radius: 100px;
  background-color: var(--red);
  &:hover {
    filter: brightness(1.3);
    color: var(--white);
  }
  font-size: 15px;
`
