type NumStr = number | string;
function processNumStr(value: NumStr): string {
  return "El valor es " + value.toString;
}

type Comparator = (a: number, b: number) => boolean;
const isGreater: Comparator = (a, b) => a > b;

type MathOperation = "sum" | "subtract" | "multiply" | "divide";
type Calculator = {
    operation: MathOperation,
    calculate: (a: number, b: number) => number
};
