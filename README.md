# Hunting-App

Hunting app about the season, zone, type, price, and animals stats, the app show you all the animals if you want a big or small game and many more things to come.

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

## Built With

- express
- jest
- github Actions
- NodeJS
- CORS
- Postman

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
