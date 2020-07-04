import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #fff;
      transition: color 0.2s;
      margin-left: auto;

      &:hover {
        color: #4682b4;
      }

    svg {
      margin-right: 4px;
      color: #fff;

      transition: color 0.2s;

      &:hover {
        color: #4682b4;
      }
    }
  }
`;

export const Info = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 220px;
      height: 300px;
      border-radius: 30px 0 30px 0;
    }

    #titulo {
      margin-left: 30px;

      h1 {
        font: 36px Staatliches;
        color: #fff;
        transition: color 0.2s;

          &:hover {
          color: #4682b4;
        }
      }

      p {
        font-size: 14px;
        margin-top: 6px;
        color: #fff;
        text-align: justify;
      }
    }
}

  ul {
    display: flex;
    list-style: none;
    margin-top: 100px;

    li {

      & + li {
        margin-left: 160px;
      }

      strong {
      display: block;
      margin-top: 4px;
      color: #fff;
      }

      span {
        display: block;
        font-size: 36px;
        color: #4682b4;
      }
    }
  }

`;
