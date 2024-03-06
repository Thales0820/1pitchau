import styled from "styled-components";

export const Div = styled.form`

  input {
    margin-bottom: 20px;
    width: 30%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: block;
    margin-bottom: 5px;
  }

  select {
      margin-bottom: 20px;
      width: 33.5%;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: block;
      margin-bottom: 5px;
  }

  button {
    display: block;
    margin: 0 auto;
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    :hover {
      background-color: #fff;
      color: #000;
    }
    }
`

export const Textarea = styled.text`
  h1 {
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 20px;
  }
`
