//CLEAR  CONTAINER COULD BE UL OR DIV OR SECTION
const clearContainer = (parentID, ulID, tag, clas) => {
  // selected all the elements
  const ul = document.getElementById(ulID);
  const ulFather = document.getElementById(parentID);
  //delete ul
  ulFather.removeChild(ul);
  // create a new ul with the properties that the last one already had
  const newUl = document.createElement(tag);
  newUl.id = ulID;
  newUl.classList.add(clas);
  // insert new ul in parent
  ulFather.appendChild(newUl);
};

// CLEAR ERROR MESSAGE
//removeError() // 1 select the error element, 2 check if it exists 3 if it exists delete it if not return
const removeError = (parentID, errorID, tag) => {
  // select the error elements
  const errorFather = document.getElementById(parentID);
  const error = document.getElementById(errorID);

  //  here you check if exists or not, if exists delete it, if not return
  if (error === null) {
    return;
  }
  //  delete error´s div
  errorFather.removeChild(error);
  //Create a new div with the properties that the previous one already had
  // in the tag parameter we indicate which tag we will create example div, section etc
  const newDiv = document.createElement(tag);
  newDiv.id = errorID;
  // insert the new div in the parent
  errorFather.appendChild(newDiv);
};

//FUNCTION TO CREATE A CARD FOR THE INFO IN HTML
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

const showAnimalsByName = (animal, id) => {
  /*this is the way to create a card for the info in html by js */

  //img
  let animalImg = animal.img;
  let listItem = document.createElement("LI");
  let imgItem = document.createElement("img");
  imgItem.src = animalImg;
  listItem.appendChild(imgItem);

  //name
  let animalName = animal.name;
  let listItem1 = document.createElement("li");
  listItem1.innerText = `Name: ${animalName}`;
  listItem.appendChild(listItem1);

  //type
  let animalType = animal.type;
  let listItem2 = document.createElement("li");
  listItem2.innerText = `Type: ${animalType}`;
  listItem.appendChild(listItem2);

  //price
  let animalPrice = animal.usdPrice;
  let listItem3 = document.createElement("li");
  listItem3.innerText = `Price: ${animalPrice}`;
  listItem.appendChild(listItem3);

  //kind
  let animalKind = animal.huntingkind;
  let listItem4 = document.createElement("li");
  listItem4.innerText = `Hunting Kind: ${animalKind}`;
  listItem.appendChild(listItem4);

  //season
  let animalSeason = animal.season;
  let listItem5 = document.createElement("li");
  listItem5.innerText = `Season: ${animalSeason}`;
  listItem.appendChild(listItem5);

  //zone
  let animalZone = animal.zone;
  let listItem6 = document.createElement("li");
  listItem6.innerText = `Zone: ${animalZone}`;
  listItem.appendChild(listItem6);

  let animalsResult = document.getElementById(id);
  animalsResult.appendChild(listItem);
};

//FUNCTION TO SHOW ERROR IN THE APP FOR SEARCH
const showError = (id) => {
  // THIS PREVENTS THE ERROR MESSAGE FROM BEING DUPLICATED
  if (document.querySelector(`#${id}`).firstChild != null) {
    return;
  }
  let text = "SELECT AN OPTION";
  let textItem = document.createElement("P");
  textItem.classList.add("errorAlert");
  textItem.innerText = text;
  let mistake = document.getElementById(id);
  mistake.appendChild(textItem);
};

// 1) endpoint - animals by name
const fetchHunting = () => {
  const search = document.getElementById("search").value;
  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/name/${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((animals) => {
      removeError("divFatherName", "errorName", "div");
      clearContainer("divFatherName", "namess", "div", "card-body");

      animals.forEach((animal) => showAnimalsByName(animal, "namess"));
    })
    .catch((err) => {
      console.log(err);
      clearContainer("divFatherName", "namess", "div", "card-body");
      showError("errorName");
    });
  //image
  const img = (url) => {
    const elementImg = document.getElementById("image");
    elementImg.src = url;
  };
};
const searchBtnName = document
  .getElementById("searchBtnName")
  .addEventListener("click", fetchHunting);

// 3) endpoint - animals by huntingkind

const fetchHuntingKind = () => {
  const kind = document.getElementById("kind").value;
  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/huntingkind/${kind}`;
  fetch(url)
    .then((res) => res.json())
    .then((animals) => {
      removeError("fatherKind", "errorKind", "div");

      clearContainer("fatherKind", "huntingKindAnimals", "ul", "priceAnimals");
      //animals available by hunting kind
      animals.forEach((animal) => showAnimals(animal, "huntingKindAnimals"));
    })
    .catch((err) => {
      clearContainer("fatherKind", "huntingKindAnimals", "ul", "priceAnimals");
      showError("errorKind");
    });
};
// the function that you want to call must be declared first before called
const searchBtnKind = document
  .getElementById("searchBtnKind")
  .addEventListener("click", fetchHuntingKind);

// 2) endpoint - animals by price
const fetchHuntingPrice = () => {
  const price = document.getElementById("animalPrice").value;
  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/price/${price}`;
  fetch(url)
    .then((res) => res.json())
    .then((animals) => {
      removeError("fatherPrice", "errorPrice", "div");

      clearContainer("fatherPrice", "availableAnimals", "ul", "priceAnimals");
      animals.forEach((animal) => showAnimals(animal, "availableAnimals"));
    })
    .catch((err) => {
      clearContainer("fatherPrice", "availableAnimals", "ul", "priceAnimals");
      showError("errorPrice");
    });
};
const searchBtnPrice = document
  .getElementById("searchBtnPrice")
  .addEventListener("click", fetchHuntingPrice);

//4) endpoint - animals by type
const fetchHuntingType = () => {
  const type = document.getElementById("type").value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/type/${type}`;
  fetch(url)
    .then((res) => res.json())
    .then((info) => {
      removeError("fatherType", "errorType", "section");

      clearContainer("fatherType", "huntingTypeAnimals", "ul", "priceAnimals");
      let animalsByType = document.getElementById("huntingTypeAnimals");
      animalsByType.innerHTML = `Animals available by type: ${info}`;
    })
    .catch((err) => {
      console.log(err);
      clearContainer("fatherType", "huntingTypeAnimals", "ul", "priceAnimals");
      showError("errorType");
    });
};
const searchBtnType = document
  .getElementById("searchBtnType")
  .addEventListener("click", fetchHuntingType);

// 5) endpoint - animal by season
const fetchHuntingSeason = () => {
  const season = document.getElementById("season").value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/seasonMonth/${season}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeError("fatherSeason", "errorSeason", "section");

      clearContainer(
        "fatherSeason",
        "huntingSeasonAnimals",
        "ul",
        "priceAnimals"
      );
      let animalsBySeason = document.getElementById("huntingSeasonAnimals");
      animalsBySeason.innerHTML = `Animals available by Season: ${data}`;
    })
    .catch((err) => {
      console.log(err);
      clearContainer(
        "fatherSeason",
        "huntingSeasonAnimals",
        "ul",
        "priceAnimals"
      );
      showError("errorSeason");
    });
};
const searchBtnSeason = document
  .getElementById("searchBtnSeason")
  .addEventListener("click", fetchHuntingSeason);

// 6) endpoint - animals by zone
const fetchHuntingZone = () => {
  const zone = document.getElementById("zone").value;

  const url = `https://hunting-app-for-hunters.herokuapp.com/animals/zone/${zone}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeError("fatherZone", "errorZone", "section");

      clearContainer("fatherZone", "huntingZoneAnimals", "ul", "priceAnimals");
      const animalsByZone = document.getElementById("huntingZoneAnimals");
      animalsByZone.innerHTML = `Animals available by zone: ${data}`;
    })
    .catch((err) => {
      console.log(err);
      clearContainer("fatherZone", "huntingZoneAnimals", "ul", "priceAnimals");
      showError("errorZone");
    });
};
const searchBtnZone = document
  .getElementById("searchBtnZone")
  .addEventListener("click", fetchHuntingZone);

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

  //click-to-close action.
  closeModalBotton.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body"); // quita el no poder dar scroll una vez cerrada la imagen
    overlay.remove(); // quita el haber abierto la imagen.
  };

  overlay.appendChild(closeModalBotton);

  //add to html
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}
