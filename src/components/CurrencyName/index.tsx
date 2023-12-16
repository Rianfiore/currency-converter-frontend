import { CurrencyNameProps } from "./types";
import "./styles.css";

export function CurrencyName(props: CurrencyNameProps) {
  return (
    <button className={`currency-name currency-name-${props.variant}`}>
      {props.name}
    </button>
  );
}
