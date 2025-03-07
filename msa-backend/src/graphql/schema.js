// src/graphql/schema.js
import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Place {
    name: String
    address: String
    rating: Float
    phone: String
  }

  type Query {
    searchPizza: [Place]
    searchJuice: [Place]
    searchCombo: [Place]
  }
`;

export default typeDefs;