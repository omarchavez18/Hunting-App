//

class huntingAnimalService {
  // check animals by name
  static filterAnimals(huntingAnimals, name) {
    const animalsName = huntingAnimals.filter((animal) => animal.name === name);
    return animalsName;
  }

  // check animals by price
  static filterAnimalsByPrice(huntingAnimals, usdPrice) {
    const animalsPrice = huntingAnimals.filter(
      (animal) => animal.usdPrice <= usdPrice
    );
    return animalsPrice;
  }

  // check animals by huntingkind
  static filterByKind(huntingAnimals, huntingkind) {
    const animalsKind = huntingAnimals.filter(
      (animal) => animal.huntingkind === huntingkind
    );
    return animalsKind;
  }

  //check animals name by type
  static filterAnimalsNameByType(huntingAnimals, type) {
    const animalsType = huntingAnimals.filter((animal) => animal.type === type);

    const animalNameType = animalsType.map(
      (huntingAnimal) => huntingAnimal.name
    );
    return animalNameType;
  }

  // check available animals by season
  // show us the animals available to hunt by the month of season
  static filterSeasonMonth(huntingAnimals, season) {
    const seasonAnimal = huntingAnimals.filter((animal) =>
      animal.season.includes(season)
    );

    const animalByMonth = seasonAnimal.map((animal) => animal.name);
    return animalByMonth;
  }

  // check animals by zone
  static filterByZone(huntingAnimals, zone) {
    const animalsZone = huntingAnimals.filter((animal) =>
      animal.zone.includes(zone)
    );
    const animalsNameByZone = animalsZone.map((animal) => animal.name);
    return animalsNameByZone;
  }
}

module.exports = huntingAnimalService;
