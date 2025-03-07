// src/app.js
import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";
import dotenv from "dotenv";
import searchRoutes from "./routes/searchRoutes.js";
import logger from "./utils/logger.js";

dotenv.config();
const app = express();

app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use("/search", searchRoutes);

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`GraphQL Playground: http://localhost:${PORT}/graphql`);
});

export { app };
