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

const fetchHuntingPrice = () => {
  const price = document.getElementById("animalPrice");
  let input = price.value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/price/${input}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //animals available by price
      for (let i = 0; i < data[i]; i++) {
        const element = array[i];
      }
      let animalsByPrice = document.getElementById("availableAnimals");
      animalsByPrice.innerHTML = `Animals Available By Price: ${data}`;
    });
};
