# Hunting-App

>Front end  and back end of Hunting App.

## Live Demo
To see the page click in the next link
[HuntApp](https://omarchavez18.github.io/Hunting-App/)


## Sneak peak
![Captura de pantalla 2022-06-07 202725](https://user-images.githubusercontent.com/84557440/172511742-89b138a1-cf51-4773-a200-da3fd84f6c69.png)
![Captura de pantalla 2022-06-07 202804](https://user-images.githubusercontent.com/84557440/172511756-5b11544b-2340-4b77-981b-07578470126a.png)
![Captura de pantalla 2022-06-07 202832](https://user-images.githubusercontent.com/84557440/172511790-abff3794-fc26-4295-94a1-20f16445735e.png)


## Built With

- HTML
- CSS
- JAVASCRIPT
- EXPRESS
- JEST
- GITHUB ACTIONS
- NODEJS
- CORS
- POSTMAN


### Description
    This page is made to help hunters search for information about hunting season, tips for beginners, recipes, 
    value data about turkey hunting, and an app to look at with specific filters about different types of hunting.

    Perhaps you´re interested in many stuff about these topics I share
    with you a couple of links where you can find info about gear, guns,
    videos, and interesting things might you can find useful.
    
    Hunting app about the season, zone, type, price, and animals stats, the app show you all the animals if you want
    a big or small game and many more things to come.
   
   
BackEnd Documentation

API Documentation

## Endpoints

_Base URL_: `https://hunting-app-for-hunters.herokuapp.com/`

| Description                             | Method | Endpoint                            |
| :-------------------------------------- | :----- | :---------------------------------- |
| Fetch                                   | GET    | `/`                                 |
| Fetch initial message                   | GET    | `/`                                 |
| Fetch specific animal info              | GET    | `/animals/name/:name`               |
| Fetch group of animals by price         | GET    | `/animals/price/price`              |
| Fetch group of specific animal by kind  | GET    | `/animals/huntingKind/:huntingKind` |
| Fetch group of specific animal by type  | GET    | `/animals/type/:type`               |
| Fetch group of specific animal by month | GET    | `/animals/seasonMonth/:seasonMonth` |
| Fetch group of specific animal by zone  | GET    | `/animals/zone/:zone`               |

## Expected Response Status Codes

| Class        | Symbol                | HTTP status code |
| :----------- | :-------------------- | :--------------- |
| Success      | :ok                   | 200              |
| Success      | :created              | 201              |
| Client Error | :bad_request          | 400              |
| Client Error | :unauthorized         | 401              |
| Server Error | :unprocessable_entity | 500              |



## Getting Started

- To get a copy of the API, run `https://github.com/omarchavez18/Hunting-App.git`
- Run `npm i ` to install dependencies
- Start development server by executing `node server.js`
- Visit the link `http://localhost:3000` on your browser to access resources
- Run `npm test` to get test report

👤 &nbsp; **Omar Chávez**

- LinkedIn: [omarchavezgdv](https://www.linkedin.com/in/omarchavezgdv/)
- GitHub: [@omarchavez18](https://github.com/omarchavez18)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microsoft Launch X Innovaccion Virtual
