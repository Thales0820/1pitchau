import styled from "styled-components";

export const Div = styled.form`

  h4 {
    margin-left: 460px;
    margin-top: 15px;
    margin-bottom: 5px;
    @media(max-width: 700px) {
      text-align: center;
      margin-left: 0px;
    }
  }

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

  textarea {
    margin-bottom: 20px;
    width: 30.5%;
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
    &:hover {
      background-color: #fff;
      color: #000;
    }
    }
`
