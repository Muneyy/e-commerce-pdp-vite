export default function showTwoDecimalPlaces(num: number) {
  return (Math.round(num * 100) / 100).toFixed(2);
}
