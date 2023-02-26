import styled from "styled-components";

export const CarrouselStyle = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  background: #252525;

  .container-carrousel {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item-carrousel {
    border-radius: 20px;
    padding: 2rem;
  }

  img {
    width: 40px;
    height: 40px;
  }
  .icone {
    width: 40px;
    height: 40px;
  }

  .figma {
    width: 28px;
  }
  .node {
    width: 60px;
  }
  .react {
    width: 46px;
  }
`;
