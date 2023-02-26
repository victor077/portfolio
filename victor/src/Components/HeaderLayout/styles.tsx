import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #252525;
  display: flex;
  justify-content: center;
  width: 100;
  height: 6rem;

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.66);
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .icone {
    padding: 0.5rem 0.9rem;
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.66);
    border: 0.1px solid rgba(250, 250, 250, 0.2);
    background: #242424;
  }
`;

export const ListaStyle = styled.ul`
  display: flex;
  gap: 3rem;
  text-decoration: none;
  list-style: none;
`;
