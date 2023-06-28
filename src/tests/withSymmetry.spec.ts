import withSymmetry from "../withSymmetry";

test("correctly uses the correct symmetrical x coordinate", () => {
  const [originalX, originalY] = [30, 50];
  let symmetricalX = 30;

  withSymmetry(originalX, originalY, 400, (x) => {
    symmetricalX = x;
  });

  expect(symmetricalX).toBe(370);
});
