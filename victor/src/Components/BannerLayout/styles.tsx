import styled from "styled-components";

export const BannerStyle = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;

export const BannerConteudo = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    font-weight: 200;
    font-size: 3rem;
    margin: 0;
    span {
      color: #E50914;
    }
  }

  h1 {
    font-size: 4rem;
    margin: 0;
  }

  p {
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 30rem;
    gap: 0.3rem;
    span {
      text-align: center;
    }
  }

  button {
    padding: 0.8rem 4rem;
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.9rem;
    background: #E50914;
    color: #fafafa
  }
`;
