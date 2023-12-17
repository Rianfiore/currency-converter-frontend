import { CurrencyValueProps } from "./types";
import "./styles.css";

export function CurrencyValue(props: CurrencyValueProps) {
  return <h1 className={`currency-value ${props.variant}`}>{props.value}</h1>;
}
