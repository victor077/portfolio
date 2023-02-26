import React from "react";
import { HeaderStyle, ListaStyle } from "./styles";
import { AiOutlineMail } from "react-icons/ai";
const HeaderLayout = () => {
  return (
    <HeaderStyle>
      <nav>
        <a href="" className="logo">
          <span className="icone">
            <AiOutlineMail />
          </span>
          <span>victorangelosanttos@hotmail.com</span>
        </a>
        <div>
          <ListaStyle>
            <li>
              <a href=""> linkedin</a>
            </li>
            <li>
              <a href=""> linkedin</a>
            </li>
            <li>
              <a href=""> linkedin</a>
            </li>
          </ListaStyle>
        </div>
      </nav>
    </HeaderStyle>
  );
};

export default HeaderLayout;
