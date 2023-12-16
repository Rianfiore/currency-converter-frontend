import { CurrencyValueProps } from "./type";
import "./style.css";

export function CurrencyValue(props: CurrencyValueProps) {
  return <h1 className={`currency-value ${props.variant}`}>{props.value}</h1>;
}
