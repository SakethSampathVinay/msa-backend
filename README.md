# MSA Backend

## Description
This project is a backend service for finding nearby pizza and juice shops using a third-party API (Four Square). It provides both RESTful and GraphQL APIs to search for places offering pizza, juice, or both.

## Features
- **RESTful APIs**:
  - `GET /search/pizza`: List places offering pizza.
  - `GET /search/juice`: List places offering juice.
  - `GET /search/combo`: List places offering both.
- **GraphQL API**:
  - `searchPizza`: Returns a list of pizza places.
  - `searchJuice`: Returns a list of juice places.
  - `searchCombo`: Returns a list of places offering both pizza and juice.

## Tech Stack
- **Language**: Node.js
- **Frameworks**: Express.js, Apollo Server
- **API**: Four Square for data retrieval
- **Logging**: Winston
- **Testing**: Jest

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SakethSampathVinay/msa-backend.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## API Documentation
- **RESTful Endpoints**:
  - `/search/pizza`: Retrieves a list of pizza places.
  - `/search/juice`: Retrieves a list of juice places.
  - `/search/combo`: Retrieves a list of places offering both.

- **GraphQL Queries**:
  - `searchPizza`: Query for pizza places.
  - `searchJuice`: Query for juice places.
  - `searchCombo`: Query for places offering both.