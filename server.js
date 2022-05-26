const express = require("express");
const huntingAnimalService = require("./../hunting/services/huntingAnimalService");
const animals = require("./huntingAnimals");
//const cors = require("cors");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

//CORS
// app.use(cors({ origin: "*" }));
// eslint-disable-next-line no-undef
// const port = process.env.PORT || 3000;

//endpoint prueba de bienvenida
app.get("/", (req, res) => {
  res.json({ message: "hunting animals" });
});

// endpoint check animals stats by name
app.get("/animals/name/:name", (req, res) => {
  const parseName = req.params.name.split("_").join(" ");
  const animalsName = huntingAnimalService.filterAnimals(animals, parseName);
  res.json(animalsName);
});

//endpoint check animals by price
app.get("/animals/price/:price", (req, res) => {
  const animalsPrice = huntingAnimalService.filterAnimalsByPrice(
    animals,
    req.params.price
  );
  res.json(animalsPrice);
});

//endpoint check animals by huntingkind
app.get("/animals/huntingkind/:huntingKind", (req, res) => {
  const parseKind = req.params.huntingKind.split("_").join(" ");
  const animalKind = huntingAnimalService.filterByKind(animals, parseKind);
  res.json(animalKind);
});

//endpoint check animals by type
app.get("/animals/type/:type", (req, res) => {
  const animalType = huntingAnimalService.filterAnimalsNameByType(
    animals,
    req.params.type
  );
  res.json(animalType);
});

//endpoint check animals available by season month
app.get("/animals/seasonMonth/:seasonMonth", (req, res) => {
  const month = huntingAnimalService.filterSeasonMonth(
    animals,
    req.params.seasonMonth
  );
  res.json(month);
});

//endpoint check animals by zone
app.get("/animals/zone/:zone", (req, res) => {
  const parseZone = req.params.zone.split("_").join(" ");
  const zone = huntingAnimalService.filterByZone(animals, parseZone);
  res.json(zone);
});

app.listen(port, () => {
  console.log("Hunting App Server Ready!!");
});
