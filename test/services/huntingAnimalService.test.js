const huntingAnimals = require("./../../huntingAnimals");
const huntingAnimalService = require("./../../services/huntingAnimalService");

//check animal by name

describe("get result from huntingAnimals.js", () => {
  test("get animals data by the name", () => {
    const name = huntingAnimals.filter((animal) => animal.name === "Wapiti");
    const animalsName = huntingAnimalService.filterAnimals(
      huntingAnimals,
      "Wapiti"
    );
    expect(animalsName).toStrictEqual(name);
  });

  // check animals by price or lower

  test("check animals data by the price ", () => {
    const name = huntingAnimals.filter((animal) => animal.usdPrice <= 250);
    const animalPrice = huntingAnimalService.filterAnimalsByPrice(
      huntingAnimals,
      250
    );
    expect(animalPrice).toStrictEqual(name);
  });

  // check animals by kind
  test("check animals by huntingkind ", () => {
    const name = huntingAnimals.filter(
      (animal) => animal.huntingkind === "big game"
    );
    const animalKind = huntingAnimalService.filterByKind(
      huntingAnimals,
      "big game"
    );
    expect(animalKind).toStrictEqual(name);
  });

  // check animals name by type
  test("check animlas name by type", () => {
    const names = huntingAnimals
      .filter((animal) => animal.type === "deer")
      .map((animal) => animal.name);

    const animalsType = huntingAnimalService.filterAnimalsNameByType(
      huntingAnimals,
      "deer"
    );
    expect(animalsType).toStrictEqual(names);
  });
  // check animals by season
  test("check animals available to hunt by month season", () => {
    const animalSeason = huntingAnimalService.filterSeasonMonth(
      huntingAnimals,
      "november"
    );
    expect(animalSeason).toStrictEqual([
      "Moose",
      "Black bear",
      "Winter cottontail rabbit",
      "Raccoon",
      "Squirrel",
      "Green head duck",
    ]);
  });

  test("check animals by zone", () => {
    const animalsByZone = huntingAnimalService.filterByZone(
      huntingAnimals,
      "USA"
    );
    expect(animalsByZone).toStrictEqual([
      "Wapiti",
      "Coues whitetail deer",
      "Wild boar",
      "Mule deer",
      "Black bear",
      "Winter cottontail rabbit",
      "Raccoon",
      "Squirrel",
      "Green head duck",
    ]);
  });
});
