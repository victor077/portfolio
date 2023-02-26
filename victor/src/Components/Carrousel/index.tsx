import React from "react";
import { CarrouselStyle } from "./styles";
import teste from "../../assets/git.png";
import node from "../../assets/node.png";
import figma from "../../assets/figma.png";
import sql from "../../assets/sql1.png";
import tsx from "../../assets/typescript.png";
import net from "../../assets/net.png";
import react from "../../assets/react.png";
import js from "../../assets/js.png";

const Carrousel = () => {
  return (
    <CarrouselStyle>
      <div className="container-carrousel">
        <div className="item-carrousel">
          <img className="react" src={react} alt="" />
        </div>
        <div className="item-carrousel">
          <img src={js} alt="" />
        </div>
        <div className="item-carrousel">
          <img src={teste} alt="" />
        </div>
        <div className="item-carrousel">
          <img className="node" src={node} alt="" />{" "}
        </div>
        <div className="item-carrousel">
          {<img className="figma" src={figma} alt="" />}
        </div>
        <div className="item-carrousel">{<img src={net} alt="" />}</div>
        <div className="item-carrousel">{<img src={sql} alt="" />}</div>
        <div className="item-carrousel">{<img src={tsx} alt="" />}</div>
      </div>
    </CarrouselStyle>
  );
};

export default Carrousel;
