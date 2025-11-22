export function formatNumbers(number?: number | null): string {
  if (number == null) return "0";

  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }

  return number.toString();
}
