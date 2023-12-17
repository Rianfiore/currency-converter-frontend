import { useState } from "react";
import "./styles.css";
import { ArrowDown } from "lucide-react";

export function ConvertButton() {
  const [isConverted, setIsConverted] = useState(false);
  return (
    <span
      className={`convert-button convert-button${
        isConverted ? "--is-converted" : ""
      } `}
      onClick={() => {
        setIsConverted(!isConverted);
      }}
    >
      <span
        className={`convert-button-icon convert-button-icon${
          isConverted ? "--is-converted" : ""
        } `}
      >
        <ArrowDown size={80} color="#ff5152" />
      </span>
    </span>
  );
}

//A animação do botão de conversão, bem como sua estilização, ainda estão em desenvolvimento.
