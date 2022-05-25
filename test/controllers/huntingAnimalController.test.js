const huntingAnimalController = require("./../../controllers/huntingAnimalController");
const animals = require("../../huntingAnimals");

describe("huntingAnimalController testing", () => {
  test("check animal data by name", () => {
    const animalData = animals.filter((animal) => animal.name === "Moose");
    const animalName = huntingAnimalController.getAnimalsName("Moose");
    expect(animalName).toStrictEqual(animalData);
  });

  test("check animals by price", () => {
    const animalPrice = animals.filter((animal) => animal.usdPrice <= 500);
    const animalValue = huntingAnimalController.getAnimalsByPrice(500);
    expect(animalValue).toStrictEqual(animalPrice);
  });

  test("check animals by huntingkind", () => {
    const animalKind = animals.filter(
      (animal) => animal.huntingkind === "big game"
    );
    const animalDta = huntingAnimalController.getAnimalsByKind("big game");
    expect(animalDta).toStrictEqual(animalKind);
  });

  test("check animals by type", () => {
    const animalType = animals
      .filter((animal) => animal.type === "deer")
      .map((animal) => animal.name);
    const animalHuntingType = huntingAnimalController.getAnimalsByType("deer");
    expect(animalHuntingType).toStrictEqual(animalType);
  });

  test("check animals available by season month", () => {
    const animalSeason = animals.filter((animal) =>
      animal.season.includes("november")
    );
    const animalSeasonMonth = animalSeason.map((animal) => animal.name);

    const animalHuntingSeason =
      huntingAnimalController.getAnimalsBySeason("november");
    expect(animalHuntingSeason).toStrictEqual(animalSeasonMonth);
  });

  test("check animals by zone", () => {
    const animalsByZone = animals.filter((animal) =>
      animal.zone.includes("USA")
    );
    const animalsZone = animalsByZone.map((animal) => animal.name);

    const animalsHuntingZone = huntingAnimalController.getAnimalsByZone("USA");

    expect(animalsHuntingZone).toStrictEqual(animalsZone);
  });
});
