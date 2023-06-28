function withSymmetry(
  x: number,
  y: number,
  width: number,
  callbackFn: (x: number, y: number) => void
): void {
  callbackFn(x, y);
  callbackFn(width - x, y);
}

export default withSymmetry;
