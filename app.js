const showAnimals = (animal, id) => {
  /*this is the way to create a card for the info in html by js */
  let animalName = animal.name;
  let listItem = document.createElement("li");
  listItem.innerText = animalName;

  let animalImg = animal.img;
  let imgItem = document.createElement("img");
  imgItem.src = animalImg;
  listItem.appendChild(imgItem);

  let animalsByPrice = document.getElementById(id);
  animalsByPrice.appendChild(listItem);
};

// 1) endpoint - animals by name
const fetchHunting = () => {
  const search = document.getElementById("search").value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/name/${search}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //image
      let elementImg = data[0].img;
      img(elementImg);

      //name
      let elementName = document.getElementById("name");
      elementName.innerHTML = `Name: ${data[0].name}`;

      // huntingkind
      let elementKind = document.getElementById("kindOf");
      elementKind.innerHTML = `HuntingKind: ${data[0].huntingkind}`;

      // season
      let elementSeason = document.getElementById("seasonOf");
      elementSeason.innerHTML = `Season: ${data[0].season}`;

      // type
      let elementType = document.getElementById("typeOf");
      elementType.innerHTML = `Type: ${data[0].type}`;

      // Price
      let elementPrice = document.getElementById("price");
      elementPrice.innerHTML = `USD-Price: ${data[0].usdPrice}`;

      // zone
      let elementZone = document.getElementById("zoneOf");
      elementZone.innerHTML = `Zone: ${data[0].zone}`;
    })
    .catch((err) => {
      console.log(err);
    });

  //image
  const img = (url) => {
    const elementImg = document.getElementById("image");
    elementImg.src = url;
  };
};

// 2) endpoint - animals by price
const fetchHuntingPrice = () => {
  const price = document.getElementById("animalPrice").value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/price/${price}`;
  fetch(url)
    .then((res) => res.json())
    .then((animals) => {
      animals.forEach((animal) => showAnimals(animal, "availableAnimals"));
    });
};

// 3) endpoint - animals by huntingkind

const fetchHuntingKind = () => {
  const kind = document.getElementById("kind").value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/huntingkind/${kind}`;
  fetch(url)
    .then((res) => res.json())
    .then((animals) => {
      //animals available by hunting kind
      animals.forEach((animal) => showAnimals(animal, "huntingKindAnimals"));
    });
};

//4) endpoint - animals by type
const fetchHuntingType = () => {
  const type = document.getElementById("type").value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/type/${type}`;
  fetch(url)
    .then((res) => res.json())
    .then((info) => {
      let animalsByType = document.getElementById("huntingTypeAnimals");
      animalsByType.innerHTML = `Animals available by type: ${info}`;
    });
};

// 5) endpoint - animal by season

const fetchHuntingSeason = () => {
  const season = document.getElementById("season").value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/seasonMonth/${season}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let animalsBySeason = document.getElementById("huntingSeasonAnimals");
      animalsBySeason.innerHTML = `Animals available by Season: ${data}`;
    });
};

// 6) endpoint - animals by zone
const fetchHuntingZone = () => {
  const zone = document.getElementById("zone").value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/zone/${zone}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const animalsByZone = document.getElementById("huntingZoneAnimals");
      animalsByZone.innerHTML = `Animals available by zone: ${data}`;
    });
};
