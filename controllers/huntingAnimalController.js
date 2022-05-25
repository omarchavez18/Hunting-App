const huntingAnimalService = require("./../services/huntingAnimalService");
const animals = require("./../huntingAnimals");

class huntingAnimalController {
  // check animals by name
  static getAnimalsName(name) {
    return huntingAnimalService.filterAnimals(animals, name);
  }

  // check animals by price
  static getAnimalsByPrice(usdPrice) {
    return huntingAnimalService.filterAnimalsByPrice(animals, usdPrice);
  }

  // check animals by huntingkind
  static getAnimalsByKind(huntingkind) {
    return huntingAnimalService.filterByKind(animals, huntingkind);
  }

  // check animals by type
  static getAnimalsByType(type) {
    return huntingAnimalService.filterAnimalsNameByType(animals, type);
  }

  // check animals available by month of season
  static getAnimalsBySeason(season) {
    return huntingAnimalService.filterSeasonMonth(animals, season);
  }

  // check animals by zone
  static getAnimalsByZone(zone) {
    return huntingAnimalService.filterByZone(animals, zone);
  }
}

module.exports = huntingAnimalController;
