app = require("./../app");
let animals = `https://hunting-app-for-hunters.herokuapp.com/animals/price/${price}`;
describe("test about functions of app.js", () => {
  test("showAnimals function test", () => {
    const show = app.showAnimals((animals, "availableAnimals"));
    expect(show).toBe("");
  });
});
