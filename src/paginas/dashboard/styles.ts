import styled, { css }from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font: 50px Staatliches;
  color: white;
  max-width: 450px;
  margin-top: 50px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 30px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #474a51;
    border: 2px solid #fff;

    ${(props) => props.hasError && css`border-color: #ff6961;`}

    &::placeholder {
      color: #474a51;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #4682b4;
    border-radius: 0px 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.3s;

      &:hover {
      background: ${shade(0.2, '#4682b4')};
    }
  }
`;

export const Animes = styled.div `
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 20px 0 20px 0;
    width: 100%;
    padding: 20px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: 0.3s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translate(10px);

    }

    img {
      width: 120px;
      height: 100px;
      border-radius: 20px 0 20px 0;
    }

    div#titulo {
      margin-left: 24px;

      strong {
        font-size: 25px;
        color: #121212;
      }

      p {
        font-size: 15px;
        color: #474a51;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #474a51;
      transition: color 0.2s;

      &:hover {
        color: #4682b4;
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #ff6961;
  margin-top: 8px;
`;
