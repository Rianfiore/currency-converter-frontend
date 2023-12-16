import { CurrencyAbreviationProps } from "./type";
import "./style.css";

export function CurrencyAbreviation(props: CurrencyAbreviationProps) {
  return (
    <p className={`currency-abreviation currency-abreviation-${props.variant}`}>
      {props.name}
    </p>
  );
}
