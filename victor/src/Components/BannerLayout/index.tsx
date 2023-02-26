import React from "react";
import { BannerConteudo, BannerStyle } from "./styles";

const BannerLayout = () => {
  return (
    <BannerStyle>
      <div>
        <BannerConteudo>
          <h3>
            Olá, eu sou o <span>Victor</span>
          </h3>
          <h1>Desenvolvedor Full Stack</h1>
          <p>
            Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e
            <span>que eu possa te ajudar de alguma forma.</span>
          </p>
          <button>Conhecer Mais</button>
        </BannerConteudo>
      </div>
    </BannerStyle>
  );
};

export default BannerLayout;
