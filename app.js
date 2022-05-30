// 1) endpoint - animals by name
const fetchHunting = () => {
  const search = document.getElementById("search");
  let input = search.value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/name/${input}`;

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
      let elementKind = document.getElementById("kind");
      elementKind.innerHTML = `HuntingKind: ${data[0].huntingkind}`;

      // season
      let elementSeason = document.getElementById("season");
      elementSeason.innerHTML = `Season: ${data[0].season}`;
      console.log(data);

      // type
      let elementType = document.getElementById("type");
      elementType.innerHTML = `Type: ${data[0].type}`;
      console.log(data);

      // Price
      let elementPrice = document.getElementById("price");
      elementPrice.innerHTML = `Price: ${data[0].usdPrice}`;

      // zone
      let elementZone = document.getElementById("zone");
      elementZone.innerHTML = `Zone: ${data[0].zone}`;
      console.log(data);
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
  const price = document.getElementById("animalPrice");
  let input = price.value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/price/${input}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //animals available by price

      let animalsByPrice = document.getElementById("availableAnimals");
      animalsByPrice.innerHTML = `Animals Available By Price: ${data}`;
    });
};

// 3) endpoint - animals by huntingkind

const fetchHuntingKind = () => {
  const kind = document.getElementById("kind");
  let input = kind.value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/huntingkind/${input}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //animals available by hunting kind
      let animalsByKind = document.getElementById("huntingKindAnimals");
      animalsByKind.innerHTML = `Animals available by hunting kind: ${data}`;
    });
};

//4) endpoint - animals by type
const fetchHuntingType = () => {
  const type = document.getElementById("type");
  let input = type.value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/type/${input}`;
  fetch(url)
    .then((res) => res.json())
    .then((info) => {
      let animalsByType = document.getElementById("huntingTypeAnimals");
      animalsByType.innerHTML = `Animals available by type: ${info}`;
    });
};

// 5) endpoint - animal by season

const fetchHuntingSeason = () => {
  const season = document.getElementById("season");
  let input = season.value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/seasonMonth/${input}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let animalsBySeason = document.getElementById("huntingSeasonAnimals");
      animalsBySeason.innerHTML = `Animals available by Season: ${data}`;
    });
};

// 6) endpoint - animals by zone
const fetchHuntingZone = () => {
  const zone = document.getElementById("zone");
  let input = zone.value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/zone/${input}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const animalsByZone = document.getElementById("huntingZoneAnimals");
      animalsByZone.innerHTML = `Animals available by zone: ${data}`;
    });
};
