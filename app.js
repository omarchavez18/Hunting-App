const showAnimals = (animal, id) => {
  /*this is the way to create a card for the info in html by js */
  let animalName = animal.name;
  let listItem = document.createElement("li");
  listItem.innerText = animalName;

  let animalImg = animal.img;
  let imgItem = document.createElement("img");
  imgItem.src = animalImg;
  listItem.appendChild(imgItem);

  let animalsResult = document.getElementById(id);
  animalsResult.appendChild(listItem);
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

//GALLERY

// FUNCTION TO CREATE A GALLERY
document.addEventListener("DOMContentLoaded", function () {
  RunApp();
});

function RunApp() {
  createGallery();
}

function createGallery() {
  const gallery = document.querySelector(".galleryImages");

  // FOR THIS SECTION THE NAME OF YOUR IMAGES MOST BE NUMBERS = 1,2,3,4,5,6 ETC...
  for (let i = 1; i <= 10; i++) {
    const image = document.createElement("picture");
    image.innerHTML = `<img class="galleryPhotos" src="./images/${i}.jpg" />`;

    //MODAL
    image.onclick = function () {
      showImage(i);
    };
    gallery.appendChild(image);
  }
}

//FUNCTION TO CREATE MODAL
function showImage(imageNumber) {
  const image = document.createElement("picture");
  image.innerHTML = `<img class="galleryPhotos" src="./images/${imageNumber}.jpg" />`;

  // create the overlay
  const overlay = document.createElement("DIV");
  overlay.appendChild(image);
  overlay.classList.add("overlay");

  // you can close the modal image just click anywhere
  overlay.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove(); // quita el haber abierto la imagen.
  };
  // modal close botton
  const closeModalBotton = document.createElement("P");
  closeModalBotton.textContent = "X";
  closeModalBotton.classList.add("close-btn");

  // accion de dar click para cerrar.
  closeModalBotton.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body"); // quita el no poder dar scroll una vez cerrada la imagen
    overlay.remove(); // quita el haber abierto la imagen.
  };

  overlay.appendChild(closeModalBotton);

  //añadirlo al html
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}
