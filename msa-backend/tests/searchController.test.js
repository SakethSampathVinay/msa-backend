// src/tests/search.test.js
import request from "supertest";
import { app } from "../src/app.js";

describe("Search API Endpoints", () => {
  test("GET /search/pizza should return pizza places", async () => {
    const res = await request(app).get("/search/pizza");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /search/juice should return juice places", async () => {
    const res = await request(app).get("/search/juice");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /search/combo should return both pizza and juice places", async () => {
    const res = await request(app).get("/search/combo");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});