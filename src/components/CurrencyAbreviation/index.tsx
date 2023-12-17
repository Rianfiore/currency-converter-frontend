import { CurrencyAbreviationProps } from "./types";
import "./styles.css";

export function CurrencyAbreviation(props: CurrencyAbreviationProps) {
  return (
    <p className={`currency-abreviation currency-abreviation-${props.variant}`}>
      {props.name}
    </p>
  );
}
