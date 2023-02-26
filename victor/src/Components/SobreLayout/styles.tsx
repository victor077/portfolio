import styled from "styled-components";

export const SobreStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100;
  height: 100vh;

  .container-sobre {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
  }
`;

export const AvatarStyle = styled.div`
width: 40%;
  img {
    width: 400px;
    height: 350px;
    border: 3px solid rgba(255, 255, 255, 0.66);
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.66);
  }
`;

export const Layout = styled.div`
width: 40%;
`;
