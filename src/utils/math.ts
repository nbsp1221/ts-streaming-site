export const round = (x: number, decimalPlace: number): number => {
  const pow10 = 10 ** decimalPlace;
  return Math.round(x * pow10) / pow10;
};