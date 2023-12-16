import { useState } from "react";

export function ConvertButton() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      {isClicked ? "Terminar" : "Começar"}
    </button>
  );
}

//A animação do botão de conversão, bem como sua estilização, ainda estão em desenvolvimento.